
export type Category = 
  | 'Salgados Fritos' 
  | 'Salgados Assados' 
  | 'Pães' 
  | 'Biscoitos' 
  | 'Kits e Combos'
  | 'Outros';

export interface ProductExtraInfo {
  usageTips?: string;
  ingredients?: string;
  funFact?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: Category;
  description?: string;
  weight: number; // Weight in kg
  isPackage: boolean; // Whether this product counts as a package for minimum order
  featured?: boolean; // Whether this product should be featured
  extraInfo?: ProductExtraInfo; // Additional information for expandable view
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Kit {
  id: string;
  name: string;
  description: string;
  image: string;
  items: KitItem[];
}

export interface KitItem {
  productId: string;
  quantity: number;
}

export type City = 'Brasília' | 'Águas Claras' | 'Taguatinga' | 'Ceilândia' | 'Samambaia' | 'Gama' | 'Planaltina';

export interface ShippingRate {
  city: City;
  cost: number;
}
