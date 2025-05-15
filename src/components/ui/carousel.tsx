import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  autoplay?: boolean
  autoplayDelay?: number
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  autoplay?: boolean
  autoplayDelay?: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      autoplay = false,
      autoplayDelay = 5000,
      ...props
    },
    ref
  ) => {
    // Set default options with improved partial visible slides and center alignment
    const defaultOpts = {
      ...opts,
      axis: orientation === "horizontal" ? "x" as const : "y" as const, // Fixed typings here
      dragFree: true, // Enables momentum scrolling
      align: "center", // Centers the active slide
      containScroll: "trimSnaps" as const, // Ensures proper alignment of slides
    }
    
    const [carouselRef, api] = useEmblaCarousel(defaultOpts, plugins)
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [userInteracting, setUserInteracting] = React.useState(false)
    const autoplayTimerRef = React.useRef<NodeJS.Timeout | null>(null)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    // Setup autoplay functionality
    const startAutoplay = React.useCallback(() => {
      if (!autoplay || !api || userInteracting) return
      
      // Clear any existing timer
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
      
      // Start a new timer for autoplay
      autoplayTimerRef.current = setInterval(() => {
        if (!userInteracting) {
          api.scrollNext()
        }
      }, autoplayDelay)
    }, [api, autoplay, autoplayDelay, userInteracting])
    
    // Handle user interaction with the carousel
    const handlePointerDown = React.useCallback(() => {
      setUserInteracting(true)
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }, [])
    
    const handlePointerUp = React.useCallback(() => {
      setUserInteracting(false)
      // Restart autoplay after interaction
      startAutoplay()
    }, [startAutoplay])

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])
    
    // Set up autoplay and handle user interaction
    React.useEffect(() => {
      if (!api) return
      
      // Start autoplay when component mounts
      startAutoplay()
      
      // Event listeners for user interaction
      api.on("pointerDown", handlePointerDown)
      api.on("pointerUp", handlePointerUp)
      
      return () => {
        if (autoplayTimerRef.current) {
          clearInterval(autoplayTimerRef.current)
        }
        api.off("pointerDown", handlePointerDown)
        api.off("pointerUp", handlePointerUp)
      }
    }, [api, startAutoplay, handlePointerDown, handlePointerUp])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts: defaultOpts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          autoplay,
          autoplayDelay,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          "scroll-smooth",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        // Add transition effect for items
        "transition-opacity duration-300 ease-in-out",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? ""
          : "rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Anterior</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        orientation === "horizontal" 
          ? "" 
          : "rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Próximo</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
