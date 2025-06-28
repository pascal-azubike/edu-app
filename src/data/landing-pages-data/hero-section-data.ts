import { ButtonSize, ButtonVariant } from '@/components/ui/button';

export const CAROUSEL_IMAGES = [
	{
		src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
		alt: 'Study materials',
	},
	{
		src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
		alt: 'Student studying with laptop',
	},
	{
		src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
		alt: 'Students collaborating',
	},
];

export const FEATURES = ['10,000+ Questions & Answers', 'Subject-specific Test Banks'];

export const HERO_BUTTONS = [
	{
		href: '/signup',
		text: 'Start Your Success Journey',
		variant: ButtonVariant.DEFAULT,
		icon: 'ArrowRight',
		size: ButtonSize.LG,
	},
	{
		href: '/past-questions',
		text: 'Browse Past Exam Questions',
		variant: ButtonVariant.OUTLINE,
		size: ButtonSize.LG,
		icon: null,
	},
];

export const STUDENT_AVATARS = Array.from({ length: 4 }, (_, i) => i + 1);

export const STAR_RATING = 4.9;

export const STAR_COUNT = 5;

export const AVATAR_ID_OFFSET = 20;
