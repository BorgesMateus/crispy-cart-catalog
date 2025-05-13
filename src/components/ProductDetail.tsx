
import React from 'react';
import { Product } from '@/types/products';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductImageCarousel from './ProductImageCarousel';
import { Package, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {product.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-2">
          <ProductImageCarousel 
            images={product.images} 
            productName={product.name} 
            className="aspect-video rounded-lg overflow-hidden"
          />
        </div>
        
        <div className="mt-4 space-y-4">
          {product.extraInfo?.usageTips && (
            <div>
              <h3 className="text-sm font-medium text-gray-700">Dicas de uso:</h3>
              <p className="text-sm text-gray-600 mt-1">{product.extraInfo.usageTips}</p>
            </div>
          )}
          
          {product.extraInfo?.ingredients && (
            <div>
              <h3 className="text-sm font-medium text-gray-700">Ingredientes:</h3>
              <p className="text-sm text-gray-600 mt-1">{product.extraInfo.ingredients}</p>
            </div>
          )}
          
          {product.extraInfo?.funFact && (
            <div>
              <h3 className="text-sm font-medium text-gray-700">Você sabia?</h3>
              <p className="text-sm text-gray-600 mt-1">{product.extraInfo.funFact}</p>
            </div>
          )}
          
          {/* If no extraInfo at all, show a message */}
          {!product.extraInfo?.usageTips && 
           !product.extraInfo?.ingredients && 
           !product.extraInfo?.funFact && (
            <div>
              <p className="text-sm text-gray-500">Informações adicionais sobre este produto estarão disponíveis em breve.</p>
            </div>
          )}
          
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center">
              <Scale className="h-3 w-3 mr-1" />
              {product.weight.toFixed(2)}kg
            </span>
            {product.isPackage && (
              <span className="flex items-center">
                <Package className="h-3 w-3 mr-1" />
                Pacote
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-red-600">
              R$ {product.price.toFixed(2)}
            </span>
            <Button 
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700"
            >
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
