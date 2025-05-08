
import { Kit } from '@/types/products';
import { PRODUCTS } from './products';

// Sample kit data
export const KITS: Kit[] = [
  {
    id: 'kit1',
    name: 'Kit Café da Manhã',
    description: 'O kit perfeito para um café da manhã especial. Inclui pães, biscoitos e outros produtos selecionados.',
    image: '/kits/kit-cafe-manha.jpg',
    items: [
      { productId: '3', quantity: 10 }, // 10x Pão Francês
      { productId: '7', quantity: 1 }, // 1x Pão de Forma Integral
      { productId: '4', quantity: 2 }, // 2x Biscoito de Polvilho
      { productId: '1', quantity: 10 }, // 10x Pão de Queijo
    ]
  },
  {
    id: 'kit2',
    name: 'Kit Festinha 50 pessoas',
    description: 'Ideal para eventos e festas com aproximadamente 50 convidados.',
    image: '/kits/kit-festinha.jpg',
    items: [
      { productId: '1', quantity: 30 }, // 30x Pão de Queijo
      { productId: '2', quantity: 25 }, // 25x Coxinha de Frango
      { productId: '5', quantity: 20 }, // 20x Empada de Frango
      { productId: '6', quantity: 20 }, // 20x Quibe Frito
    ]
  },
  {
    id: 'kit3',
    name: 'Kit Degustação',
    description: 'Uma seleção diversificada de produtos para experimentar nossas especialidades.',
    image: '/kits/kit-degustacao.jpg',
    items: [
      { productId: '1', quantity: 5 }, // 5x Pão de Queijo
      { productId: '2', quantity: 5 }, // 5x Coxinha de Frango
      { productId: '4', quantity: 1 }, // 1x Biscoito de Polvilho
      { productId: '8', quantity: 3 }, // 3x Cookie de Chocolate
      { productId: '9', quantity: 2 }, // 2x Bolo de Chocolate
    ]
  }
];

// Helper function to get product details for a kit
export const getKitDetails = (kitId: string) => {
  const kit = KITS.find(k => k.id === kitId);
  if (!kit) return null;
  
  const items = kit.items.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return {
      product,
      quantity: item.quantity
    };
  }).filter(item => item.product !== undefined);
  
  const totalPrice = items.reduce((sum, item) => 
    sum + ((item.product?.price || 0) * item.quantity), 0);
  
  const totalWeight = items.reduce((sum, item) => 
    sum + ((item.product?.weight || 0) * item.quantity), 0);
  
  return {
    ...kit,
    items,
    totalPrice,
    totalWeight
  };
};
