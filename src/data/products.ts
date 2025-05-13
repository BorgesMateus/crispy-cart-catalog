
import { Category, Product } from '../types/products';

// WhatsApp number for orders
export const STORE_WHATSAPP = "5561982065632";

// Minimum order requirements
export const MIN_PACKAGES = 5;
export const MIN_WEIGHT_KG = 5;

// List of available product categories
export const CATEGORIES: Category[] = [
  'Salgados Fritos',
  'Salgados Assados',
  'Pães e Massas Doces',
  'Pão de Queijo',
  'Biscoito de Queijo',
  'Salgados Grandes',
  'Outros'
];

// Sample product data
export const PRODUCTS: Product[] = [
  // Categoria: Salgados Fritos
  {
    id: "20038",
    name: "CHURROS DOCE DE CHOCOLATE",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Churros doce com recheio de chocolate",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20013",
    name: "CHURROS DOCE DE LEITE",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Churros doce com recheio de doce de leite",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50698",
    name: "MINI PASTEL DE CARNE",
    price: 27.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Mini pastel com recheio de carne",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50647",
    name: "MINI PASTEL DE FRANGO",
    price: 27.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Mini pastel com recheio de frango",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50649",
    name: "MINI PASTEL DE QUEIJO",
    price: 27.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Mini pastel com recheio de queijo",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20008",
    name: "SALGADO FESTA CARNE SECA C/ MANDIOCA",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Salgado com recheio de carne seca e mandioca",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50572",
    name: "SALGADO FESTA CARNE SECA C/ ABÓBORA",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Salgado com recheio de carne seca e abóbora",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20001",
    name: "SALGADO FESTA COXINHA C/ REQUEIJÃO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Coxinha com recheio de frango e requeijão",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20014",
    name: "SALGADO FESTA COXINHA",
    price: 18.3,
    images: ["/products/coxinha-1.jpg", "/products/coxinha-2.jpg"],
    category: "Salgados Fritos",
    description: "Coxinha tradicional de frango",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20005",
    name: "SALGADO FESTA CREME DE MILHO COM FRANGO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Salgado com recheio de creme de milho e frango",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20035",
    name: "SALGADO FESTA CROQUETE DE QUEIJO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Croquete recheado com queijo",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20027",
    name: "SALGADO FESTA ENROLADINHO DE SALSICHA",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Enroladinho de salsicha tradicional",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20007",
    name: "SALGADO FESTA KIBE C/ CATUPIRY",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Kibe recheado com catupiry",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20044",
    name: "SALGADO FESTA KIBE C/ CREME DE ALHO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Kibe recheado com creme de alho",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20006",
    name: "SALGADO FESTA KIBE TRADICIONAL",
    price: 18.3,
    images: ["/products/quibe.jpg"],
    category: "Salgados Fritos",
    description: "Kibe tradicional",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20004",
    name: "SALGADO FESTA NAPOLITANO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Salgado tipo napolitano",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20002",
    name: "SALGADO FESTA RICOTA COM AZEITONA",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Salgado recheado com ricota e azeitona",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20034",
    name: "SALGADO FESTA RISOLE BOLIVIANO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole estilo boliviano",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20033",
    name: "SALGADO FESTA RISOLE DE ALHO",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com creme de alho",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20012",
    name: "SALGADO FESTA RISOLE DE BACALHAU",
    price: 39.6,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com bacalhau",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20043",
    name: "SALGADO FESTA RISOLE DE CALABRESA",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com calabresa",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20010",
    name: "SALGADO FESTA RISOLE DE CAMARÃO",
    price: 39.6,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com camarão",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20003",
    name: "SALGADO FESTA RISOLE DE CARNE",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com carne",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50662",
    name: "SALGADO FESTA RISOLE DE CHEDDAR",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com queijo cheddar",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50359",
    name: "SALGADO FESTA RISOLE DE MILHO VERDE",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    description: "Risole recheado com milho verde",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  
  // Categoria: Salgados Assados
  {
    id: "50532",
    name: "MINI ENROLADINHO DE QUEIJO ASSADO",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    description: "Mini enroladinho de queijo assado",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50410",
    name: "MINI ENROLADINHO DE SALSICHA ASSADO",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    description: "Mini enroladinho de salsicha assado",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50411",
    name: "MINI ESFIRRA DE CARNE ASSADO",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    description: "Mini esfirra de carne assada",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50412",
    name: "MINI ESFIRRA DE FRANGO ASSADO",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    description: "Mini esfirra de frango assada",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50409",
    name: "MINI PÃO PIZZA ASSADO",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    description: "Mini pão tipo pizza assado",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50533",
    name: "MINI ROMEU E JULIETA ASSADO",
    price: 35.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    description: "Mini romeu e julieta assado (queijo com goiabada)",
    packageInfo: "Pacote com 50 unidades",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20011",
    name: "SALGADO FESTA EMPADINHA DE FRANGO",
    price: 25.0,
    images: ["/products/empada.jpg"],
    category: "Salgados Assados",
    description: "Empadinha de frango",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  
  // Categoria: Pães e Massas Doces
  {
    id: "41",
    name: "PÃO AMANTEIGADO 50GR",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão amanteigado de 50 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "86",
    name: "PÃO AMANTEIGADO 50GR",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão amanteigado de 50 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "50749",
    name: "PÃO BATATA 40GR",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de batata de 40 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "97",
    name: "PÃO BATATA 50G",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de batata de 50 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "91",
    name: "PÃO BATATA 50GR",
    price: 13.7,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de batata de 50 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "16",
    name: "PÃO CARTEIRA 135GR",
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão tipo carteira de 135 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "93",
    name: "PÃO DE LEITE 50G",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de leite de 50 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "81",
    name: "PÃO DE LEITE 50G",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de leite de 50 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "90",
    name: "PÃO DE MILHO 50GR",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de milho de 50 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "99",
    name: "PÃO DE MILHO 50GR",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de milho de 50 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "14",
    name: "PÃO DOCE DE FITA 135G",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão doce de fita de 135 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "507468",
    name: "PÃO FRANCES 12 HORAS 70G",
    price: 7.7,
    images: ["/products/pao-frances.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão francês de 70 gramas, 12 horas de fermentação",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "40",
    name: "PÃO FRANCES 6 HORAS 70G",
    price: 7.7,
    images: ["/products/pao-frances.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão francês de 70 gramas, 6 horas de fermentação",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "88",
    name: "PÃO FRANCES INTEGRAL 06 HORAS 70G",
    price: 8.0,
    images: ["/products/pao-integral.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão francês integral de 70 gramas, 6 horas de fermentação",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "89",
    name: "PÃO FRANCES INTEGRAL 12 HORAS 70G",
    price: 8.0,
    images: ["/products/pao-integral.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão francês integral de 70 gramas, 12 horas de fermentação",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "84",
    name: "PÃO HAMBURGER 65G",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de hambúrguer de 65 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "83",
    name: "PÃO HOT DOG 73G",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão de hot dog de 73 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "80",
    name: "PÃO MANDI 70G",
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão tipo mandi de 70 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "92",
    name: "PÃO MANDI 70GR",
    price: 12.1,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão tipo mandi de 70 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "87",
    name: "PÃO PALITO 75GR",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão tipo palito de 75 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "15",
    name: "PÃO SOVADO 430G",
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Pão sovado de 430 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "82",
    name: "ROSCA CARACOL 50G",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca tipo caracol de 50 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "61",
    name: "ROSCA CARACOL 50GR",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca tipo caracol de 50 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "96",
    name: "ROSCA HUNGARA 70G",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca húngara de 70 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "85",
    name: "ROSCA TIPO HUNGARA 35G",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca tipo húngara de 35 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "71",
    name: "ROSCA TIPO HUNGARA 35GR",
    price: 13.7,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca tipo húngara de 35 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "51",
    name: "ROSCA TRANCADA 50G",
    price: 12.1,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca trançada de 50 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "98",
    name: "ROSCA TRANCADA 50G",
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    description: "Rosca trançada de 50 gramas",
    packageInfo: "Pacote de 3,5kg",
    weight: 3.5,
    isPackage: true
  },
  
  // Categoria: Pão de Queijo
  {
    id: "507466",
    name: "HOT CHEESE",
    price: 33.0,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo em formato de hot dog",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "507452",
    name: "PALITO DE QUEIJO GOURMET",
    price: 25.3,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    description: "Palito de queijo gourmet",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50709",
    name: "PALITO DE QUEIJO GOURMET",
    price: 10.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    description: "Palito de queijo gourmet",
    packageInfo: "Pacote de 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "50405",
    name: "PÃO DE QUEIJO GG 100G",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo grande de 100 gramas",
    packageInfo: "Pacote de 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10034",
    name: "PÃO DE QUEIJO GG 15G",
    price: 18.4,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 15 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10035",
    name: "PÃO DE QUEIJO GG 15G",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 15 gramas",
    packageInfo: "Pacote de 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10025",
    name: "PÃO DE QUEIJO GG 25G",
    price: 18.4,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 25 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10017",
    name: "PÃO DE QUEIJO GG 25G",
    price: 8.7,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 25 gramas",
    packageInfo: "Pacote de 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "10036",
    name: "PÃO DE QUEIJO GG 25G",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 25 gramas",
    packageInfo: "Pacote de 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50731",
    name: "PÃO DE QUEIJO GG 25G",
    price: 15.3,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 25 gramas",
    packageInfo: "Pacote de 800g",
    weight: 0.8,
    isPackage: true
  },
  
  // Adicionando mais produtos de Pão de Queijo...
  {
    id: "10023",
    name: "PÃO DE QUEIJO GG 30G",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 30 gramas",
    packageInfo: "Pacote de 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10037",
    name: "PÃO DE QUEIJO GG 40G",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo de 40 gramas",
    packageInfo: "Pacote de 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50573",
    name: "PÃO DE QUEIJO RECHEADO COM CARNE",
    price: 29.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    description: "Pão de queijo recheado com carne",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  
  // Categoria: Biscoito de Queijo
  {
    id: "10014",
    name: "BISCOITO PALITO PREMIUM 40G",
    price: 22.99,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    description: "Biscoito de queijo em formato palito premium",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10012",
    name: "BISCOITO PALITO PREMIUM 80G",
    price: 68.97,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    description: "Biscoito de queijo em formato palito premium",
    packageInfo: "Pacote de 3kg",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50668",
    name: "BISCOITO 4 QUEIJO MEIA LUA",
    price: 41.8,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    description: "Biscoito de 4 queijos em formato meia lua",
    packageInfo: "Pacote de 2kg",
    weight: 2.0,
    isPackage: true
  },
  {
    id: "50667",
    name: "BISCOITO 4 QUEIJO PALITO 40G",
    price: 20.9,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    description: "Biscoito de 4 queijos em formato palito",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  
  // Categoria: Salgados Grandes
  {
    id: "28",
    name: "COXINHA 130G",
    price: 37.5,
    images: ["/products/coxinha-1.jpg", "/products/coxinha-2.jpg"],
    category: "Salgados Grandes",
    description: "Coxinha grande de frango com 130g",
    packageInfo: "Pacote com 10 unidades",
    weight: 1.3,
    isPackage: true
  },
  {
    id: "50627",
    name: "ENROLADINHO DE QUEIJO ASSADO GRANDE",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    description: "Enroladinho de queijo grande assado",
    packageInfo: "Pacote com 10 unidades",
    weight: 3.0,
    isPackage: true
  },
  
  // Categoria: Outros
  {
    id: "50615",
    name: "BROA DOCE 35G",
    price: 16.9,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Broa doce de 35 gramas",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "507458",
    name: "BROA DOCE 70G",
    price: 84.5,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Broa doce de 70 gramas",
    packageInfo: "Pacote de 5kg",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "56",
    name: "DADINHO DE TAPIOCA",
    price: 22.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Dadinho de tapioca",
    packageInfo: "Pacote de 1kg",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "628",
    name: "DADINHO DE TAPIOCA",
    price: 8.3,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Dadinho de tapioca",
    packageInfo: "Pacote de 400g",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "3000",
    name: "ALHO EM CREME TRADICIONAL OMG",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Alho em creme tradicional OMG",
    packageInfo: "Pote de 200g",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "3100",
    name: "ALHO EM CREME COM CEBOLA OMG",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Alho em creme com cebola OMG",
    packageInfo: "Pote de 200g",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "3200",
    name: "ALHO EM CREME C/ ERVAS FINAS OMG",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Alho em creme com ervas finas OMG",
    packageInfo: "Pote de 200g",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "3300",
    name: "ALHO EM CREME C/ PIMENTA CALABRESA OMG",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    description: "Alho em creme com pimenta calabresa OMG",
    packageInfo: "Pote de 200g",
    weight: 0.2,
    isPackage: true
  }
];
