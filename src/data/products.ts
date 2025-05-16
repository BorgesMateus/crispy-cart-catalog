
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

// Lista de todos os produtos
export const PRODUCTS: Product[] = [
  // Pão de Queijo - na ordem especificada
  {
    id: "PQ101",
    name: "PAO DE QUEIJO GM 30G PCT 800G",
    price: 16.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo GM, tamanho médio (30g). Pacote com aproximadamente 26 unidades.",
    packageInfo: "Pacote 800g",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "PQ102",
    name: "PAO DE QUEIJO GOURMET PCT 400G",
    price: 9.90,
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
    price: 19.90,
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
    price: 89.90,
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
    price: 16.90,
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
    price: 9.90,
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
    price: 89.90,
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
    price: 89.90,
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
    price: 89.90,
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
    price: 29.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "POTE DE 01KG",
    packageInfo: "Pote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ110",
    name: "PAO DE QUEIJO RECHEADO COM CARNE PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado com carne. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ111",
    name: "PAO DE QUEIJO RECHEADO COM FRANGO PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado com frango. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ004",
    name: "PAO DE QUEIJO RECHEADO COM GOIABADA PCT 1K",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-goiabada.jpg"],
    description: "Pão de queijo recheado com goiabada. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ005",
    name: "PAO DE QUEIJO RECHEADO COM LINGUICA APIMENTADA PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado com linguiça apimentada. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ112",
    name: "PAO DE QUEIJO RECHEADO GOURMET CALABRESA 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado gourmet com calabresa. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ113",
    name: "PAO DE QUEIJO RECHEADO GOURMET FRANGO PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado gourmet com frango. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ114",
    name: "PAO DE QUEIJO RECHEADO GOURMET GOIABADA PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-goiabada.jpg"],
    description: "Pão de queijo recheado gourmet com goiabada. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ115",
    name: "PAO RECHEADO GOURMET DE CALABRESA PCT 400G",
    price: 12.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado gourmet com calabresa. Pacote com aproximadamente 10 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ116",
    name: "PAO RECHEADO GOURMET DE FRANGO PCT 400G",
    price: 12.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-linguica.jpg"],
    description: "Pão de queijo recheado gourmet com frango. Pacote com aproximadamente 10 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ117",
    name: "PAO RECHEADO GOURMET DE GOIABADA PCT 400G",
    price: 12.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-goiabada.jpg"],
    description: "Pão de queijo recheado gourmet com goiabada. Pacote com aproximadamente 10 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ118",
    name: "PAO DE QUEIJO SEM LACTOSE PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo sem lactose. Pacote com aproximadamente 33 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ119",
    name: "PAO DE QUEIJO SEM LACTOSE PCT 400G",
    price: 12.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-premium.jpg"],
    description: "Pão de queijo sem lactose. Pacote com aproximadamente 13 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ120",
    name: "PAO DE QUEIJO GG 25G PCT 400G",
    price: 9.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho grande (25g). Pacote com aproximadamente 16 unidades.",
    packageInfo: "Pacote 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "PQ002",
    name: "PAO DE QUEIJO GG 25G PCT 1KG",
    price: 19.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho grande (25g). Pacote com aproximadamente 40 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ121",
    name: "PAO DE QUEIJO GG 25G PCT 800G",
    price: 16.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho grande (25g). Pacote com aproximadamente 32 unidades.",
    packageInfo: "Pacote 800g",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "PQ122",
    name: "PAO DE QUEIJO GG 25G PCT 5KG",
    price: 89.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho grande (25g). Pacote com aproximadamente 200 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ123",
    name: "PAO DE QUEIJO GG 15G PCT 1KG",
    price: 19.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho pequeno (15g). Pacote com aproximadamente 66 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ124",
    name: "PAO DE QUEIJO GG 15G PCT 5KG",
    price: 89.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho pequeno (15g). Pacote com aproximadamente 333 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ125",
    name: "PAO DE QUEIJO GG 30G PCT 5KG",
    price: 89.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho médio (30g). Pacote com aproximadamente 166 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ126",
    name: "PAO DE QUEIJO GG 40G PCT 5KG",
    price: 89.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg.jpg"],
    description: "Pão de queijo tamanho médio-grande (40g). Pacote com aproximadamente 125 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ003",
    name: "PAO DE QUEIJO GG 55G PCT 5KG",
    price: 99.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg-55g.jpg"],
    description: "Pão de queijo tamanho extra grande (55g). Pacote com aproximadamente 90 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ127",
    name: "PAO DE QUEIJO GG 70G PCT 5KG",
    price: 99.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg-55g.jpg"],
    description: "Pão de queijo tamanho extra grande (70g). Pacote com aproximadamente 71 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ128",
    name: "PAO DE QUEIJO GG 80G PCT 5KG",
    price: 99.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg-55g.jpg"],
    description: "Pão de queijo tamanho extra grande (80g). Pacote com aproximadamente 62 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ129",
    name: "PAO DE QUEIJO GG 90G PCT 5KG",
    price: 99.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg-55g.jpg"],
    description: "Pão de queijo tamanho extra grande (90g). Pacote com aproximadamente 55 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "PQ130",
    name: "PAO DE QUEIJO GG 100G PCT 5KG",
    price: 99.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-gg-55g.jpg"],
    description: "Pão de queijo tamanho extra grande (100g). Pacote com aproximadamente 50 unidades.",
    packageInfo: "Pacote 5kg",
    weight: 5.0,
    isPackage: true
  },
  
  // Outras categorias - mantendo os produtos existentes
  {
    id: "PQ006",
    name: "PÃO DE QUEIJO RECHEADO C/ REQUEIJÃO PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-requeijao.jpg"],
    description: "Pão de queijo recheado com requeijão cremoso. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ007",
    name: "PÃO DE QUEIJO RECHEADO C/ CHEDDAR PCT 1KG",
    price: 24.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-cheddar.jpg"],
    description: "Pão de queijo recheado com queijo cheddar. Pacote com aproximadamente 25 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PQ008",
    name: "PÃO DE QUEIJO PALITO PCT 1KG",
    price: 19.90,
    category: "Pão de Queijo",
    images: ["/products/pao-de-queijo-palito.jpg"],
    description: "Pão de queijo em formato de palito. Pacote com aproximadamente 50 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "SA001",
    name: "SALG FESTA COXINHA PCT 50 UNID",
    price: 39.90,
    category: "Salgados Assados",
    images: ["/products/coxinha-assada.jpg"],
    description: "Coxinha de frango assada, tamanho festa (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SA002",
    name: "MINI ESFIRRA DE CARNE ASSADO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Assados",
    images: ["/products/mini-esfirra.jpg"],
    description: "Mini esfirra de carne assada (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SA003",
    name: "MINI ENR DE SALSICHA ASSADO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Assados",
    images: ["/products/enroladinho-salsicha.jpg"],
    description: "Mini enroladinho de salsicha assado (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SA004",
    name: "ENR SALSICHA C/ MOLHO ASSADO G PCT 10 UNID",
    price: 29.90,
    category: "Salgados Assados",
    images: ["/products/enroladinho-salsicha-molho.jpg"],
    description: "Enroladinho de salsicha com molho, tamanho grande (100g). Pacote com 10 unidades.",
    packageInfo: "Pacote 10un",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "SA005",
    name: "MINI EMPADA DE FRANGO ASSADO PCT 50 UNID",
    price: 44.90,
    category: "Salgados Assados",
    images: ["/products/mini-empada.jpg"],
    description: "Mini empada de frango assada (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SF001",
    name: "COXINHA DE FRANGO FRITO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Fritos",
    images: ["/products/coxinha-frita.jpg"],
    description: "Coxinha de frango frita, tamanho festa (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SF002",
    name: "RISOLE DE CARNE FRITO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Fritos",
    images: ["/products/risole-carne.jpg"],
    description: "Risole de carne frito, tamanho festa (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SF003",
    name: "BOLINHA DE QUEIJO FRITO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Fritos",
    images: ["/products/bolinha-queijo.jpg"],
    description: "Bolinha de queijo frita, tamanho festa (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SF004",
    name: "KIBE FRITO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Fritos",
    images: ["/products/kibe.jpg"],
    description: "Kibe frito, tamanho festa (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "SF005",
    name: "CROQUETE DE CARNE FRITO PCT 50 UNID",
    price: 39.90,
    category: "Salgados Fritos",
    images: ["/products/croquete.jpg"],
    description: "Croquete de carne frito, tamanho festa (25g). Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "PMD001",
    name: "PÃO DE BATATA DOCE PCT 1KG",
    price: 19.90,
    category: "Pães e Massas Doces",
    images: ["/products/pao-batata.jpg"],
    description: "Pão de batata doce. Pacote com aproximadamente 20 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "PMD002",
    name: "MINI SONHO DOCE DE LEITE PCT 50 UNID",
    price: 44.90,
    category: "Pães e Massas Doces",
    images: ["/products/mini-sonho.jpg"],
    description: "Mini sonho recheado com doce de leite. Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "PMD003",
    name: "MINI CROISSANT CHOCOLATE PCT 50 UNID",
    price: 44.90,
    category: "Pães e Massas Doces",
    images: ["/products/mini-croissant.jpg"],
    description: "Mini croissant recheado com chocolate. Pacote com 50 unidades.",
    packageInfo: "Pacote 50un",
    weight: 1.25,
    isPackage: true
  },
  {
    id: "BQ001",
    name: "BISCOITO DE QUEIJO GG PCT 1KG",
    price: 24.90,
    category: "Biscoito de Queijo",
    images: ["/products/biscoito-queijo-gg.jpg"],
    description: "Biscoito de queijo tamanho grande. Pacote com aproximadamente 40 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "BQ002",
    name: "QUEBRADOR DE QUEIJO SF 20G PCT 800G",
    price: 19.90,
    category: "Biscoito de Queijo",
    images: ["/products/quebrador-queijo.jpg"],
    description: "Quebrador de queijo sem fermento (20g). Pacote com aproximadamente 40 unidades.",
    packageInfo: "Pacote 800g",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "BQ003",
    name: "BISCOITO DE QUEIJO PALITO PCT 1KG",
    price: 24.90,
    category: "Biscoito de Queijo",
    images: ["/products/biscoito-queijo-palito.jpg"],
    description: "Biscoito de queijo em formato de palito. Pacote com aproximadamente 50 unidades.",
    packageInfo: "Pacote 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "SG001",
    name: "COXINHA DE FRANGO GRANDE 100G PCT 10 UNID",
    price: 29.90,
    category: "Salgados Grandes",
    images: ["/products/coxinha-grande.jpg"],
    description: "Coxinha de frango tamanho grande (100g). Pacote com 10 unidades.",
    packageInfo: "Pacote 10un",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "SG002",
    name: "ESFIRRA DE CARNE GRANDE 100G PCT 10 UNID",
    price: 29.90,
    category: "Salgados Grandes",
    images: ["/products/esfirra-grande.jpg"],
    description: "Esfirra de carne tamanho grande (100g). Pacote com 10 unidades.",
    packageInfo: "Pacote 10un",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "SG003",
    name: "HAMBURGÃO ASSADO 100G PCT 10 UNID",
    price: 29.90,
    category: "Salgados Grandes",
    images: ["/products/hamburgao.jpg"],
    description: "Hamburgão assado recheado com hambúrguer e queijo (100g). Pacote com 10 unidades.",
    packageInfo: "Pacote 10un",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "OUT001",
    name: "MASSA PARA PASTEL DISCO G PCT 500G",
    price: 14.90,
    category: "Outros",
    images: ["/products/massa-pastel.jpg"],
    description: "Massa para pastel em disco tamanho grande. Pacote com aproximadamente 15 unidades.",
    packageInfo: "Pacote 500g",
    weight: 0.5,
    isPackage: true
  },
  {
    id: "OUT002",
    name: "MASSA PARA PIZZA BROTINHO PCT 300G",
    price: 12.90,
    category: "Outros",
    images: ["/products/massa-pizza.jpg"],
    description: "Massa para pizza tamanho brotinho. Pacote com 5 unidades.",
    packageInfo: "Pacote 300g",
    weight: 0.3,
    isPackage: true
  }
];
