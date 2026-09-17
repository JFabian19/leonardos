import Papa from 'papaparse';
import { DEFAULT_MENU_DATA, type Category, type Dish } from '../data/menuData';

// La hoja debe permitir lectura pública o estar publicada en la web.
export const SHEET_ID = '1e_nU52REiZWGdaSOw9e5cqpjsW_QL8FAy68jzTzR2uM';
export const SHEET_TABS = {
  categories: 'Categorías',
  dishes: 'Platos',
} as const;

type SheetRow = Record<string, string | undefined>;

export type SheetCategory = SheetRow & {
  nombre?: string;
  orden?: string;
  visible?: string;
};

export type SheetDish = SheetRow & {
  categoria?: string;
  nombre?: string;
  descripcion?: string;
  precio?: string;
  url_imagen?: string;
  cuadrante?: string;
  orden?: string;
  visible?: string;
};

const value = (row: SheetRow, ...columns: string[]) => {
  for (const column of columns) {
    const cell = row[column];
    if (cell?.trim()) return cell.trim();
  }
  return '';
};

const sortOrder = (row: SheetRow, index: number) => {
  const parsed = Number.parseFloat(value(row, 'orden', 'Orden'));
  return Number.isFinite(parsed) ? parsed : index;
};

const isVisible = (row: SheetRow) => !['0', 'false', 'no', 'oculto'].includes(value(row, 'visible', 'Visible').toLowerCase());

const price = (rawPrice: string) => {
  const parsed = Number.parseFloat(rawPrice.replace(/[^\d,.-]/g, '').replace(',', '.'));
  return Number.isFinite(parsed) ? `S/ ${parsed.toFixed(2)}` : rawPrice;
};

const validQuadrant = (rawQuadrant: string): Dish['cuadrante'] => (
  ['tl', 'tr', 'bl', 'br'].includes(rawQuadrant) ? rawQuadrant as Dish['cuadrante'] : undefined
);

const categoryKey = (name: string) => name
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim()
  .replace(/\s+/g, ' ');

const categoryId = (name: string, index: number) => `categoria-${index + 1}-${categoryKey(name).replace(/[^a-z0-9]+/g, '-')}`;

export const fetchSheetData = async <T extends SheetRow>(sheetName: string): Promise<T[]> => {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`La hoja devolvió ${response.status}`);

    const csvText = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse<T>(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data),
        error: reject,
      });
    });
  } catch (error) {
    console.warn(`No se pudo leer la pestaña ${sheetName}:`, error);
    return [];
  }
};

/**
 * Forma la carta a partir de dos pestañas de Google Sheets.
 *
 * Categorías: nombre, orden, visible
 * Platos: categoria, nombre, descripcion, precio, url_imagen, cuadrante, orden, visible
 */
const dishKey = (name: string) => name
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/\bde\b/g, 'con')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const defaultDishesByKey = new Map<string, Dish>(
  DEFAULT_MENU_DATA.flatMap((cat) => cat.items).map((dish) => [dishKey(dish.nombre), dish])
);

const polloVerdurasDish = defaultDishesByKey.get('pollo con verduras');
if (polloVerdurasDish) {
  defaultDishesByKey.set('tipakay verduras chaufa', polloVerdurasDish);
  defaultDishesByKey.set('pollo con verduras chaufa', polloVerdurasDish);
  defaultDishesByKey.set('pollo verduras chaufa', polloVerdurasDish);
}

export const fetchMenuFromSheet = async (): Promise<Category[] | null> => {
  const [categoryRows, dishRows] = await Promise.all([
    fetchSheetData<SheetCategory>(SHEET_TABS.categories),
    fetchSheetData<SheetDish>(SHEET_TABS.dishes),
  ]);

  const categories = categoryRows
    .map((row, index) => ({
      nombre: value(row, 'nombre', 'Nombre'),
      orden: sortOrder(row, index),
      visible: isVisible(row),
      index,
    }))
    .filter((category) => category.nombre && category.visible)
    .sort((first, second) => first.orden - second.orden)
    .map(({ nombre, index }) => ({ id: categoryId(nombre, index), nombre, items: [] as Dish[] }));

  if (!categories.length) return null;

  const categoriesByName = new Map(categories.map((category) => [categoryKey(category.nombre), category]));
  dishRows
    .map((row, index) => ({ row, orden: sortOrder(row, index) }))
    .filter(({ row }) => isVisible(row))
    .sort((first, second) => first.orden - second.orden)
    .forEach(({ row }) => {
      const category = categoriesByName.get(categoryKey(value(row, 'categoria', 'Categoría')));
      const nombre = value(row, 'nombre', 'Nombre', 'nombre del plato');
      const rawPrice = value(row, 'precio', 'Precio');
      if (!category || !nombre || !rawPrice) return;

      const descripcion = value(row, 'descripcion', 'descripción', 'Descripción');
      let imagen: string | undefined = value(row, 'url_imagen', 'URL de imagen', 'imagen') || undefined;
      let cuadrante = validQuadrant(value(row, 'cuadrante', 'Cuadrante'));

      // Si en Google Sheets viene vacía o viene la imagen en cuadrícula antigua (/menu-grid-*)
      // y en el código local ya tenemos una foto dedicada e individual, priorizamos la local:
      const defaultDish = defaultDishesByKey.get(dishKey(nombre));
      if (defaultDish && defaultDish.imagen) {
        const isSheetGrid = !imagen || imagen.includes('/menu-grid-');
        const isLocalDedicated = !defaultDish.imagen.includes('/menu-grid-') && !defaultDish.cuadrante;
        if (isSheetGrid && isLocalDedicated) {
          imagen = defaultDish.imagen;
          cuadrante = undefined;
        }
      }

      category.items.push({
        nombre,
        precio: price(rawPrice),
        descripcion: descripcion || undefined,
        imagen,
        cuadrante,
      });
    });

  return categories;
};
