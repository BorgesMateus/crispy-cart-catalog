
import React from 'react';
import { Product } from '@/types/products';
import ProductCard from './ProductCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  description?: string;
  showFeatured?: boolean;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title, 
  products,
  description,
  showFeatured = true
}) => {
  if (products.length === 0 || !showFeatured) return null;
  
  return (
    <div className="mt-6 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: products.length > 3,
          containScroll: "trimSnaps"
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map(product => (
            <CarouselItem 
              key={product.id} 
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-2">
          <CarouselPrevious className="relative left-0 right-auto -translate-y-0 translate-x-0" />
          <CarouselNext className="relative right-0 left-auto -translate-y-0 translate-x-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
