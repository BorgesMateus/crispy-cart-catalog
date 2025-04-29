
import { Product, Category } from "../types/products";

export const CATEGORIES: Category[] = [
  'Salgados Fritos',
  'Salgados Assados',
  'Pães',
  'Biscoitos',
  'Outros'
];

// All prices are in BRL (R$)
export const PRODUCTS: Product[] = [
  // Salgados Fritos
  {
    id: "frito-1",
    name: "Coxinha de Frango",
    price: 4.50,
    image: "/placeholder.svg",
    category: "Salgados Fritos",
    description: "Coxinha tradicional recheada com frango desfiado"
  },
  {
    id: "frito-2",
    name: "Bolinha de Queijo",
    price: 4.00,
    image: "/placeholder.svg",
    category: "Salgados Fritos",
    description: "Bolinha crocante recheada com queijo"
  },
  {
    id: "frito-3",
    name: "Risole de Carne",
    price: 4.50,
    image: "/placeholder.svg",
    category: "Salgados Fritos",
    description: "Risole recheado com carne moída temperada"
  },
  {
    id: "frito-4",
    name: "Kibe",
    price: 4.50,
    image: "/placeholder.svg",
    category: "Salgados Fritos",
    description: "Kibe tradicional de carne com trigo para kibe"
  },
  {
    id: "frito-5",
    name: "Pastel de Queijo",
    price: 5.00,
    image: "/placeholder.svg",
    category: "Salgados Fritos",
    description: "Pastel frito recheado com queijo"
  },
  
  // Salgados Assados
  {
    id: "assado-1",
    name: "Empada de Frango",
    price: 5.50,
    image: "/placeholder.svg",
    category: "Salgados Assados",
    description: "Empada assada com recheio de frango"
  },
  {
    id: "assado-2",
    name: "Esfiha de Carne",
    price: 5.00,
    image: "/placeholder.svg",
    category: "Salgados Assados",
    description: "Esfiha assada com recheio de carne temperada"
  },
  {
    id: "assado-3",
    name: "Pão de Queijo",
    price: 3.50,
    image: "/placeholder.svg",
    category: "Salgados Assados",
    description: "Pão de queijo tradicional mineiro"
  },
  {
    id: "assado-4",
    name: "Croissant",
    price: 6.00,
    image: "/placeholder.svg",
    category: "Salgados Assados",
    description: "Croissant folhado tradicional"
  },
  {
    id: "assado-5",
    name: "Enroladinho de Presunto e Queijo",
    price: 5.50,
    image: "/placeholder.svg",
    category: "Salgados Assados",
    description: "Massa folhada recheada com presunto e queijo"
  },
  
  // Pães
  {
    id: "pao-1",
    name: "Pão Francês",
    price: 0.75,
    image: "/placeholder.svg",
    category: "Pães",
    description: "Pão francês tradicional (unidade)"
  },
  {
    id: "pao-2",
    name: "Pão Integral",
    price: 8.50,
    image: "/placeholder.svg",
    category: "Pães",
    description: "Pão integral de forma (pacote)"
  },
  {
    id: "pao-3",
    name: "Baguete",
    price: 6.50,
    image: "/placeholder.svg",
    category: "Pães",
    description: "Baguete tradicional francesa"
  },
  {
    id: "pao-4",
    name: "Pão Doce",
    price: 1.50,
    image: "/placeholder.svg",
    category: "Pães",
    description: "Pão doce coberto com creme e coco"
  },
  {
    id: "pao-5",
    name: "Pão Australiano",
    price: 9.50,
    image: "/placeholder.svg",
    category: "Pães",
    description: "Pão australiano de forma (pacote)"
  },
  
  // Biscoitos
  {
    id: "biscoito-1",
    name: "Sequilhos",
    price: 12.00,
    image: "/placeholder.svg",
    category: "Biscoitos",
    description: "Pacote de sequilhos de amido (200g)"
  },
  {
    id: "biscoito-2",
    name: "Cookies de Chocolate",
    price: 15.00,
    image: "/placeholder.svg",
    category: "Biscoitos",
    description: "Cookies com gotas de chocolate (250g)"
  },
  {
    id: "biscoito-3",
    name: "Biscoito de Polvilho",
    price: 10.00,
    image: "/placeholder.svg",
    category: "Biscoitos",
    description: "Biscoito de polvilho tradicional (150g)"
  },
  {
    id: "biscoito-4",
    name: "Amanteigado",
    price: 13.50,
    image: "/placeholder.svg",
    category: "Biscoitos",
    description: "Biscoito amanteigado (200g)"
  },
  {
    id: "biscoito-5",
    name: "Palito de Chocolate",
    price: 14.00,
    image: "/placeholder.svg",
    category: "Biscoitos",
    description: "Palitos de biscoito cobertos com chocolate (180g)"
  },
  
  // Outros
  {
    id: "outro-1",
    name: "Bolo de Chocolate",
    price: 25.00,
    image: "/placeholder.svg",
    category: "Outros",
    description: "Bolo de chocolate com cobertura de brigadeiro (fatia)"
  },
  {
    id: "outro-2",
    name: "Sonho",
    price: 6.50,
    image: "/placeholder.svg",
    category: "Outros",
    description: "Sonho recheado com doce de leite"
  },
  {
    id: "outro-3",
    name: "Pudim",
    price: 8.00,
    image: "/placeholder.svg",
    category: "Outros",
    description: "Pudim de leite condensado individual"
  },
  {
    id: "outro-4",
    name: "Torta de Frango",
    price: 30.00,
    image: "/placeholder.svg",
    category: "Outros",
    description: "Torta de frango com catupiry (pedaço)"
  },
  {
    id: "outro-5",
    name: "Quiche de Legumes",
    price: 28.00,
    image: "/placeholder.svg",
    category: "Outros",
    description: "Quiche de legumes variados (pedaço)"
  }
];

// Free shipping threshold (amount to get free shipping)
export const FREE_SHIPPING_THRESHOLD = 50;

// Store WhatsApp number
export const STORE_WHATSAPP = "5511999999999"; // Replace with your actual number
