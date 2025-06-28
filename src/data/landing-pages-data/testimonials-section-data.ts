import { Testimonial } from '@/types/landing-pages-types/testimonials-section.types';

/**
 * Section header text constants
 */
export const SECTION_TITLE = 'Student Success Stories';
export const SECTION_SUBTITLE = 'Hear from Nigerian students who have transformed their academic journey with EDUapp.';

/**
 * Animation constants
 */
export const CARD_ANIMATION = {
	INITIAL: { opacity: 0, y: 30 },
	ANIMATE: { opacity: 1, y: 0 },
	VIEWPORT: { once: true, margin: '-50px' },
	DELAY: 0.2,
	DURATION: 0.5,
};

export const HEADER_ANIMATION = {
	INITIAL: { opacity: 0, y: 20 },
	ANIMATE: { opacity: 1, y: 0 },
	VIEWPORT: { once: true },
};

/**
 * Default testimonials data
 */
export const DEFAULT_TESTIMONIALS: Array<Testimonial> = [
	{
		id: 1,
		quote: 'EDUapp helped me score 298 in my JAMB. The practice questions were identical to what I saw in the exam.',
		name: 'Chioma Okorie',
		university: 'University of Lagos',
		avatar: 'https://i.pravatar.cc/150?img=32',
	},
	{
		id: 2,
		quote: 'The study plan feature organized my WAEC preparation perfectly. I achieved 7As and 2Bs!',
		name: 'Emmanuel Adeyemi',
		university: 'Covenant University',
		avatar: 'https://i.pravatar.cc/150?img=52',
	},
	{
		id: 3,
		quote: 'As a lecturer, I recommend EDUapp to all my students. The quality of practice materials is exceptional.',
		name: 'Dr. Sarah Ibrahim',
		university: 'University of Ibadan',
		avatar: 'https://i.pravatar.cc/150?img=23',
	},
];

/**
 * Sample testimonials for demo purposes
 */
export const SAMPLE_TESTIMONIALS: Array<Testimonial> = [
	{
		id: 1,
		quote:
			'EDUapp completely transformed how I approach my studies. The personalized learning paths helped me improve my grades significantly, and I finally feel confident about my academic future.',
		name: 'Adaora Okafor',
		university: 'University of Lagos',
		avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9225a12?w=150&h=150&fit=crop&crop=face',
	},
	{
		id: 2,
		quote:
			'The AI-powered study recommendations are incredible. EDUapp understood my learning style and provided exactly what I needed to excel in my engineering courses.',
		name: 'Chidi Emeka',
		university: 'Obafemi Awolowo University',
		avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
	},
	{
		id: 3,
		quote:
			'From struggling student to top of my class - EDUapp made the difference. The interactive content and progress tracking kept me motivated throughout my journey.',
		name: 'Fatima Abdullahi',
		university: 'Ahmadu Bello University',
		avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
	},
];
