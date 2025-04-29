
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { toast } from '@/components/ui/sonner';
import { STORE_WHATSAPP } from '../data/products';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    cartTotal, 
    isCartOpen, 
    closeCart, 
    itemsCount,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    freeShippingRemaining 
  } = useCart();

  const handleFinalizeOrder = () => {
    if (cartItems.length === 0) {
      toast.error('Seu carrinho está vazio!', {
        description: 'Adicione produtos antes de finalizar o pedido.'
      });
      return;
    }

    // Generate WhatsApp message with order details
    const cartItemsText = cartItems
      .map(item => `${item.quantity}x ${item.product.name} - R$${(item.product.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const message = `*Novo Pedido*\n\n*Produtos:*\n${cartItemsText}\n\n*Total:* R$${cartTotal.toFixed(2)}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Cart button with badge */}
      <Button 
        onClick={closeCart}
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden bg-white rounded-full shadow-md"
        aria-label="Close cart"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* Cart overlay/sidebar */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      <aside 
        className={`fixed top-0 right-0 z-50 h-screen w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 overflow-hidden flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 bg-catalog-primary text-white flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Carrinho ({itemsCount})
          </h2>
          <Button variant="ghost" size="icon" onClick={closeCart} className="text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-grow overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="h-16 w-16 mb-4 opacity-20" />
              <p className="text-lg">Seu carrinho está vazio</p>
              <p className="text-sm">Adicione produtos para continuar</p>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.product.id} className="mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between">
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-catalog-primary font-semibold">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-gray-500 hover:text-red-500"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <Button
                      onClick={() => decreaseQuantity(item.product.id)}
                      variant="outline"
                      size="icon"
                      className="rounded-full h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2 font-medium w-6 text-center">{item.quantity}</span>
                    <Button
                      onClick={() => addToCart(item.product)}
                      variant="outline"
                      size="icon"
                      className="rounded-full h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    
                    <span className="ml-auto font-semibold">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Free shipping progress */}
        {freeShippingRemaining > 0 && cartItems.length > 0 && (
          <div className="px-4 py-2 bg-gray-50">
            <p className="text-sm mb-1">
              Faltam <span className="font-bold text-catalog-primary">R$ {freeShippingRemaining.toFixed(2)}</span> para frete grátis!
            </p>
            <Progress 
              value={(1 - freeShippingRemaining / 50) * 100} 
              className="h-2 bg-gray-200"
            />
          </div>
        )}

        {/* Cart total and checkout button */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Subtotal:</span>
            <span className="font-bold">R$ {cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Entrega:</span>
            <span className="font-medium">
              {freeShippingRemaining <= 0 ? (
                <span className="text-green-600">Grátis</span>
              ) : (
                'A calcular'
              )}
            </span>
          </div>
          <Separator className="mb-4" />
          <div className="flex justify-between mb-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">R$ {cartTotal.toFixed(2)}</span>
          </div>
          <Button 
            className="w-full bg-catalog-primary hover:bg-catalog-primary/90"
            size="lg"
            onClick={handleFinalizeOrder}
          >
            Finalizar Pedido
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
