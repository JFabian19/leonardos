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
      item('Promo especial con chaufa', 'S/ 73.00', '1 pollo entero + 1/4 pollo solo + chaufa + papas fritas + ensalada', '/promo-especial-chaufa.webp'),
    ],
  },
  {
    id: 'combos-a-la-brasa', nombre: 'Combos a la brasa',
    items: [
      item('Salchibrasa 1/4', 'S/ 19.00', '1/4 pollo + papas fritas + ensalada + hot dog', '/salchibrasa-cuarto.webp'),
      item('Salchibrasa mostro', 'S/ 20.00', 'Mostro + chaufa + papas fritas + ensalada + hot dog', '/salchibrasa-mostro.webp'),
      item('Salchibrasa mostrito', 'S/ 16.00', 'Mostrito + chaufa + papas fritas + ensalada + hot dog', '/salchibrasa-mostrito.webp'),
      item('Salchibrasa 1/8', 'S/ 14.00', '1/8 pollo + papas fritas + ensalada + hot dog', '/salchibrasa-octavo.webp'),
      item('Brasa a lo pobre 1/4', 'S/ 21.00', '1/4 pollo + papas fritas + ensalada + plátano frito + huevo frito', '/brasa-pobre-cuarto.webp'),
      item('Brasa a lo pobre mostro', 'S/ 23.00', 'Mostro + chaufa + papas fritas + ensalada + plátano frito + huevo frito', '/brasa-pobre-mostro.webp'),
      item('Brasa a lo pobre mostrito', 'S/ 18.00', 'Mostrito + chaufa + papas fritas + ensalada + plátano frito + huevo frito', '/brasa-pobre-mostrito.webp'),
    ],
  },
  {
    id: 'platos-a-la-carta', nombre: 'Platos a la carta',
    items: [
      item('Lomo de carne', 'S/ 18.00', undefined, '/lomo-saltado.webp'), item('Lomo de carne a lo pobre', 'S/ 21.00', undefined, '/lomo-saltado-pobre.webp'),
      item('Saltado de pollo', 'S/ 16.00', undefined, '/saltado-pollo.webp'), item('Pollo a la plancha', 'S/ 18.00', 'Papas fritas + arroz blanco + ensalada', '/pollo-plancha.webp'),
    ],
  },
  {
    id: 'chifa', nombre: 'Chifa',
    items: [
      item('Chaufa con pollo', 'S/ 12.00', undefined, '/chaufa-pollo.webp'), gridItem('Chaufa con chancho', 'S/ 15.00', undefined, '/menu-grid-05-chaufas.png', 'tr'), gridItem('Chaufa con carne', 'S/ 16.00', undefined, '/menu-grid-05-chaufas.png', 'bl'), gridItem('Chaufa con langostino', 'S/ 19.00', undefined, '/menu-grid-05-chaufas.png', 'br'), item('Chaufa especial', 'S/ 20.00', undefined, '/chaufa-especial.webp'), item('Chaufa a lo pobre', 'S/ 16.00', undefined, '/chaufa-pobre.webp'), item('Tipakay + verduras + chaufa', 'S/ 18.00', undefined, '/pollo-verduras-chaufa.webp'), item('Tipakay + chaufa', 'S/ 19.00', undefined, '/tipakay-chaufa.webp'), item('Limonkay + chaufa', 'S/ 19.00', undefined, '/limonkay-chaufa.webp'),
      item('Aeropuerto con pollo', 'S/ 14.00', undefined, '/aeropuerto-pollo.webp'), item('Aeropuerto con chancho', 'S/ 16.00', undefined, '/aeropuerto-chancho.webp'), item('Aeropuerto con carne', 'S/ 17.00', undefined, '/aeropuerto-carne.webp'), item('Aeropuerto con langostino', 'S/ 19.00', undefined, '/aeropuerto-langostino.webp'), item('Aeropuerto especial', 'S/ 21.00', undefined, '/aeropuerto-especial.webp'), item('Aeropuerto a lo pobre', 'S/ 18.00', undefined, '/aeropuerto-pobre.webp'),
      item('Tallarín con pollo', 'S/ 14.00', undefined, '/tallarin-pollo.webp'), item('Tallarín con chancho', 'S/ 15.00', undefined, '/tallarin-chancho.webp'), item('Tallarín con carne', 'S/ 17.00', undefined, '/tallarin-carne.webp'), item('Tallarín con langostino', 'S/ 19.00', undefined, '/tallarin-langostino.webp'), item('Tallarín especial', 'S/ 20.00', undefined, '/tallarin-especial.webp'),
      item('Salvaje con pollo', 'S/ 16.00', undefined, '/salvaje-pollo.webp'), item('Salvaje con chancho', 'S/ 17.00', undefined, '/salvaje-chancho.webp'), item('Salvaje con carne', 'S/ 18.00', undefined, '/salvaje-carne.webp'), item('Salvaje con langostino', 'S/ 19.00', undefined, '/salvaje-langostino.webp'), item('Salvaje especial', 'S/ 20.00', undefined, '/salvaje-especial.webp'),
      item('Combinado con pollo', 'S/ 15.00', undefined, '/combinado.webp'), item('Combinado con chancho', 'S/ 16.00', undefined, '/combinado-chancho.webp'), item('Combinado con carne', 'S/ 17.00', undefined, '/combinado-carne.webp'), item('Combinado con langostino', 'S/ 18.00', undefined, '/combinado-langostino.webp'), item('Combinado especial', 'S/ 19.00', undefined, '/combinado-especial.webp'),
    ],
  },
  {
    id: 'amazonica', nombre: 'Comida amazónica',
    items: [
      item('Chorizo + plátano', 'S/ 15.00', undefined, '/chorizo-platano.webp'), item('Cecina + plátano', 'S/ 15.00', undefined, '/cecina-platano.webp'), item('Chaufa amazónico', 'S/ 17.00', undefined, '/chaufa-amazonico.webp'), item('Chaufa amazónico + plátano', 'S/ 20.00', undefined, '/chaufa-amazonico-platano.webp'),
    ],
  },
  {
    id: 'parrillas', nombre: 'Parrillas',
    items: [
      item('Pechuga a la parrilla', 'S/ 20.00', 'Papas fritas + ensalada', '/pechuga-parrilla.webp'), item('Bistec a la parrilla', 'S/ 25.00', 'Papas fritas + ensalada', '/bistec-parrilla.webp'), item('Chuleta a la parrilla', 'S/ 22.00', undefined, '/chuleta-parrilla.webp'),
    ],
  },
  {
    id: 'sopas', nombre: 'Sopas',
    items: [
      item('Sopa con pollo', 'S/ 9.00', undefined, '/sopa-pollo.webp'), item('Sopa Kion', 'S/ 10.00', undefined, '/sopa-kion.webp'), item('Sopa Wantán', 'S/ 10.00', undefined, '/sopa-wantan.webp'), item('Sopa Wantán especial', 'S/ 13.00', undefined, '/sopa-wantan-especial.webp'), item('Sustancia con pollo', 'S/ 11.00', undefined, '/sustancia-pollo.webp'), item('Sustancia con carne', 'S/ 13.00', undefined, '/sustancia-carne.webp'),
    ],
  },
  {
    id: 'bebidas', nombre: 'Bebidas',
    items: [
      item('Inca Kola / Coca Cola 3 L', 'S/ 17.00', undefined, '/bebida-inca-3l.webp'), item('Inca Kola / Coca Cola 2.5 L', 'S/ 12.00', undefined, '/bebida-inca-2-5l.webp'), item('Inca Kola / Coca Cola 1.5 L', 'S/ 10.00', undefined, '/bebida-inca-1-5l.webp'), item('Inca Kola / Coca Cola 1 L', 'S/ 8.00', undefined, '/bebida-inca-1l.webp'), item('Gordita', 'S/ 5.00', undefined, '/bebida-gordita.webp'), item('Inca Kola / Coca Cola 600 ml', 'S/ 4.00', undefined, '/bebida-inca-600.webp'), item('Inca Kola / Coca Cola vidrio', 'S/ 4.00', undefined, '/bebida-inca-vidrio.webp'),
      item('Pepsi 1.5 L', 'S/ 6.00', undefined, '/bebida-pepsi-1-5l.webp'), item('Pepsi Jumbo', 'S/ 4.00', undefined, '/bebida-pepsi-jumbo.webp'), item('Pepsi 450 ml', 'S/ 2.50', undefined, '/bebida-pepsi-450.webp'), item('Pepsi 355 ml', 'S/ 2.00', undefined, '/bebida-pepsi-355.webp'), item('Sprite o Fanta', 'S/ 3.00', undefined, '/bebida-sprite-fanta.webp'), item('Agua Cielo', 'S/ 2.00', undefined, '/bebida-agua-cielo.webp'), item('Agua San Luis', 'S/ 2.50', undefined, '/bebida-agua-san-luis.webp'), item('Cerveza Pilsen', 'S/ 9.00', undefined, '/bebida-pilsen.webp'), item('Cerveza Cusqueña Negra', 'S/ 10.00', undefined, '/bebida-cusquena.webp'), item('Cerveza en lata Tres Cruces Negra', 'S/ 5.00', undefined, '/bebida-tres-cruces.webp'),
      item('1 L de chicha morada', 'S/ 12.00', undefined, '/bebida-chicha-1l.webp'), item('1 L de maracuyá', 'S/ 14.00', undefined, '/bebida-maracuya-1l.webp'), item('1/2 de chicha morada', 'S/ 6.00', undefined, '/bebida-chicha-medio.webp'), item('1/2 de maracuyá', 'S/ 7.00', undefined, '/bebida-maracuya-medio.webp'),
    ],
  },
  {
    id: 'frappes', nombre: 'Frappe',
    items: [
      item('Frappe de fresa', 'S/ 15.00', undefined, '/frappe-fresa.webp'), item('Frappe de Oreo', 'S/ 15.00', undefined, '/frappe-oreo.webp'), item('Frappe de café', 'S/ 15.00', undefined, '/frappe-cafe.webp'), item('Frappe de mango', 'S/ 15.00', undefined, '/frappe-mango.webp'), item('Frappe de maracuyá', 'S/ 15.00', undefined, '/frappe-maracuya.webp'), item('Frappe de arándano', 'S/ 15.00', undefined, '/frappe-arandano.webp'),
    ],
  },
];
