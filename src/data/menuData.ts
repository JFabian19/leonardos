export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  cuadrante?: 'tl' | 'tr' | 'bl' | 'br';
  precio: string;
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

const item = (nombre: string, precio: string, descripcion?: string, imagen?: string, cuadrante?: Dish['cuadrante']): Dish => ({ nombre, precio, descripcion, imagen, cuadrante });
const gridItem = (nombre: string, precio: string, descripcion: string | undefined, imagen: string, cuadrante: NonNullable<Dish['cuadrante']>): Dish => item(nombre, precio, descripcion, imagen.replace(/\.png$/, '.webp'), cuadrante);

// Carta actualizada de las piezas gráficas compartidas por Leonardo's.
export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: 'pollos-a-la-brasa', nombre: 'Pollos a la brasa',
    items: [
      item('1 pollo entero', 'S/ 55.00', 'Papas fritas + ensalada', '/pollo-brasa-entero.webp'),
      item('1/2 pollo', 'S/ 30.00', 'Papas fritas + ensalada', '/pollo-brasa-medio-referencia.webp'),
      item('1/4 pollo', 'S/ 15.00', 'Papas fritas + ensalada', '/pollo-brasa-cuarto-referencia.webp'),
      item('Mostro 1/4 de pollo', 'S/ 18.00', 'Chaufa + papas fritas + ensalada', '/pollo-mostro-referencia.webp'),
      item('Mostrito 1/8 de pollo', 'S/ 13.00', 'Chaufa + papas fritas + ensalada', '/pollo-mostrito-octavo.webp'),
    ],
  },
  {
    id: 'promos-pepsi', nombre: 'Promo Pepsi',
    items: [
      item('Promo 1/4 pollo', 'S/ 17.00', 'Papas fritas + ensalada + Pepsi 450 ml', '/combo-cuarto-pepsi.webp'),
      gridItem('Promo 1/2 pollo', 'S/ 32.00', 'Papas fritas + ensalada + Pepsi Jumbo', '/menu-grid-01-promos.png', 'tl'),
      gridItem('Promo 1 pollo entero', 'S/ 58.00', 'Papas fritas + ensalada + Pepsi 1.5 L', '/menu-grid-01-promos.png', 'tr'),
      item('Mostrito Pepsi', 'S/ 14.00', 'Chaufa + papas fritas + ensalada + Pepsi 355 ml', '/combo-octavo-mostrito-pepsi.webp'),
      item('Mostro Pepsi', 'S/ 19.00', 'Chaufa + papas fritas + ensalada + Pepsi 450 ml', '/combo-cuarto-mostrito-pepsi.webp'),
      item('Promo familiar', 'S/ 71.00', '1 pollo + papas fritas + ensalada + Pepsi 1.5 L + 1/4 pollo solo o chaufa', '/combo-pepsi-familiar.webp'),
      gridItem('Promo especial 1/2', 'S/ 75.00', '1 pollo entero + 1/2 pollo solo + papas fritas + ensalada', '/menu-grid-01-promos.png', 'bl'),
      gridItem('Promo especial 1/2', 'S/ 66.00', '1 pollo entero + 1/2 pollo solo + papas fritas + ensalada', '/menu-grid-01-promos.png', 'bl'),
      gridItem('Promo especial con chaufa', 'S/ 73.00', '1 pollo entero + 1/4 pollo solo + chaufa + papas fritas + ensalada', '/menu-grid-03-combos.png', 'br'),
    ],
  },
  {
    id: 'combos-a-la-brasa', nombre: 'Combos a la brasa',
    items: [
      gridItem('Salchibrasa 1/4', 'S/ 19.00', '1/4 pollo + papas fritas + ensalada + hot dog', '/menu-grid-02-salchibrasas.png', 'tl'),
      gridItem('Salchibrasa mostro', 'S/ 20.00', 'Mostro + chaufa + papas fritas + ensalada + hot dog', '/menu-grid-02-salchibrasas.png', 'tr'),
      gridItem('Salchibrasa mostrito', 'S/ 16.00', 'Mostrito + chaufa + papas fritas + ensalada + hot dog', '/menu-grid-02-salchibrasas.png', 'bl'),
      gridItem('Salchibrasa 1/8', 'S/ 14.00', '1/8 pollo + papas fritas + ensalada + hot dog', '/menu-grid-02-salchibrasas.png', 'br'),
      gridItem('Brasa a lo pobre 1/4', 'S/ 21.00', '1/4 pollo + papas fritas + ensalada + plátano frito + huevo frito', '/menu-grid-03-combos.png', 'tl'),
      gridItem('Brasa a lo pobre mostro', 'S/ 23.00', 'Mostro + chaufa + papas fritas + ensalada + plátano frito + huevo frito', '/menu-grid-03-combos.png', 'tr'),
      gridItem('Brasa a lo pobre mostrito', 'S/ 18.00', 'Mostrito + chaufa + papas fritas + ensalada + plátano frito + huevo frito', '/menu-grid-03-combos.png', 'bl'),
    ],
  },
  {
    id: 'platos-a-la-carta', nombre: 'Platos a la carta',
    items: [
      gridItem('Lomo de carne', 'S/ 18.00', undefined, '/menu-grid-04-carta.png', 'tl'), gridItem('Lomo de carne a lo pobre', 'S/ 21.00', undefined, '/menu-grid-04-carta.png', 'tr'),
      gridItem('Saltado de pollo', 'S/ 16.00', undefined, '/menu-grid-04-carta.png', 'bl'), gridItem('Pollo a la plancha', 'S/ 18.00', 'Papas fritas + arroz blanco + ensalada', '/menu-grid-05-chaufas.png', 'tl'),
    ],
  },
  {
    id: 'chifa', nombre: 'Chifa',
    items: [
      item('Chaufa con pollo', 'S/ 12.00', undefined, '/chaufa-pollo.webp'), gridItem('Chaufa con chancho', 'S/ 15.00', undefined, '/menu-grid-05-chaufas.png', 'tr'), gridItem('Chaufa con carne', 'S/ 16.00', undefined, '/menu-grid-05-chaufas.png', 'bl'), gridItem('Chaufa con langostino', 'S/ 19.00', undefined, '/menu-grid-05-chaufas.png', 'br'), gridItem('Chaufa especial', 'S/ 20.00', undefined, '/menu-grid-06-chifa.png', 'tl'), gridItem('Chaufa a lo pobre', 'S/ 16.00', undefined, '/menu-grid-06-chifa.png', 'tr'), gridItem('Tipakay + verduras + chaufa', 'S/ 18.00', undefined, '/menu-grid-06-chifa.png', 'bl'), gridItem('Tipakay + chaufa', 'S/ 19.00', undefined, '/menu-grid-06-chifa.png', 'br'), gridItem('Limonkay + chaufa', 'S/ 19.00', undefined, '/menu-grid-07-aeropuertos.png', 'tl'),
      item('Aeropuerto con pollo', 'S/ 14.00', undefined, '/aeropuerto.webp'), gridItem('Aeropuerto con chancho', 'S/ 16.00', undefined, '/menu-grid-07-aeropuertos.png', 'tr'), gridItem('Aeropuerto con carne', 'S/ 17.00', undefined, '/menu-grid-07-aeropuertos.png', 'bl'), gridItem('Aeropuerto con langostino', 'S/ 19.00', undefined, '/menu-grid-07-aeropuertos.png', 'br'), gridItem('Aeropuerto especial', 'S/ 21.00', undefined, '/menu-grid-08-chifa-especial.png', 'tl'), gridItem('Aeropuerto a lo pobre', 'S/ 18.00', undefined, '/menu-grid-08-chifa-especial.png', 'tr'),
      item('Tallarín con pollo', 'S/ 14.00', undefined, '/tallarin-pollo.webp'), item('Tallarín con chancho', 'S/ 15.00', undefined, '/tallarin-chancho.webp'), item('Tallarín con carne', 'S/ 17.00', undefined, '/tallarin-carne.webp'), item('Tallarín con langostino', 'S/ 19.00', undefined, '/tallarin-langostino.webp'), gridItem('Tallarín especial', 'S/ 20.00', undefined, '/menu-grid-08-chifa-especial.webp', 'bl'),
      item('Salvaje con pollo', 'S/ 16.00', undefined, '/salvaje.webp'), gridItem('Salvaje con chancho', 'S/ 17.00', undefined, '/menu-grid-08-chifa-especial.png', 'br'), gridItem('Salvaje con carne', 'S/ 18.00', undefined, '/menu-grid-09-salvajes.png', 'tl'), gridItem('Salvaje con langostino', 'S/ 19.00', undefined, '/menu-grid-09-salvajes.png', 'tr'), gridItem('Salvaje especial', 'S/ 20.00', undefined, '/menu-grid-09-salvajes.png', 'bl'),
      item('Combinado con pollo', 'S/ 15.00', undefined, '/combinado.webp'), gridItem('Combinado con chancho', 'S/ 16.00', undefined, '/menu-grid-09-salvajes.png', 'br'), gridItem('Combinado con carne', 'S/ 17.00', undefined, '/menu-grid-10-combinados.png', 'tl'), gridItem('Combinado con langostino', 'S/ 18.00', undefined, '/menu-grid-10-combinados.png', 'tr'), gridItem('Combinado especial', 'S/ 19.00', undefined, '/menu-grid-10-combinados.png', 'bl'),
    ],
  },
  {
    id: 'amazonica', nombre: 'Comida amazónica',
    items: [
      gridItem('Chorizo + plátano', 'S/ 15.00', undefined, '/menu-grid-10-combinados.png', 'br'), gridItem('Cecina + plátano', 'S/ 15.00', undefined, '/menu-grid-11-amazonica.png', 'tl'), gridItem('Chaufa amazónico', 'S/ 17.00', undefined, '/menu-grid-11-amazonica.png', 'tr'), gridItem('Chaufa amazónico + plátano', 'S/ 20.00', undefined, '/menu-grid-11-amazonica.png', 'bl'),
    ],
  },
  {
    id: 'parrillas', nombre: 'Parrillas',
    items: [
      gridItem('Pechuga a la parrilla', 'S/ 20.00', 'Papas fritas + ensalada', '/menu-grid-11-amazonica.png', 'br'), gridItem('Bistec a la parrilla', 'S/ 25.00', 'Papas fritas + ensalada', '/menu-grid-12-parrillas-sopas.png', 'tl'), gridItem('Chuleta a la parrilla', 'S/ 22.00', undefined, '/menu-grid-12-parrillas-sopas.png', 'tr'),
    ],
  },
  {
    id: 'sopas', nombre: 'Sopas',
    items: [
      gridItem('Sopa con pollo', 'S/ 9.00', undefined, '/menu-grid-12-parrillas-sopas.png', 'bl'), gridItem('Sopa Kion', 'S/ 10.00', undefined, '/menu-grid-12-parrillas-sopas.png', 'br'), gridItem('Sopa Wantán', 'S/ 10.00', undefined, '/menu-grid-13-sopas.png', 'tl'), gridItem('Sopa Wantán especial', 'S/ 13.00', undefined, '/menu-grid-13-sopas.png', 'tr'), gridItem('Sustancia con pollo', 'S/ 11.00', undefined, '/menu-grid-13-sopas.png', 'bl'), gridItem('Sustancia con carne', 'S/ 13.00', undefined, '/menu-grid-13-sopas.png', 'br'),
    ],
  },
  {
    id: 'bebidas', nombre: 'Bebidas',
    items: [
      item('Inca Kola / Coca Cola 3 L', 'S/ 17.00', undefined, '/bebida-inca-3l.webp'), item('Inca Kola / Coca Cola 2.5 L', 'S/ 12.00'), item('Inca Kola / Coca Cola 1.5 L', 'S/ 10.00', undefined, '/bebida-inca-1-5l.webp'), item('Inca Kola / Coca Cola 1 L', 'S/ 8.00', undefined, '/bebida-inca-1l.webp'), item('Gordita', 'S/ 5.00', undefined, '/bebida-gordita.webp'), item('Inca Kola / Coca Cola 600 ml', 'S/ 4.00', undefined, '/bebida-inca-600.webp'), item('Inca Kola / Coca Cola vidrio', 'S/ 4.00'),
      item('Pepsi 1.5 L', 'S/ 6.00', undefined, '/bebida-pepsi-1-5l.webp'), item('Pepsi Jumbo', 'S/ 4.00'), item('Pepsi 450 ml', 'S/ 2.50'), item('Pepsi 355 ml', 'S/ 2.00'), item('Sprite o Fanta', 'S/ 3.00'), item('Agua Cielo', 'S/ 2.00'), item('Agua San Luis', 'S/ 2.50'), item('Cerveza Pilsen', 'S/ 9.00', undefined, '/bebida-pilsen.webp'), item('Cerveza Cusqueña Negra', 'S/ 10.00', undefined, '/bebida-cusquena.webp'), item('Cerveza en lata Tres Cruces Negra', 'S/ 5.00'),
      item('1 L de chicha morada', 'S/ 12.00'), item('1 L de maracuyá', 'S/ 14.00'), item('1/2 de chicha morada', 'S/ 6.00'), item('1/2 de maracuyá', 'S/ 7.00'),
    ],
  },
  {
    id: 'frappes', nombre: 'Frappe',
    items: [
      item('Frappe de fresa', 'S/ 15.00'), item('Frappe de Oreo', 'S/ 15.00'), item('Frappe de café', 'S/ 15.00'), item('Frappe de mango', 'S/ 15.00'), item('Frappe de maracuyá', 'S/ 15.00'), item('Frappe de arándano', 'S/ 15.00'),
    ],
  },
];
