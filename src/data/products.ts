
import { Category, Product } from '../types/products';

// WhatsApp number for orders
export const STORE_WHATSAPP = "5561982065632"; // Updated to the correct number

// Minimum order requirements
export const MIN_PACKAGES = 5;
export const MIN_WEIGHT_KG = 5;

// List of available product categories
export const CATEGORIES: Category[] = [
  'Kits e Combos',
  'Salgados Fritos',
  'Salgados Assados',
  'Pães',
  'Biscoitos',
  'Outros'
];

// Sample product data
export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Pão de Queijo",
    price: 3.50,
    images: [
      "/products/pao-queijo-1.jpg", 
      "/products/pao-queijo-2.jpg"
    ],
    category: "Salgados Assados",
    description: "Tradicional pão de queijo mineiro, quentinho e macio.",
    weight: 0.25,
    isPackage: true
  },
  {
    id: "2",
    name: "Coxinha de Frango",
    price: 4.50,
    images: [
      "/products/coxinha-1.jpg", 
      "/products/coxinha-2.jpg"
    ],
    category: "Salgados Fritos",
    description: "Coxinha de frango cremosa com catupiry.",
    weight: 0.3,
    isPackage: true
  },
  {
    id: "3",
    name: "Pão Francês",
    price: 0.75,
    images: ["/products/pao-frances.jpg"],
    category: "Pães",
    description: "Pão francês tradicional, crocante por fora e macio por dentro.",
    weight: 0.05,
    isPackage: false
  },
  {
    id: "4",
    name: "Biscoito de Polvilho",
    price: 5.99,
    images: ["/lovable-uploads/e7f3f889-4a2c-455b-93a9-21f81078ae6a.png"],
    category: "Biscoitos",
    description: "Biscoito de polvilho crocante, sabor tradicional. Pacote com 100g.",
    weight: 0.1,
    isPackage: true
  },
  {
    id: "5",
    name: "Empada de Frango",
    price: 4.99,
    images: ["/products/empada.jpg"],
    category: "Salgados Assados",
    description: "Empada de frango com massa folhada crocante.",
    weight: 0.15,
    isPackage: true
  },
  {
    id: "6",
    name: "Quibe Frito",
    price: 4.50,
    images: ["/products/quibe.jpg"],
    category: "Salgados Fritos",
    description: "Quibe frito recheado com queijo.",
    weight: 0.2,
    isPackage: true
  },
  {
    id: "7",
    name: "Pão de Forma Integral",
    price: 7.99,
    images: ["/products/pao-integral.jpg"],
    category: "Pães",
    description: "Pão de forma integral, com grãos. 500g.",
    weight: 0.5,
    isPackage: true
  },
  {
    id: "8",
    name: "Cookie de Chocolate",
    price: 3.99,
    images: ["/products/cookie.jpg"],
    category: "Biscoitos",
    description: "Cookie de chocolate com gotas de chocolate meio amargo.",
    weight: 0.08,
    isPackage: true
  },
  {
    id: "9",
    name: "Bolo de Chocolate",
    price: 12.99,
    images: [
      "/products/bolo-chocolate-1.jpg",
      "/products/bolo-chocolate-2.jpg"
    ],
    category: "Outros",
    description: "Bolo de chocolate com cobertura de ganache. Fatia.",
    weight: 0.35,
    isPackage: false,
    extraInfo: {
      usageTips: "Perfeito para sobremesa após uma refeição ou para acompanhar um café à tarde.",
      ingredients: "Chocolate, farinha, açúcar, ovos, manteiga, leite e fermento.",
      funFact: "O chocolate contém antioxidantes que podem melhorar o humor."
    }
  },
  {
    id: "10",
    name: "Café Coado",
    price: 2.50,
    images: ["/products/cafe.jpg"],
    category: "Outros",
    description: "Café fresco coado na hora. 200ml.",
    weight: 0.2,
    isPackage: false
  }
];
