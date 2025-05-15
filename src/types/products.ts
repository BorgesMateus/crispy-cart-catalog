
export type Category = 
  | 'Salgados Fritos' 
  | 'Salgados Assados' 
  | 'Pães e Massas Doces' 
  | 'Pão de Queijo'
  | 'Biscoito de Queijo'
  | 'Salgados Grandes'
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
  packageInfo: string; // Information about packaging (e.g. "Pacote de 1kg")
  weight: number; // Weight in kg
  isPackage: boolean; // Whether this product counts as a package for minimum order
  featured?: boolean; // Whether this product should be featured
  extraInfo?: ProductExtraInfo; // Additional information for expandable view
  inStock?: boolean; // Whether this product is in stock (optional, defaults to true)
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
