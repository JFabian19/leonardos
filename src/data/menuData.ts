export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string;
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

const item = (nombre: string, precio: string, descripcion?: string): Dish => ({ nombre, precio, descripcion });

// Carta actualizada de las piezas gráficas compartidas por Leonardo's.
export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: 'pollos-a-la-brasa', nombre: 'Pollos a la brasa',
    items: [
      item('1 pollo entero', 'S/ 55.00', 'Papas fritas + ensalada'),
      item('1/2 pollo', 'S/ 30.00', 'Papas fritas + ensalada'),
      item('1/4 pollo', 'S/ 15.00', 'Papas fritas + ensalada'),
      item('Mostro 1/4 de pollo', 'S/ 18.00', 'Chaufa + papas fritas + ensalada'),
      item('Mostrito 1/8 de pollo', 'S/ 13.00', 'Chaufa + papas fritas + ensalada'),
    ],
  },
  {
    id: 'promos-pepsi', nombre: 'Promo Pepsi',
    items: [
      item('Promo 1/4 pollo', 'S/ 17.00', 'Papas fritas + ensalada + Pepsi 450 ml'),
      item('Promo 1/2 pollo', 'S/ 32.00', 'Papas fritas + ensalada + Pepsi Jumbo'),
      item('Promo 1 pollo entero', 'S/ 58.00', 'Papas fritas + ensalada + Pepsi 1.5 L'),
      item('Mostrito Pepsi', 'S/ 14.00', 'Chaufa + papas fritas + ensalada + Pepsi 355 ml'),
      item('Mostro Pepsi', 'S/ 19.00', 'Chaufa + papas fritas + ensalada + Pepsi 450 ml'),
      item('Promo familiar', 'S/ 71.00', '1 pollo + papas fritas + ensalada + Pepsi 1.5 L + 1/4 pollo solo o chaufa'),
      item('Promo especial 1/2', 'S/ 75.00', '1 pollo entero + 1/2 pollo solo + papas fritas + ensalada'),
      item('Promo especial 1/2', 'S/ 66.00', '1 pollo entero + 1/2 pollo solo + papas fritas + ensalada'),
      item('Promo especial con chaufa', 'S/ 73.00', '1 pollo entero + 1/4 pollo solo + chaufa + papas fritas + ensalada'),
    ],
  },
  {
    id: 'combos-a-la-brasa', nombre: 'Combos a la brasa',
    items: [
      item('Salchibrasa 1/4', 'S/ 19.00', '1/4 pollo + papas fritas + ensalada + hot dog'),
      item('Salchibrasa mostro', 'S/ 20.00', 'Mostro + chaufa + papas fritas + ensalada + hot dog'),
      item('Salchibrasa mostrito', 'S/ 16.00', 'Mostrito + chaufa + papas fritas + ensalada + hot dog'),
      item('Salchibrasa 1/8', 'S/ 14.00', '1/8 pollo + papas fritas + ensalada + hot dog'),
      item('Brasa a lo pobre 1/4', 'S/ 21.00', '1/4 pollo + papas fritas + ensalada + plátano frito + huevo frito'),
      item('Brasa a lo pobre mostro', 'S/ 23.00', 'Mostro + chaufa + papas fritas + ensalada + plátano frito + huevo frito'),
      item('Brasa a lo pobre mostrito', 'S/ 18.00', 'Mostrito + chaufa + papas fritas + ensalada + plátano frito + huevo frito'),
    ],
  },
  {
    id: 'platos-a-la-carta', nombre: 'Platos a la carta',
    items: [
      item('Lomo de carne', 'S/ 18.00'), item('Lomo de carne a lo pobre', 'S/ 21.00'),
      item('Saltado de pollo', 'S/ 16.00'), item('Pollo a la plancha', 'S/ 18.00', 'Papas fritas + arroz blanco + ensalada'),
    ],
  },
  {
    id: 'chifa', nombre: 'Chifa',
    items: [
      item('Chaufa con pollo', 'S/ 12.00'), item('Chaufa con chancho', 'S/ 15.00'), item('Chaufa con carne', 'S/ 16.00'), item('Chaufa con langostino', 'S/ 19.00'), item('Chaufa especial', 'S/ 20.00'), item('Chaufa a lo pobre', 'S/ 16.00'), item('Tipakay + verduras + chaufa', 'S/ 18.00'), item('Tipakay + chaufa', 'S/ 19.00'), item('Limonkay + chaufa', 'S/ 19.00'),
      item('Aeropuerto con pollo', 'S/ 14.00'), item('Aeropuerto con chancho', 'S/ 16.00'), item('Aeropuerto con carne', 'S/ 17.00'), item('Aeropuerto con langostino', 'S/ 19.00'), item('Aeropuerto especial', 'S/ 21.00'), item('Aeropuerto a lo pobre', 'S/ 18.00'),
      item('Tallarín con pollo', 'S/ 14.00'), item('Tallarín con chancho', 'S/ 15.00'), item('Tallarín con carne', 'S/ 17.00'), item('Tallarín con langostino', 'S/ 19.00'), item('Tallarín especial', 'S/ 20.00'),
      item('Salvaje con pollo', 'S/ 16.00'), item('Salvaje con chancho', 'S/ 17.00'), item('Salvaje con carne', 'S/ 18.00'), item('Salvaje con langostino', 'S/ 19.00'), item('Salvaje especial', 'S/ 20.00'),
      item('Combinado con pollo', 'S/ 15.00'), item('Combinado con chancho', 'S/ 16.00'), item('Combinado con carne', 'S/ 17.00'), item('Combinado con langostino', 'S/ 18.00'), item('Combinado especial', 'S/ 19.00'),
    ],
  },
  {
    id: 'amazonica', nombre: 'Comida amazónica',
    items: [
      item('Chorizo + plátano', 'S/ 15.00'), item('Cecina + plátano', 'S/ 15.00'), item('Chaufa amazónico', 'S/ 17.00'), item('Chaufa amazónico + plátano', 'S/ 20.00'),
    ],
  },
  {
    id: 'parrillas', nombre: 'Parrillas',
    items: [
      item('Pechuga a la parrilla', 'S/ 20.00', 'Papas fritas + ensalada'), item('Bistec a la parrilla', 'S/ 25.00', 'Papas fritas + ensalada'), item('Chuleta a la parrilla', 'S/ 22.00'),
    ],
  },
  {
    id: 'sopas', nombre: 'Sopas',
    items: [
      item('Sopa con pollo', 'S/ 9.00'), item('Sopa Kion', 'S/ 10.00'), item('Sopa Wantán', 'S/ 10.00'), item('Sopa Wantán especial', 'S/ 13.00'), item('Sustancia con pollo', 'S/ 11.00'), item('Sustancia con carne', 'S/ 13.00'),
    ],
  },
  {
    id: 'bebidas', nombre: 'Bebidas',
    items: [
      item('Inca Kola / Coca Cola 3 L', 'S/ 17.00'), item('Inca Kola / Coca Cola 2.5 L', 'S/ 12.00'), item('Inca Kola / Coca Cola 1.5 L', 'S/ 10.00'), item('Inca Kola / Coca Cola 1 L', 'S/ 8.00'), item('Gordita', 'S/ 5.00'), item('Inca Kola / Coca Cola 600 ml', 'S/ 4.00'), item('Inca Kola / Coca Cola vidrio', 'S/ 4.00'),
      item('Pepsi 1.5 L', 'S/ 6.00'), item('Pepsi Jumbo', 'S/ 4.00'), item('Pepsi 450 ml', 'S/ 2.50'), item('Pepsi 355 ml', 'S/ 2.00'), item('Sprite o Fanta', 'S/ 3.00'), item('Agua Cielo', 'S/ 2.00'), item('Agua San Luis', 'S/ 2.50'), item('Cerveza Pilsen', 'S/ 9.00'), item('Cerveza Cusqueña Negra', 'S/ 10.00'), item('Cerveza en lata Tres Cruces Negra', 'S/ 5.00'),
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
