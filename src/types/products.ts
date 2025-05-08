
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
  weight: number; // Weight in kg
  isPackage: boolean; // Whether this product counts as a package for minimum order
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
