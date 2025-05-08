
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
  className?: string;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
  productName,
  className
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.svg"; // Default image if product image fails to load
  };

  if (images.length === 0) {
    return (
      <div className={cn("relative aspect-square overflow-hidden bg-gray-100", className)}>
        <img
          src="/placeholder.svg"
          alt={productName}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={cn("relative aspect-square overflow-hidden bg-gray-100", className)}>
        <img
          src={images[0]}
          alt={productName}
          onError={handleImageError}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  return (
    <Carousel className={cn("w-full", className)}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="aspect-square">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={image}
                alt={`${productName} - ${index + 1}`}
                onError={handleImageError}
                className="object-cover w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2" />
    </Carousel>
  );
};

export default ProductImageCarousel;
