
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
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title, 
  products,
  description 
}) => {
  if (products.length === 0) return null;
  
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
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map(product => (
            <CarouselItem key={product.id} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex justify-end gap-2 mt-2">
          <CarouselPrevious className="static transform-none mx-0" />
          <CarouselNext className="static transform-none mx-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
