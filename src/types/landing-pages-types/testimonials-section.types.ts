/**
 * Type definitions for the Testimonials Section
 */

/**
 * Represents a single testimonial from a student
 */
export interface Testimonial {
	id: number;
	quote: string;
	name: string;
	university: string;
	avatar: string;
}

/**
 * Props for the TestimonialCard component
 */
export interface TestimonialCardProps {
	testimonial: Testimonial;
	index: number;
}

/**
 * Props for the TestimonialsSection component
 */
export interface TestimonialsSectionProps {
	testimonials: Array<Testimonial>;
}
