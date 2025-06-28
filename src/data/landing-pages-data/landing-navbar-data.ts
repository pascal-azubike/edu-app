import { ButtonVariant } from "@/components/ui/button";

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
