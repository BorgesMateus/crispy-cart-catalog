
export type Category = 
  | 'Salgados Fritos' 
  | 'Salgados Assados' 
  | 'Pães' 
  | 'Biscoitos' 
  | 'Outros';

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: Category;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type City = 'Brasília' | 'Águas Claras' | 'Taguatinga' | 'Ceilândia' | 'Samambaia' | 'Gama' | 'Planaltina';

export interface ShippingRate {
  city: City;
  cost: number;
}
