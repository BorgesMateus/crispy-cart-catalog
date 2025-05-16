
import { Kit } from '@/types/products';
import { PRODUCTS } from './products';

// Sample kit data
export const KITS: Kit[] = [
  {
    id: 'kit1',
    name: 'Kit Café da Manhã',
    description: 'Um café da manhã completo com sabor de padaria! Pão francês, rosca doce, pão de queijo premium, broa, biscoito meia lua e enroladinho de queijo. Ideal para consumo familiar ou revenda.',
    image: '/kits/kit-cafe-manha.jpg',
    items: [
      { productId: 'PAO-FRANCES', quantity: 1 }, // Pão Francês 6 horas 70g
      { productId: 'ROSCA-HUNGARA', quantity: 1 }, // Rosca tipo húngara
      { productId: 'PAO-QUEIJO-PREMIUM', quantity: 2 }, // 2x Pão de Queijo Premium
      { productId: 'ENROLADINHO-QUEIJO', quantity: 1 }, // Enroladinho de queijo
      { productId: 'BISCOITO-MEIA-LUA', quantity: 1 }, // Biscoito GG meia lua
      { productId: 'BROA-DOCE', quantity: 1 }, // Broa doce
    ]
  },
  {
    id: 'kit2',
    name: 'Kit Festinha 30 Pessoas',
    description: 'Serve até 30 convidados com variedade e praticidade! Salgadinhos tradicionais + um docinho delicioso. Agora com nosso creme de alho OMG de ervas finas para acompanhar com muito sabor!',
    image: '/kits/kit-festinha.jpg',
    items: [
      { productId: 'COXINHA-TRAD', quantity: 1 }, // Coxinha tradicional
      { productId: 'CROQUETE-QUEIJO', quantity: 1 }, // Croquete de queijo
      { productId: 'RISOLE-CARNE', quantity: 1 }, // Risole de carne
      { productId: 'ENROLADINHO-SALSICHA', quantity: 1 }, // Enroladinho de salsicha
      { productId: 'KIBE-REQUEIJAO', quantity: 1 }, // Kibe com requeijão
      { productId: 'MINI-CHURROS-DOCE', quantity: 1 }, // Mini churros de doce de leite
      { productId: 'CREME-ALHO-ERVAS', quantity: 1 }, // Creme de alho OMG ervas finas
    ]
  },
  {
    id: 'kit3',
    name: 'Kit Festinha 50 Pessoas',
    description: 'Um kit completo para quem vai receber até 50 convidados! Salgadinhos variados + dois potes do creme de alho OMG, um com ervas finas e outro com pimenta calabresa, pra dar aquele toque especial no seu evento.',
    image: '/kits/kit-degustacao.jpg',
    items: [
      { productId: 'COXINHA-TRAD', quantity: 1 }, // Coxinha tradicional
      { productId: 'CROQUETE-QUEIJO', quantity: 1 }, // Croquete de queijo 
      { productId: 'RISOLE-CARNE', quantity: 1 }, // Risole de carne
      { productId: 'ENROLADINHO-SALSICHA', quantity: 1 }, // Enroladinho de salsicha
      { productId: 'KIBE-REQUEIJAO', quantity: 1 }, // Kibe com requeijão
      { productId: 'RISOLE-CALABRESA', quantity: 1 }, // Risole de calabresa
      { productId: 'COXINHA-CATUPIRY', quantity: 1 }, // Coxinha com catupiry
      { productId: 'RISOLE-NAPOLITANO', quantity: 1 }, // Risole napolitano
      { productId: 'MINI-CHURROS-CHOCOLATE', quantity: 1 }, // Mini churros de chocolate
      { productId: 'MINI-CHURROS-DOCE', quantity: 1 }, // Mini churros de doce de leite
      { productId: 'CREME-ALHO-ERVAS', quantity: 1 }, // Creme de alho OMG ervas finas
      { productId: 'CREME-ALHO-CALABRESA', quantity: 1 }, // Creme de alho OMG pimenta calabresa
    ]
  },
  {
    id: 'kit4',
    name: 'Kit Degustação',
    description: 'O combo ideal para quem quer experimentar variedade com muito sabor! Uma combinação dos nossos melhores pães, biscoitos e o famoso creme de alho OMG de ervas finas. Ideal para primeira compra ou clientes curiosos!',
    image: '/kits/kit-degustacao.jpg',
    items: [
      { productId: 'PAO-QUEIJO-GM', quantity: 2 }, // 2x Pão de Queijo GM 25g
      { productId: 'PAO-TAPIOCA', quantity: 1 }, // Pão de tapioca com queijo
      { productId: 'BISCOITO-QUEIJO-SF', quantity: 1 }, // Biscoito de queijo SF
      { productId: 'QUEBRADOR-QUEIJO', quantity: 1 }, // Quebrador de queijo
      { productId: 'PALITO-QUEIJO', quantity: 1 }, // Palito de queijo gourmet
      { productId: 'CREME-ALHO-ERVAS', quantity: 1 }, // Creme de alho OMG ervas finas
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
