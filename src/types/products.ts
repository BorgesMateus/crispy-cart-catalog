
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
  image: string;
  category: Category;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
