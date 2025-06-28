'use client';
import { useCallback, useEffect, useState, ReactNode } from 'react';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Carousel = ({
	items,
	className,
	showArrows = true,
	showDots = true,
	autoplay = true,
	autoplayDelay = DEFAULT_AUTOPLAY_DELAY,
	aspectRatio = CarouselAspectRatio.VIDEO,
}: CarouselProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'center',
			skipSnaps: false,
			dragFree: false,
		},
		autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : [],
	);

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);

	const scrollPrev = useCallback(() => {
		if (emblaApi !== undefined && emblaApi !== null) {
			emblaApi.scrollPrev();
		}
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi !== undefined && emblaApi !== null) {
			emblaApi.scrollNext();
		}
	}, [emblaApi]);

	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi !== undefined && emblaApi !== null) {
				emblaApi.scrollTo(index);
			}
		},
		[emblaApi],
	);

	const onInit = useCallback((api: NonNullable<UseEmblaCarouselType[1]>) => {
		setScrollSnaps(api.scrollSnapList());
	}, []);

	const onSelect = useCallback((api: NonNullable<UseEmblaCarouselType[1]>) => {
		setSelectedIndex(api.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (emblaApi === undefined || emblaApi === null) {
			return;
		}

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);

	const aspectRatioClass = {
		[CarouselAspectRatio.VIDEO]: 'aspect-video',
		[CarouselAspectRatio.SQUARE]: 'aspect-square',
		[CarouselAspectRatio.AUTO]: '',
	}[aspectRatio];

	return (
		<div className={cn('relative group', className)}>
			{/* Carousel viewport */}
			<div className="overflow-hidden rounded-lg" ref={emblaRef}>
				<div className="flex">
					{items.map((item, index) => (
						<div className="flex-none w-full relative" key={item.key ?? index}>
							<div className={aspectRatioClass}>{item.content}</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation arrows */}
			{showArrows && items.length > 1 && (
				<>
					<button onClick={scrollPrev} className={cn(ARROW_BUTTON_CLASSES, 'left-4')} aria-label="Previous slide">
						<ChevronLeft className="h-5 w-5" />
					</button>

					<button onClick={scrollNext} className={cn(ARROW_BUTTON_CLASSES, 'right-4')} aria-label="Next slide">
						<ChevronRight className="h-5 w-5" />
					</button>
				</>
			)}

			{/* Pagination dots */}
			{showDots && items.length > 1 && (
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							onClick={() => scrollTo(index)}
							className={cn(
								'w-2 h-2 rounded-full transition-colors duration-200',
								index === selectedIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75',
							)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

// Types
export enum CarouselAspectRatio {
	VIDEO = 'video',
	SQUARE = 'square',
	AUTO = 'auto',
}

export interface CarouselItem {
	content: ReactNode;
	key?: string | number;
}

interface CarouselProps {
	items: Array<CarouselItem>;
	className?: string;
	showArrows?: boolean;
	showDots?: boolean;
	autoplay?: boolean;
	autoplayDelay?: number;
	aspectRatio?: CarouselAspectRatio;
}

// Constants
const DEFAULT_AUTOPLAY_DELAY = 4000;
const ARROW_BUTTON_CLASSES =
	'absolute top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10';
