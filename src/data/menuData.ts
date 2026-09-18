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

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: 'pollos-a-la-brasa',
    nombre: 'Pollos a la brasa',
    items: [
      item('1 pollo entero', 'S/ 55.00', 'Papas fritas + ensalada', '/pollo-brasa-entero.webp'),
      item('1/2 pollo', 'S/ 30.00', 'Papas fritas + ensalada', '/pollo-brasa-medio-referencia.webp'),
      item('1/4 de pollo', 'S/ 15.00', 'Papas fritas + ensalada', '/pollo-brasa-cuarto-referencia.webp'),
      item('Mostro 1/4 de pollo', 'S/ 18.00', 'Chaufa + papas fritas + ensalada', '/pollo-mostro-referencia.webp'),
      item('Mostrito 1/8 de pollo', 'S/ 13.00', 'Chaufa + papas fritas + ensalada', '/pollo-mostrito-octavo.webp'),
    ],
  },
  {
    id: 'promociones',
    nombre: 'Promociones',
    items: [
      item('Promoción de 1 pollo entero y 1/2 pollo', 'S/ 75.00', '1 pollo entero + 1/2 pollo solo + papas fritas + ensalada', '/promo-especial-medio.webp'),
      item('Promoción de 1 pollo entero y chaufa', 'S/ 66.00', '1 pollo entero + chaufa + papas fritas + ensalada', 'https://i.postimg.cc/0jGzhM0C/c4c6eed9-f776-4f0e-835a-18721d84fde7.jpg'),
      item('Promoción de 1 pollo entero y 1/4 de pollo', 'S/ 73.00', '1 pollo entero + 1/4 pollo solo + chaufa + papas fritas + ensalada', '/promo-especial-chaufa.webp'),
    ],
  },
  {
    id: 'promo-pepsi',
    nombre: 'Promo Pepsi',
    items: [
      item('1/4 de pollo – Promo Pepsi', 'S/ 17.00', 'Papas fritas + ensalada + Pepsi 450 ml', '/combo-cuarto-pepsi.webp'),
      item('1/2 pollo – Promo Pepsi', 'S/ 32.00', 'Papas fritas + ensalada + Pepsi Jumbo', '/combo-medio-pepsi.webp'),
      item('1 pollo entero – Promo Pepsi', 'S/ 58.00', 'Papas fritas + ensalada + Pepsi 1.5 L', '/combo-entero-pepsi.webp'),
      item('Mostrito – Promo Pepsi', 'S/ 14.00', 'Chaufa + papas fritas + ensalada + Pepsi 355 ml', '/combo-octavo-mostrito-pepsi.webp'),
      item('Mostro – Promo Pepsi', 'S/ 19.00', 'Chaufa + papas fritas + ensalada + Pepsi 450 ml', '/combo-cuarto-mostrito-pepsi.webp'),
      item('1 pollo entero – Promo familiar Pepsi', 'S/ 71.00', '1 pollo + papas fritas + ensalada + Pepsi 1.5 L + 1/4 pollo solo o chaufa', '/combo-pepsi-familiar.webp'),
    ],
  },
  {
    id: 'salchibrasa',
    nombre: 'Salchibrasa',
    items: [
      item('Salchibrasa de 1/4 de pollo', 'S/ 19.00', '1/4 pollo + papas fritas + ensalada + hot dog', '/salchibrasa-cuarto.webp'),
      item('Salchibrasa Mostro', 'S/ 20.00', '1/4 pollo + chaufa + papas fritas + ensalada + hot dog', '/salchibrasa-mostro.webp'),
      item('Salchibrasa Mostrito', 'S/ 16.00', '1/8 pollo + chaufa + papas fritas + ensalada + hot dog', '/salchibrasa-mostrito.webp'),
      item('Salchibrasa de 1/8 de pollo', 'S/ 14.00', '1/8 pollo + papas fritas + ensalada + hot dog', '/salchibrasa-octavo.webp'),
    ],
  },
  {
    id: 'brasa-a-lo-pobre',
    nombre: 'Brasa a lo pobre',
    items: [
      item('1/4 de pollo a lo pobre', 'S/ 21.00', '1/4 pollo + papas fritas + ensalada + plátano frito + huevo frito', '/brasa-pobre-cuarto.webp'),
      item('Mostro a lo pobre', 'S/ 23.00', '1/4 pollo + chaufa + papas fritas + ensalada + plátano frito + huevo frito', '/brasa-pobre-mostro.webp'),
      item('Mostrito a lo pobre', 'S/ 18.00', '1/8 pollo + chaufa + papas fritas + ensalada + plátano frito + huevo frito', '/brasa-pobre-mostrito.webp'),
    ],
  },
  {
    id: 'parrillas',
    nombre: 'Parrillas',
    items: [
      item('Pechuga a la parrilla', 'S/ 20.00', 'Papas fritas + ensalada', '/pechuga-parrilla.webp'),
      item('Bisteck a la parrilla', 'S/ 25.00', 'Papas fritas + ensalada', '/bistec-parrilla.webp'),
      item('Chuleta a la parrilla', 'S/ 22.00', 'Papas fritas + ensalada', '/chuleta-parrilla.webp'),
    ],
  },
  {
    id: 'platos-a-la-carta',
    nombre: 'Platos a la carta',
    items: [
      item('Lomo de carne', 'S/ 18.00', undefined, '/lomo-saltado.webp'),
      item('Lomo de carne a lo pobre', 'S/ 21.00', undefined, '/lomo-saltado-pobre.webp'),
      item('Saltado de pollo', 'S/ 16.00', undefined, '/saltado-pollo.webp'),
      item('Pollo a la plancha', 'S/ 18.00', 'Papas fritas + arroz blanco + ensalada', '/pollo-plancha.webp'),
    ],
  },
  {
    id: 'chifa-chaufa',
    nombre: 'Chifa - Chaufa',
    items: [
      item('Chaufa con pollo', 'S/ 12.00', undefined, '/chaufa-pollo.webp'),
      gridItem('Chaufa con chancho', 'S/ 15.00', undefined, '/menu-grid-05-chaufas.png', 'tr'),
      gridItem('Chaufa con carne', 'S/ 16.00', undefined, '/menu-grid-05-chaufas.png', 'bl'),
      gridItem('Chaufa con langostino', 'S/ 19.00', undefined, '/menu-grid-05-chaufas.png', 'br'),
      item('Chaufa especial', 'S/ 20.00', undefined, '/chaufa-especial.webp'),
      item('Chaufa a lo pobre', 'S/ 16.00', undefined, '/chaufa-pobre.webp'),
      item('Pollo con verduras y chaufa', 'S/ 18.00', undefined, '/pollo-verduras-chaufa.webp'),
      item('Tipakay con chaufa', 'S/ 19.00', undefined, '/tipakay-chaufa.webp'),
      item('Limonkay con chaufa', 'S/ 19.00', undefined, '/limonkay-chaufa.webp'),
    ],
  },
  {
    id: 'chifa-aeropuerto',
    nombre: 'Chifa - Aeropuerto',
    items: [
      item('Aeropuerto con pollo', 'S/ 14.00', undefined, '/aeropuerto-pollo.webp'),
      item('Aeropuerto con chancho', 'S/ 16.00', undefined, '/aeropuerto-chancho.webp'),
      item('Aeropuerto con carne', 'S/ 17.00', undefined, '/aeropuerto-carne.webp'),
      item('Aeropuerto con langostino', 'S/ 19.00', undefined, '/aeropuerto-langostino.webp'),
      item('Aeropuerto especial', 'S/ 21.00', undefined, '/aeropuerto-especial.webp'),
      item('Aeropuerto a lo pobre', 'S/ 18.00', undefined, '/aeropuerto-pobre.webp'),
    ],
  },
  {
    id: 'chifa-tallarin',
    nombre: 'Chifa - Tallarín',
    items: [
      item('Tallarín con pollo', 'S/ 14.00', undefined, '/tallarin-pollo.webp'),
      item('Tallarín con chancho', 'S/ 15.00', undefined, '/tallarin-chancho.webp'),
      item('Tallarín con carne', 'S/ 17.00', undefined, '/tallarin-carne.webp'),
      item('Tallarín con langostino', 'S/ 19.00', undefined, '/tallarin-langostino.webp'),
      item('Tallarín especial', 'S/ 20.00', undefined, '/tallarin-especial.webp'),
    ],
  },
  {
    id: 'chifa-salvaje',
    nombre: 'Chifa - Salvaje',
    items: [
      item('Salvaje con pollo', 'S/ 16.00', undefined, '/salvaje-pollo.webp'),
      item('Salvaje con chancho', 'S/ 17.00', undefined, '/salvaje-chancho.webp'),
      item('Salvaje con carne', 'S/ 18.00', undefined, '/salvaje-carne.webp'),
      item('Salvaje con langostino', 'S/ 19.00', undefined, '/salvaje-langostino.webp'),
      item('Salvaje especial', 'S/ 20.00', undefined, '/salvaje-especial.webp'),
    ],
  },
  {
    id: 'chifa-combinado',
    nombre: 'Chifa - Combinado',
    items: [
      item('Combinado con pollo', 'S/ 15.00', undefined, '/combinado.webp'),
      item('Combinado con chancho', 'S/ 16.00', undefined, '/combinado-chancho.webp'),
      item('Combinado con carne', 'S/ 17.00', undefined, '/combinado-carne.webp'),
      item('Combinado con langostino', 'S/ 18.00', undefined, '/combinado-langostino.webp'),
      item('Combinado especial', 'S/ 19.00', undefined, '/combinado-especial.webp'),
    ],
  },
  {
    id: 'sopas',
    nombre: 'Sopas',
    items: [
      item('Sopa con pollo', 'S/ 9.00', undefined, '/sopa-pollo.webp'),
      item('Sopa con kion', 'S/ 10.00', undefined, '/sopa-kion.webp'),
      item('Sopa wantán', 'S/ 10.00', undefined, '/sopa-wantan.webp'),
      item('Sopa wantán especial', 'S/ 13.00', undefined, '/sopa-wantan-especial.webp'),
      item('Sustancia con pollo', 'S/ 11.00', undefined, '/sustancia-pollo.webp'),
      item('Sustancia con carne', 'S/ 13.00', undefined, '/sustancia-carne.webp'),
    ],
  },
  {
    id: 'comida-amazonica',
    nombre: 'Comida amazónica',
    items: [
      item('Chorizo con plátano', 'S/ 15.00', undefined, '/chorizo-platano.webp'),
      item('Cecina con plátano', 'S/ 15.00', undefined, '/cecina-platano.webp'),
      item('Chaufa amazónico', 'S/ 17.00', undefined, '/chaufa-amazonico.webp'),
      item('Chaufa amazónico con plátano', 'S/ 20.00', undefined, '/chaufa-amazonico-platano.webp'),
    ],
  },
  {
    id: 'gaseosas-y-cervezas',
    nombre: 'Gaseosas y cervezas',
    items: [
      item('Inca Kola o Coca-Cola de 3 litros', 'S/ 17.00', undefined, '/bebida-inca-3l.webp'),
      item('Inca Kola o Coca-Cola de 2.5 litros', 'S/ 12.00', undefined, '/bebida-inca-2-5l.webp'),
      item('Inca Kola o Coca-Cola de 1.5 litros', 'S/ 10.00', undefined, '/bebida-inca-1-5l.webp'),
      item('Inca Kola o Coca-Cola de 1 litro', 'S/ 8.00', undefined, '/bebida-inca-1l.webp'),
      item('Gordita', 'S/ 5.00', undefined, '/bebida-gordita.webp'),
      item('Inca Kola o Coca-Cola de 600 ml', 'S/ 4.00', undefined, '/bebida-inca-600.webp'),
      item('Inca Kola o Coca-Cola en botella de vidrio', 'S/ 3.00', undefined, 'https://peruvianboxofficial.com/cdn/shop/files/IMG-2147_grande.jpg?v=1719416376'),
      item('Pepsi de 1.5 litros', 'S/ 6.00', undefined, '/bebida-pepsi-1-5l.webp'),
      item('Pepsi Jumbo', 'S/ 4.00', undefined, '/bebida-pepsi-jumbo.webp'),
      item('Pepsi de 450 ml', 'S/ 2.50', undefined, '/bebida-pepsi-450.webp'),
      item('Pepsi de 355 ml', 'S/ 2.00', undefined, '/bebida-pepsi-355.webp'),
      item('Sprite o Fanta', 'S/ 3.00', undefined, '/bebida-sprite-fanta.webp'),
      item('Agua Cielo', 'S/ 2.00', undefined, '/bebida-agua-cielo.webp'),
      item('Agua San Luis', 'S/ 2.50', undefined, '/bebida-agua-san-luis.webp'),
      item('Cerveza Pilsen', 'S/ 9.00', undefined, '/bebida-pilsen.webp'),
      item('Cerveza Cusqueña Negra', 'S/ 10.00', undefined, '/bebida-cusquena.webp'),
      item('Cerveza en lata Tres Cruces Negra', 'S/ 5.00', undefined, '/bebida-tres-cruces.webp'),
    ],
  },
  {
    id: 'bebidas-heladas',
    nombre: 'Bebidas heladas',
    items: [
      item('Chicha morada de 1 litro', 'S/ 12.00', undefined, '/bebida-chicha-1l.webp'),
      item('Maracuyá de 1 litro', 'S/ 14.00', undefined, '/bebida-maracuya-1l.webp'),
      item('Chicha morada de 1/2 litro', 'S/ 6.00', undefined, '/bebida-chicha-medio.webp'),
      item('Maracuyá de 1/2 litro', 'S/ 7.00', undefined, '/bebida-maracuya-medio.webp'),
    ],
  },
  {
    id: 'frappes',
    nombre: 'Frappés',
    items: [
      item('Frappé de fresa', 'S/ 15.00', undefined, '/frappe-fresa.webp'),
      item('Frappé de Oreo', 'S/ 15.00', undefined, '/frappe-oreo.webp'),
      item('Frappé de café', 'S/ 15.00', undefined, '/frappe-cafe.webp'),
      item('Frappé de mango', 'S/ 15.00', undefined, '/frappe-mango.webp'),
      item('Frappé de maracuyá', 'S/ 15.00', undefined, '/frappe-maracuya.webp'),
      item('Frappé de arándano', 'S/ 15.00', undefined, '/frappe-arandano.webp'),
    ],
  },
];
