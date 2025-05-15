
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
import { useIsMobile } from '@/hooks/use-mobile';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  description?: string;
  showFeatured?: boolean;
  autoplay?: boolean;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title, 
  products,
  description,
  showFeatured = true,
  autoplay = false
}) => {
  const isMobile = useIsMobile();
  
  if (products.length === 0 || !showFeatured) return null;
  
  // Calculate card widths based on screen size
  // Reduced width to allow partial view of next card (Netflix style)
  const cardWidth = isMobile ? 80 : 65; // percentage of container width
  
  return (
    <div className="mt-6 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
      </div>
      
      <div className="relative">
        <Carousel
          opts={{
            align: "center" as const, // Centers slides with proper type
            loop: products.length > 3,
            containScroll: "trimSnaps" as const, // Ensures proper alignment of slides
          }}
          autoplay={autoplay} // Enable autoplay for specific carousels
          autoplayDelay={5000} // 5 seconds delay between slides
          autoplayPauseOnInteraction={true} // Pause on user interaction
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map(product => (
              <CarouselItem 
                key={product.id} 
                className={`pl-2 md:pl-4`}
                style={{ width: `${cardWidth}%` }} // Dynamic width based on screen size
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
        
        {/* Enhanced gradient indicator for scrollability */}
        <div className="absolute right-0 top-0 bottom-0 w-16 h-full bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
