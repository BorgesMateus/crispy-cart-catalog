
import { Product } from '../../types/products';
import { CATEGORIES, ORDERED_CATEGORIES, STORE_WHATSAPP, MIN_PACKAGES, MIN_WEIGHT_KG } from './categories';
import { SALGADOS_FRITOS } from './salgados-fritos';
import { SALGADOS_ASSADOS } from './salgados-assados';
import { PAES_E_MASSAS_DOCES } from './paes-e-massas-doces';
import { PAO_DE_QUEIJO } from './pao-de-queijo';
import { BISCOITO_DE_QUEIJO } from './biscoito-de-queijo';
import { SALGADOS_GRANDES } from './salgados-grandes';

// Combine all products into one array
export const PRODUCTS: Product[] = [
  ...SALGADOS_FRITOS,
  ...SALGADOS_ASSADOS,
  ...PAES_E_MASSAS_DOCES,
  ...PAO_DE_QUEIJO,
  ...BISCOITO_DE_QUEIJO,
  ...SALGADOS_GRANDES
];

// Re-export all constants
export {
  CATEGORIES,
  ORDERED_CATEGORIES,
  STORE_WHATSAPP,
  MIN_PACKAGES,
  MIN_WEIGHT_KG,
  SALGADOS_FRITOS,
  SALGADOS_ASSADOS,
  PAES_E_MASSAS_DOCES,
  PAO_DE_QUEIJO,
  BISCOITO_DE_QUEIJO,
  SALGADOS_GRANDES
};

// Define campeões de vendas (Jan-Abr 2025)
export const TOP_SELLING_PRODUCTS = [
  "PAO DE QUEIJO PREMIUM 30G PCT 5KG",
  "PAO DE QUEIJO GG 25G PCT 1KG",
  "SALG FESTA COXINHA PCT 50 UNID",
  "MINI ESFIRRA DE CARNE ASSADO PCT 50 UNID",
  "BISCOITO DE QUEIJO GG PCT 1KG",
  "PAO DE QUEIJO GG 55G PCT 5KG",
  "ENR SALSICHA C/ MOLHO ASSADO G PCT 10 UNID",
  "MINI ENR DE SALSICHA ASSADO PCT 50 UNID",
  "PAO DE QUEIJO RECHEADO C/ LINGUICA APIMENTADA PCT 1KG",
  "QUEBRADOR DE QUEIJO SF 20G PCT 800G"
];
