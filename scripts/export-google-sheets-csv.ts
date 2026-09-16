import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { DEFAULT_MENU_DATA } from '../src/data/menuData';

const outputDirectory = resolve(import.meta.dirname, '..');

const escapeCsv = (value: string | number | undefined) => {
  const text = String(value ?? '');
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const toCsv = (headers: string[], rows: Array<Array<string | number | undefined>>) => [
  headers.map(escapeCsv).join(','),
  ...rows.map((row) => row.map(escapeCsv).join(',')),
].join('\r\n') + '\r\n';

const categoryRows = DEFAULT_MENU_DATA.map((category, index) => [
  category.nombre,
  index + 1,
  'TRUE',
]);

const dishRows = DEFAULT_MENU_DATA.flatMap((category) => category.items.map((dish, index) => [
  category.nombre,
  dish.nombre,
  dish.descripcion,
  dish.precio,
  dish.imagen,
  dish.cuadrante,
  index + 1,
  'TRUE',
]));

await Promise.all([
  writeFile(
    resolve(outputDirectory, 'categorias.csv'),
    toCsv(['nombre', 'orden', 'visible'], categoryRows),
    'utf8',
  ),
  writeFile(
    resolve(outputDirectory, 'platos.csv'),
    toCsv(
      ['categoria', 'nombre', 'descripcion', 'precio', 'url_imagen', 'cuadrante', 'orden', 'visible'],
      dishRows,
    ),
    'utf8',
  ),
]);

console.log(`Listos: ${categoryRows.length} categorías y ${dishRows.length} platos.`);
