
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
  'Outros',
  'Kits e Combos'
];

// Sample product data
export const PRODUCTS: Product[] = [
  // Categoria: Salgados Fritos
  {
    id: "20038",
    name: "CHURROS DOCE DE CHOCOLATE PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20013",
    name: "CHURROS DOCE DE LEITE PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50698",
    name: "MINI PASTEL DE CARNE PCT 50 UNID",
    price: 27.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50647",
    name: "MINI PASTEL DE FRANGO PCT 50 UNID",
    price: 27.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50649",
    name: "MINI PASTEL DE QUEIJO PCT 50 UNID",
    price: 27.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20008",
    name: "SALG FESTA CARNE SECA C/ MANDIOCA PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50572",
    name: "SALG FESTA CARNE SECA C/ABOBORA PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20001",
    name: "SALG FESTA COXINHA C/ REQUEIJAO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20014",
    name: "SALG FESTA COXINHA PCT 50 UNID",
    price: 18.3,
    images: ["/products/coxinha-1.jpg", "/products/coxinha-2.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20005",
    name: "SALG FESTA CREME DE MILHO COM FRANGO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20035",
    name: "SALG FESTA CROQUETE DE QUEIJO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20027",
    name: "SALG FESTA ENR DE SALSICHA PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20007",
    name: "KIBE C/ REQUEIJÃO PCT 50 UNID", // Name updated as requested
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20044",
    name: "SALG FESTA KIBE C/ CREME DE ALHO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20006",
    name: "SALG FESTA KIBE TRADICIONAL PCT 50 UNID",
    price: 18.3,
    images: ["/products/quibe.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20004",
    name: "SALG FESTA NAPOLITANO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20002",
    name: "SALG FESTA RICOTA COM AZEITONA PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20034",
    name: "SALG FESTA RISOLE BOLIVIANO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20033",
    name: "SALG FESTA RISOLE DE ALHO PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20012",
    name: "SALG FESTA RISOLE DE BACALHAU PCT 50 UNID",
    price: 39.6,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20043",
    name: "SALG FESTA RISOLE DE CALABRESA PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20010",
    name: "SALG FESTA RISOLE DE CAMARAO PCT 50 UNID",
    price: 39.6,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20003",
    name: "SALG FESTA RISOLE DE CARNE PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50662",
    name: "SALG FESTA RISOLE DE CHEDDAR PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50359",
    name: "SALG FESTA RISOLE DE MILHO VERDE PCT 50 UNID",
    price: 18.3,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Fritos",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  
  // Categoria: Salgados Assados
  {
    id: "50532",
    name: "MINI ENR DE QUEIJO ASSADO PCT 50 UNID",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50410",
    name: "MINI ENR DE SALSICHA ASSADO PCT 50 UNID",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50411",
    name: "MINI ESFIRRA DE CARNE ASSADO PCT 50 UNID",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50412",
    name: "MINI ESFIRRA DE FRANGO ASSADO PCT 50 UNID",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50409",
    name: "MINI PAO PIZZA ASSADO PCT 50 UNID",
    price: 32.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "50533",
    name: "MINI ROMEU E JULIETA ASSADO PCT 50 UNID",
    price: 35.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Assados",
    packageInfo: "013-EMBALAGEM DE 50 UND",
    weight: 0.85,
    isPackage: true
  },
  {
    id: "20011",
    name: "SALG FESTA EMPADINHA DE FRANGO PCT 1KG",
    price: 25.0,
    images: ["/products/empada.jpg"],
    category: "Salgados Assados",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  
  // Categoria: Pães e Massas Doces
  {
    id: "41",
    name: "PAO AMANTEIGADO 50GR PCT 1K",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "86",
    name: "PAO AMANTEIGADO 50GR PCT 3,5KG",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "50749",
    name: "PAO BATATA 40GR PCT 3,5 K",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "97",
    name: "PAO BATATA 50G PCT 3,5 KG",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "91",
    name: "PAO BATATA 50GR PCT 1K",
    price: 13.7,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "16",
    name: "PAO CARTEIRA 135GR PCT 3,5KG",
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "93",
    name: "PAO DE LEITE 50G PCT 1K",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "81",
    name: "PAO DE LEITE 50G PCT 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "90",
    name: "PAO DE MILHO 50GR PCT 1KG",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "99",
    name: "PAO DE MILHO 50GR PCT 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "14",
    name: "PAO DOCE DE FITA 135G 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "507468",
    name: "PAO FRANCES 12 HORAS 70G PCT 1KG",
    price: 7.7,
    images: ["/products/pao-frances.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "40",
    name: "PAO FRANCES 6 HORAS 70 G PCT 1KG",
    price: 7.7,
    images: ["/products/pao-frances.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "88",
    name: "PAO FRANCES INTEGRAL 06 HORAS 70G PCT 1KG",
    price: 8.0,
    images: ["/products/pao-integral.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "89",
    name: "PAO FRANCES INTEGRAL 12 HORAS 70G PCT 1KG",
    price: 8.0,
    images: ["/products/pao-integral.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "84",
    name: "PAO HAMBURGER 65G PCT 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "83",
    name: "PAO HOT DOG 73G PCT 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "80",
    name: "PAO MANDI 70G PCT 3,5K",
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "92",
    name: "PAO MANDI 70GR PCT 1KG",
    price: 12.1,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "87",
    name: "PAO PALITO 75GR PCT 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "15",
    name: "PAO SOVADO (GRAMATURA) PCT 3.5KG", // Name updated as requested
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "82",
    name: "ROSCA CARACOL 50G PCT 3,5K",
    price: 35.35,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "61",
    name: "ROSCA CARACOL 50GR PCT 1K",
    price: 10.5,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "96",
    name: "ROSCA HUNGARA 70G PCT 3,5 KG",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "85",
    name: "ROSCA TIPO HUNGARA 35G PCT 3,5K",
    price: 43.75,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  {
    id: "71",
    name: "ROSCA TIPO HUNGARA 35GR PCT 1K",
    price: 13.7,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "51",
    name: "ROSCA TRANÇADA 50G PCT 1KG", // Updated to "ç" instead of "c"
    price: 12.1,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "98",
    name: "ROSCA TRANÇADA 50G PCT 3,5KG", // Updated to "ç" instead of "c"
    price: 39.55,
    images: ["/products/placeholder-pao.jpg"],
    category: "Pães e Massas Doces",
    packageInfo: "017-EMBALAGEM DE 3,5 KG",
    weight: 3.5,
    isPackage: true
  },
  
  // Categoria: Pão de Queijo
  {
    id: "507466",
    name: "HOT CHEESE 1KG",
    price: 33.0,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true,
    inStock: false // Marked as out of stock as requested
  },
  {
    id: "50405",
    name: "PAO DE QUEIJO GG 100G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10034",
    name: "PAO DE QUEIJO GG 15G PCT 1KG",
    price: 18.4,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10035",
    name: "PAO DE QUEIJO GG 15G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10025",
    name: "PAO DE QUEIJO GG 25G PCT 1KG",
    price: 18.4,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10017",
    name: "PAO DE QUEIJO GG 25G PCT 400G",
    price: 8.7,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "10036",
    name: "PAO DE QUEIJO GG 25G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50731",
    name: "PAO DE QUEIJO GG 25G PCT 800G",
    price: 15.3,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "004-EMBALAGEM DE 800G",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "10023",
    name: "PAO DE QUEIJO GG 30G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10037",
    name: "PAO DE QUEIJO GG 40G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50573",
    name: "PAO DE QUEIJO RECHEADO COM CARNE PCT 1KG",
    price: 29.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10002",
    name: "PAO DE QUEIJO GG 55G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10026",
    name: "PAO DE QUEIJO GG 70G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10039",
    name: "PAO DE QUEIJO GG 80G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10032",
    name: "PAO DE QUEIJO GG 90G PCT 5KG",
    price: 92.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50407",
    name: "PAO DE QUEIJO GM 25G PCT 800G",
    price: 17.2,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "004-EMBALAGEM DE 800G",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "50708",
    name: "PAO DE QUEIJO GOURMET PCT 400G",
    price: 10.2,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "50657",
    name: "PAO DE QUEIJO PREMIUM 100G PCT 5KG",
    price: 114.95,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "10010",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 1KG",
    price: 22.99,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10020",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 400G",
    price: 9.5,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "50659",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 5KG",
    price: 114.95,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50732",
    name: "PAO DE QUEIJO PREMIUM 30G PCT 800G",
    price: 19.0,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "004-EMBALAGEM DE 800G",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "50653",
    name: "PAO DE QUEIJO PREMIUM 55G PCT 5KG",
    price: 114.95,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "507442",
    name: "PAO DE QUEIJO PREMIUM 70G PCT 5KG",
    price: 574.75,
    images: ["/products/pao-queijo-1.jpg", "/products/pao-queijo-2.jpg"],
    category: "Pão de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "50520",
    name: "PAO DE QUEIJO RECHEADO COM FRANGO PCT 1KG",
    price: 29.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50655",
    name: "PAO DE QUEIJO RECHEADO COM GOIABADA PCT 1K",
    price: 29.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50611",
    name: "PAO DE QUEIJO RECHEADO COM LINGUICA APIMENTADA PCT 1KG",
    price: 29.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "507469",
    name: "PAO DE QUEIJO RECHEADO GOURMET CALABRESA 1KG",
    price: 39.5,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "11",
    name: "PAO DE QUEIJO RECHEADO GOURMET FRANGO PCT 1KG",
    price: 39.5,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10",
    name: "PAO DE QUEIJO RECHEADO GOURMET GOIABADA PCT 1KG",
    price: 39.5,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50704",
    name: "PAO DE QUEIJO SEM LACTOSE PCT 1KG",
    price: 29.6,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50705",
    name: "PAO DE QUEIJO SEM LACTOSE PCT 400G",
    price: 12.1,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "622",
    name: "PAO RECHEADO GOURMET DE CALABRESA PCT 400G",
    price: 16.4,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "623",
    name: "PAO RECHEADO GOURMET DE FRANGO PCT 400G",
    price: 16.4,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "621",
    name: "PAO RECHEADO GOURMET DE GOIABADA PCT 400G",
    price: 16.4,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Pão de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  
  // Categoria: Biscoito de Queijo
  {
    id: "10014",
    name: "BISC PALITO PREMIUM 40G 1KG",
    price: 22.99,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10012",
    name: "BISC PALITO PREMIUM 80G 3KG",
    price: 68.97,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "PACOTE DE 3KG",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50668",
    name: "BISCOITO 4 QUEIJO MEIA LUA PCT 2KG",
    price: 41.8,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "006-EMBALAGEM DE 2KG",
    weight: 2.0,
    isPackage: true
  },
  {
    id: "50667",
    name: "BISCOITO 4 QUEIJO PALITO 40G PCT 1KG",
    price: 20.9,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  // Moving products to Biscoito de Queijo category
  {
    id: "507452",
    name: "PALITO DE QUEIJO GOURMET PCT 1KG",
    price: 25.3,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Biscoito de Queijo", // Changed from "Pão de Queijo" to "Biscoito de Queijo"
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50709",
    name: "PALITO DE QUEIJO GOURMET PCT 400G",
    price: 10.2,
    images: ["/products/placeholder-pao-queijo.jpg"],
    category: "Biscoito de Queijo", // Changed from "Pão de Queijo" to "Biscoito de Queijo"
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "10015",
    name: "BISCOITO DE QUEIJO GG PCT 1KG",
    price: 19.3,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "10013",
    name: "BISCOITO DE QUEIJO PALITO PCT 1 KG",
    price: 20.9,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50401",
    name: "BISCOITO DE QUEIJO SF 40G PCT 400G",
    price: 14.3,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "50402",
    name: "BISCOITO DE QUEIJO SF 40G PCT 800G",
    price: 28.6,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "004-EMBALAGEM DE 800G",
    weight: 0.8,
    isPackage: true
  },
  {
    id: "50380",
    name: "BISCOITO GG MEIA LUA 40G PCT 1KG",
    price: 19.3,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "33",
    name: "BISCOITO GG MEIA LUA 60G PCT 2KG",
    price: 38.6,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "006-EMBALAGEM DE 2KG",
    weight: 2.0,
    isPackage: true
  },
  {
    id: "507457",
    name: "BISCOITO SUICO 120G PCT 5K",
    price: 95.5,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "507451",
    name: "BISCOITO SUICO 40G PCT 1KG",
    price: 19.1,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "507450",
    name: "BISCOITO SUICO 80G PCT 1KG",
    price: 19.1,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "19",
    name: "BISCOITO SUICO MEIA LUA 60G PCT 2KG",
    price: 38.2,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "006-EMBALAGEM DE 2KG",
    weight: 2.0,
    isPackage: true
  },
  {
    id: "50007",
    name: "CHIPA PCT 1KG",
    price: 19.0,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50646",
    name: "PALITO DE QUEIJO PCT 1KG",
    price: 19.0,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "50403",
    name: "QUEBRADOR DE QUEIJO SF 20G PCT 400G",
    price: 13.6,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "50404",
    name: "QUEBRADOR DE QUEIJO SF 20G PCT 800G",
    price: 27.2,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoito de Queijo",
    packageInfo: "004-EMBALAGEM DE 800G",
    weight: 0.8,
    isPackage: true
  },
  
  // Categoria: Salgados Grandes
  {
    id: "28",
    name: "COXINHA 130G PCT 10 UNID",
    price: 37.5,
    images: ["/products/coxinha-1.jpg", "/products/coxinha-2.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 1.3,
    isPackage: true
  },
  {
    id: "50627",
    name: "ENR QUEIJO ASSADO G PCT 10 UNID",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50622",
    name: "ENR SALSICHA C/ MOLHO ASSADO G PCT 10 UNID",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50620",
    name: "ENR SALSICHA C/ QUEIJO ASSADO G PCT 10 UNID",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50626",
    name: "ESFIRRA DE CARNE ASSADO PCT 10 UNID",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "507465",
    name: "PASTELAO DE APRESUNTADO C/QUEIJO PCT 10 UNID",
    price: 37.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 1.3,
    isPackage: true
  },
  {
    id: "50643",
    name: "PASTELAO DE CARNE PCT 10 UNID",
    price: 37.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 1.3,
    isPackage: true
  },
  {
    id: "507463",
    name: "PASTELAO DE FRANGO PCT 10 UNID",
    price: 37.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 1.3,
    isPackage: true
  },
  {
    id: "50619",
    name: "PRESUNTO E QUEIJO ASSADO G PCT 10 UNID",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "20018",
    name: "RISOLE DE CARNE GRANDE PCT 30 UNID",
    price: 79.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "011-EMBALAGEM COM 30 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50618",
    name: "ROMEU E JULIETA ASSADO G PCT 10 UNID",
    price: 49.5,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "010-EMBALAGEM COM 10 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "20017",
    name: "SALG G COXINHA 100G PCT 30 UNID",
    price: 79.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "011-EMBALAGEM COM 30 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50005",
    name: "SALG G COXINHA C/ CATUPIRY 100G PCT 30 UNID",
    price: 79.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "011-EMBALAGEM COM 30 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "50004",
    name: "SALG G ENR DE SALSICHA PCT 30 UNID",
    price: 79.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "011-EMBALAGEM COM 30 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "20020",
    name: "SALG G FRITO KIBE CARNE 100G PCT 30 UNID",
    price: 86.7,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "011-EMBALAGEM COM 30 UND",
    weight: 3.0,
    isPackage: true
  },
  {
    id: "20019",
    name: "SALG G NAPOLITANO 100G PCT 30 UNID",
    price: 79.1,
    images: ["/products/placeholder-salgado.jpg"],
    category: "Salgados Grandes",
    packageInfo: "011-EMBALAGEM COM 30 UND",
    weight: 3.0,
    isPackage: true
  },
  
  // Categoria: Outros
  {
    id: "50615",
    name: "BROA DOCE 35G PCT 1KG",
    price: 16.9,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "507458",
    name: "BROA DOCE 70G PCT 5KG",
    price: 84.5,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  {
    id: "56",
    name: "DADINHO DE TAPIOCA PCT DE 1KG",
    price: 22.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "628",
    name: "DADINHO DE TAPIOCA PCT DE 400G",
    price: 8.3,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "3000",
    name: "ALHO EM CREME TRADICIONAL OMG POTE 200G",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "005-EMBALAGEM DE 200G",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "3100",
    name: "ALHO EM CREME COM CEBOLA OMG POTE 200G",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "005-EMBALAGEM DE 200G",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "3200",
    name: "ALHO EM CREME C/ ERVAS FINAS OMG POTE 200G",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "005-EMBALAGEM DE 200G",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "3300",
    name: "ALHO EM CREME C/ PIMENTA CALABRESA OMG POTE 200G",
    price: 12.0,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "005-EMBALAGEM DE 200G",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "10028",
    name: "BROA TEMPERADA 35G PCT 1KG",
    price: 16.9,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "001-PACOTE DE 1KG",
    weight: 1.0,
    isPackage: true
  },
  {
    id: "507459",
    name: "BROA TEMPERADA 70G PCT 5KG",
    price: 84.5,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros",
    packageInfo: "003-EMBALAGEM DE 5KG",
    weight: 5.0,
    isPackage: true
  },
  // Moving tapioca products to Outros category
  {
    id: "50707",
    name: "PAO DE TAPIOCA COM COCO PCT 400G",
    price: 12.1,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros", // Changed from "Pão de Queijo" to "Outros"
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  },
  {
    id: "50706",
    name: "PAO DE TAPIOCA COM QUEIJO PCT 400G",
    price: 9.9,
    images: ["/products/placeholder-outros.jpg"],
    category: "Outros", // Changed from "Pão de Queijo" to "Outros"
    packageInfo: "005-EMBALAGEM DE 400G",
    weight: 0.4,
    isPackage: true
  }
];
