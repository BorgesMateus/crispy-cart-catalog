import { Category, Product } from '../types/products';

// Número do WhatsApp para pedidos
export const STORE_WHATSAPP = '5561982065632';

// Requisitos mínimos de pedido
export const MIN_PACKAGES = 5;
export const MIN_WEIGHT_KG = 5;

// Categorias disponíveis
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

// Ordenação de categorias por prioridade de exibição
export const ORDERED_CATEGORIES: Category[] = [
  'Pão de Queijo',
  'Salgados Assados',
  'Salgados Fritos',
  'Pães e Massas Doces',
  'Biscoito de Queijo',
  'Salgados Grandes',
  'Outros',
  'Kits e Combos'
];

// Produtos campeões de vendas em 2025
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

// Lista de produtos (corrigida com base no JSON atual)
export const PRODUCTS: Product[] = [
  {
    id: "PQ101",
    name: "PAO DE QUEIJO GM 30G PCT 800G",
    price: 20,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo GM, tamanho médio (30g). Pacote com aproximadamente 26 unidades.",
    packageInfo: "Pacote 800g",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "PQ132",
    name: "PAO DE QUEIJO GM 30G PCT 400G",
    price: 10.0,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo GM, tamanho médio (30g). Pacote com aproximadamente 13 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ102",
    name: "PAO DE QUEIJO GOURMET PCT 400G",
    price: 10.2,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo gourmet. Pacote com aproximadamente 13 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ103",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 1KG",
    price: 22.99,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho médio (30g). Pacote com aproximadamente 33 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ001",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 5KG",
    price: 114.95,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho médio (30g). Pacote com aproximadamente 166 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true,
    featured: true
  },
  {
    id: "PQ104",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 800G",
    price: 19.0,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho médio (30g). Pacote com aproximadamente 26 unidades.",
    packageInfo: "Pacote 800g",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "PQ105",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 400G",
    price: 9.5,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho médio (30g). Pacote com aproximadamente 13 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ106",
    name: "PAO DE QUEIJO PREMIUM 55G PCT 5KG",
    price: 114.95,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho grande (55g). Pacote com aproximadamente 90 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ107",
    name: "PAO DE QUEIJO PREMIUM 70G PCT 5KG",
    price: 574.75,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho grande (70g). Pacote com aproximadamente 71 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ108",
    name: "PAO DE QUEIJO PREMIUM 100G PCT 5KG",
    price: 114.95,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo premium, tamanho extra grande (100g). Pacote com aproximadamente 50 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ109",
    name: "HOT CHEESE 1KG",
    price: 33.0,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "POTE DE 01KG",
    packageInfo: "Pote 1kg",
    weight: 1.0,
    isPackage: true
  }
];
