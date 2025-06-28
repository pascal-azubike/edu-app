'use client';
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CardContent, Card } from '../ui/card';
import { TestimonialCardProps, TestimonialsSectionProps } from '@/types/landing-pages-types/testimonials-section.types';
import {
	SECTION_TITLE,
	SECTION_SUBTITLE,
	CARD_ANIMATION,
	HEADER_ANIMATION,
	DEFAULT_TESTIMONIALS,
	SAMPLE_TESTIMONIALS,
} from '@/data/landing-pages-data/testimonials-section-data';

export default function TestimonialsDemo() {
	return (
		<div className="min-h-screen  bg-background">
			<TestimonialsSection testimonials={SAMPLE_TESTIMONIALS} />
		</div>
	);
}

//   Section header component
function TestimonialsHeader() {
	return (
		<motion.div
			initial={HEADER_ANIMATION.INITIAL}
			whileInView={HEADER_ANIMATION.ANIMATE}
			viewport={HEADER_ANIMATION.VIEWPORT}
			transition={{ duration: 0.5 }}
			className="max-w-3xl mx-auto text-center mb-12">
			<h2 className="text-3xl md:text-4xl font-bold mb-4  text-foreground">{SECTION_TITLE}</h2>
			<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{SECTION_SUBTITLE}</p>
		</motion.div>
	);
}

//   Individual testimonial card component

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
	// Extracts initials from a full name

	const getInitials = useCallback((fullName: string): string => {
		return fullName
			.split(' ')
			.map((name) => name.charAt(0))
			.join('')
			.substring(0, 2)
			.toUpperCase();
	}, []);

	return (
		<motion.div
			initial={CARD_ANIMATION.INITIAL}
			whileInView={CARD_ANIMATION.ANIMATE}
			viewport={CARD_ANIMATION.VIEWPORT}
			transition={{ delay: index * CARD_ANIMATION.DELAY, duration: CARD_ANIMATION.DURATION }}
			className="h-full">
			<Card className="h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300  border-border bg-card">
				<CardContent className="p-6 h-full flex flex-col">
					{/* Avatar and student info */}
					<div className="flex items-center gap-4 mb-6">
						<Avatar className="h-14 w-14 border-2 border-primary/30">
							<AvatarImage src={testimonial.avatar} alt={`${testimonial.name} avatar`} className="object-cover" />
							<AvatarFallback className=" bg-primary/20  text-primary font-medium text-sm">
								{getInitials(testimonial.name)}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0 flex-1">
							<p className="font-semibold  text-foreground truncate">{testimonial.name}</p>
							<p className="text-sm  text-muted-foreground line-clamp-2">{testimonial.university}</p>
						</div>
					</div>

					{/* Quote content */}
					<div className="relative flex-1">
						<Quote className="absolute -top-2 -left-1  text-primary/30 w-6 h-6 flex-shrink-0" aria-hidden="true" />
						<blockquote className="pl-6 italic  text-muted-foreground leading-relaxed">{testimonial.quote}</blockquote>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}

//   Main testimonials section component

export function TestimonialsSection({ testimonials = DEFAULT_TESTIMONIALS }: TestimonialsSectionProps) {
	return (
		<section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/10 to-background">
			<div className="container mx-auto px-4 md:px-6 max-w-7xl">
				<TestimonialsHeader />

				<div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
