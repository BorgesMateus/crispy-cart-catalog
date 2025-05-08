
import { Category, Product } from '../types/products';

// WhatsApp number for orders
export const STORE_WHATSAPP = "5561999999999"; // Replace with actual number

// List of available product categories
export const CATEGORIES: Category[] = [
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
    description: "Tradicional pão de queijo mineiro, quentinho e macio."
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
    description: "Coxinha de frango cremosa com catupiry."
  },
  {
    id: "3",
    name: "Pão Francês",
    price: 0.75,
    images: ["/products/pao-frances.jpg"],
    category: "Pães",
    description: "Pão francês tradicional, crocante por fora e macio por dentro."
  },
  {
    id: "4",
    name: "Biscoito de Polvilho",
    price: 5.99,
    images: ["/products/biscoito-polvilho.jpg"],
    category: "Biscoitos",
    description: "Biscoito de polvilho crocante, sabor tradicional. Pacote com 100g."
  },
  {
    id: "5",
    name: "Empada de Frango",
    price: 4.99,
    images: ["/products/empada.jpg"],
    category: "Salgados Assados",
    description: "Empada de frango com massa folhada crocante."
  },
  {
    id: "6",
    name: "Quibe Frito",
    price: 4.50,
    images: ["/products/quibe.jpg"],
    category: "Salgados Fritos",
    description: "Quibe frito recheado com queijo."
  },
  {
    id: "7",
    name: "Pão de Forma Integral",
    price: 7.99,
    images: ["/products/pao-integral.jpg"],
    category: "Pães",
    description: "Pão de forma integral, com grãos. 500g."
  },
  {
    id: "8",
    name: "Cookie de Chocolate",
    price: 3.99,
    images: ["/products/cookie.jpg"],
    category: "Biscoitos",
    description: "Cookie de chocolate com gotas de chocolate meio amargo."
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
    description: "Bolo de chocolate com cobertura de ganache. Fatia."
  },
  {
    id: "10",
    name: "Café Coado",
    price: 2.50,
    images: ["/products/cafe.jpg"],
    category: "Outros",
    description: "Café fresco coado na hora. 200ml."
  }
];
