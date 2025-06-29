/* eslint-disable @next/next/no-img-element */
'use client';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/button';
import { BookOpen, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselAspectRatio } from '../ui/carousel';
import {
	AVATAR_ID_OFFSET,
	CAROUSEL_IMAGES,
	FEATURES,
	HERO_BUTTONS,
	STAR_COUNT,
	STAR_RATING,
	STUDENT_AVATARS,
} from '../../data/landing-pages-data/hero-section-data';
import UnderlineWave from '../icons/underlineWave';
import StarIcon from '../icons/StarIcon';

// Main HeroSection Component
const HeroSection = () => {
	return (
		<section
			className={cn('py-20 md:py-24 overflow-hidden', 'bg-gradient-to-br from-background via-primary/5 to-primary/10')}>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
					<div className="flex-1 space-y-8 max-w-2xl">
						<HeroHeading />
						<CTAButtons />
						<SocialProof />
					</div>
					<HeroBAnner />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

// Hero Heading Component
const HeroHeading = () => (
	<div>
		<div className={cn('inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-2', 'bg-primary/10 text-primary')}>
			Nigerias #1 Exam Prep Platform
		</div>
		<h1 className={cn('text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight', 'text-foreground')}>
			Ace Your{' '}
			<span className="text-primary relative inline-block">
				Exams
				<UnderlineWave className="absolute -bottom-1 left-0 w-full h-3 text-primary/20" />
			</span>{' '}
			with Confidence
		</h1>
		<p className={cn('text-xl max-w-xl', 'text-muted-foreground')}>
			Prepare effectively for WAEC, NECO, JAMB, and Post-UTME with tailored lessons, practice tests, and expert guidance
			— trusted by over 10,000 Nigerian students.
		</p>
	</div>
);

// CTA Buttons Component
const CTAButtons = () => (
	<div className="flex flex-col sm:flex-row gap-4 pt-4">
		{HERO_BUTTONS.map((button, index) => (
			<Link href={button.href} key={index}>
				<Button variant={button.variant} size={button.size} className="w-full sm:w-auto group">
					{button.text}
					{button.icon === 'ArrowRight' && (
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					)}
				</Button>
			</Link>
		))}
	</div>
);

// Social Proof Component
const SocialProof = () => (
	<div className="pt-8 flex items-center gap-6">
		<div className="flex -space-x-3">
			{STUDENT_AVATARS.map((i: number) => (
				<div
					key={i}
					className={cn(
						'h-10 w-10 rounded-full flex items-center justify-center overflow-hidden',
						'bg-muted border-2 border-background',
					)}>
					<img
						src={`https://randomuser.me/api/portraits/men/${i + AVATAR_ID_OFFSET}.jpg`}
						alt={`Student ${i}`}
						width={40}
						height={40}
						className="h-full w-full object-cover"
					/>
				</div>
			))}
		</div>
		<div className={cn('text-sm', 'text-muted-foreground')}>
			<span className="font-semibold">Join 10,000+</span> students already mastering their exams
		</div>
	</div>
);

// Carousel Component
const HeroCarouselContent = () => {
	const carouselItems = CAROUSEL_IMAGES.map((image, index) => ({
		content: (
			<Image
				src={image.src}
				alt={image.alt}
				fill
				className="object-cover"
				sizes="(max-width: 768px) 100vw, 50vw"
				priority={index === 0}
			/>
		),
		key: image.src,
	}));

	return (
		<Carousel
			items={carouselItems}
			autoplay={true}
			autoplayDelay={4000}
			showArrows={true}
			showDots={true}
			aspectRatio={CarouselAspectRatio.VIDEO}
		/>
	);
};

// Hero Carousel Container
const HeroBAnner = () => (
	<div className="flex-1 relative">
		{/* Background Glow */}
		<div
			className={cn(
				'absolute -inset-4 rounded-xl blur-xl opacity-70',
				'bg-gradient-to-br from-primary/20 to-secondary/20',
			)}></div>

		<div className={cn('relative rounded-xl overflow-hidden', 'bg-card shadow-xl border border-border')}>
			{/* Live Demo Badge */}
			<div
				className={cn(
					'absolute top-2 right-2 z-20 rounded-full px-3 py-1 text-xs font-medium',
					'bg-background/90 backdrop-blur-sm text-primary border border-border/50',
				)}>
				Live Demo
			</div>

			<HeroCarouselContent />
			<CardFooter />
		</div>

		<FloatingBookIcon />
		<FloatingRatingBadge />
	</div>
);

// Feature List Component
const FeatureList = () => (
	<div className="space-y-3 mb-4">
		{FEATURES.map((feature, index) => (
			<div className="flex items-center gap-2" key={index}>
				<div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
					<CheckCircle className="h-3 w-3 text-primary" />
				</div>
				<span className="text-sm text-muted-foreground">{feature}</span>
			</div>
		))}
	</div>
);

// carousel footer component
const CardFooter = () => (
	<div className={cn('p-5 border-t', 'bg-card border-border')}>
		<div className="flex items-center justify-between mb-4">
			<h3 className="font-medium text-foreground">JAMB Past Questions</h3>
			<span className="bg-green-500/10 text-green-600 text-xs px-2 py-1 rounded-full">2024 Updated</span>
		</div>
		<FeatureList />
		<Button variant={ButtonVariant.GHOST} size={ButtonSize.SM} asChild className="text-primary font-medium p-0">
			<Link href="/login" className="flex items-center">
				Practice Now
				<ChevronRight className="h-4 w-4 ml-1" />
			</Link>
		</Button>
	</div>
);

// Book Icon Component
const FloatingBookIcon = () => (
	<div
		className={cn(
			'absolute -bottom-6 -left-10 h-24 w-24 p-3 hidden lg:block transform rotate-6 animate-float',
			'bg-card rounded-xl shadow-lg',
		)}>
		<div className="h-full w-full bg-primary/10 rounded-lg flex items-center justify-center">
			<BookOpen className="h-10 w-10 text-primary" />
		</div>
	</div>
);

// Rating Badge Component
const FloatingRatingBadge = () => (
	<div
		className={cn(
			'absolute -top-4 -right-6 h-20 w-20 hidden lg:block transform -rotate-12 animate-float',
			'bg-card rounded-xl shadow-lg',
		)}>
		<div className="h-full w-full flex items-center justify-center">
			<div className="text-center">
				<div className="text-xl font-bold text-primary">{STAR_RATING}</div>
				<div className="flex items-center justify-center">
					{Array.from({ length: STAR_COUNT }, (_, i: number) => (
						<StarIcon key={i} className="h-3 w-3 text-yellow-400" />
					))}
				</div>
			</div>
		</div>
	</div>
);
