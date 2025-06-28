import { ButtonVariant } from '@/components/ui/button';
import { Feature } from '@/types/landing-pages-types/feature-section.types';
import { BookOpen, Calendar, CheckCircle, Users } from 'lucide-react';

// Navigation links configuration
export const NAVIGATION_LINKS = [
	{
		href: '/features',
		label: 'Features',
	},
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/pricing',
		label: 'Pricing',
	},
	{
		href: '/contact',
		label: 'Contact',
	},
];

// Auth buttons configuration
export const AUTH_BUTTONS = [
	{
		href: '/login',
		label: 'Login',
		variant: ButtonVariant.GHOST,
	},
	{
		href: '/signup',
		label: 'Sign Up',
		variant: ButtonVariant.DEFAULT,
	},
];

// Hero section configuration

export const DEFAULT_FEATURES: Array<Feature> = [
	{
		title: 'Comprehensive Question Bank',
		description: 'Access thousands of past questions from JAMB, WAEC, NECO, and more.',
		icon: BookOpen,
	},
	{
		title: 'Personalized Study Plans',
		description: 'Create custom study schedules based on your exam timeline.',
		icon: Calendar,
	},
	{
		title: 'Performance Analytics',
		description: 'Track your progress and identify areas for improvement.',
		icon: CheckCircle,
	},
	{
		title: 'Study Community',
		description: 'Connect with other students to collaborate and share knowledge.',
		icon: Users,
	},
];

