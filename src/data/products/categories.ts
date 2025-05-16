
import { Category } from '../../types/products';

// List of available product categories
export const CATEGORIES: Category[] = [
  'Salgados Fritos',
  'Salgados Assados',
  'Pães e Massas Doces',
  'Pão de Queijo',
  'Biscoito de Queijo',
  'Salgados Grandes',
  'Outros',
  'Kits e Combos'
];

// Sort categories based on sales data
export const ORDERED_CATEGORIES: Category[] = [
  'Pão de Queijo',
  'Salgados Assados',
  'Salgados Fritos',
  'Pães e Massas Doces',
  'Biscoito de Queijo',
  'Salgados Grandes',
  'Outros'
];

// WhatsApp number for orders
export const STORE_WHATSAPP = "5561982065632";

// Minimum order requirements
export const MIN_PACKAGES = 5;
export const MIN_WEIGHT_KG = 5;
