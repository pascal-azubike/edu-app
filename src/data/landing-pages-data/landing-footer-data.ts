import { FooterSection, SocialLink } from '@/types/landing-pages-types/landing-footer.types';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const FOOTER_SECTIONS: Array<FooterSection> = [
	{
		id: 'company',
		title: 'Company',
		links: [
			{ id: 'about', label: 'About Us', href: '/about' },
			{ id: 'team', label: 'Our Team', href: '/team' },
			{ id: 'careers', label: 'Careers', href: '/careers' },
			{ id: 'press', label: 'Press Kit', href: '/press' },
		],
	},
	{
		id: 'resources',
		title: 'Resources',
		links: [
			{ id: 'blog', label: 'Blog', href: '/blog' },
			{ id: 'guides', label: 'Study Guides', href: '/guides' },
			{ id: 'faq', label: 'FAQ', href: '/faq' },
			{ id: 'support', label: 'Help Center', href: '/support' },
		],
	},
	{
		id: 'legal',
		title: 'Legal',
		links: [
			{ id: 'terms', label: 'Terms of Service', href: '/terms' },
			{ id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
			{ id: 'cookies', label: 'Cookie Policy', href: '/cookies' },
			{ id: 'data', label: 'Data Protection', href: '/data-protection' },
		],
	},
] as const;

export const SOCIAL_LINKS: Array<SocialLink> = [
	{
		id: 'twitter',
		platform: 'Twitter',
		href: 'https://twitter.com/eduapp_ng',
		icon: Twitter,
		ariaLabel: 'Follow us on Twitter',
	},
	{
		id: 'facebook',
		platform: 'Facebook',
		href: 'https://facebook.com/eduapp.ng',
		icon: Facebook,
		ariaLabel: 'Like us on Facebook',
	},
	{
		id: 'instagram',
		platform: 'Instagram',
		href: 'https://instagram.com/eduapp_ng',
		icon: Instagram,
		ariaLabel: 'Follow us on Instagram',
	},
	{
		id: 'linkedin',
		platform: 'LinkedIn',
		href: 'https://linkedin.com/company/eduapp-ng',
		icon: Linkedin,
		ariaLabel: 'Connect with us on LinkedIn',
	},
] as const;

export const CONTACT_INFO = {
	email: 'hello@eduapp.ng',
	phone: '+234-800-EDUAPP',
	location: 'Lagos, Nigeria',
};

export const BRAND_TAGS = ['AI-Powered', 'Made in Nigeria'];

export const BRAND_DESCRIPTION =
	'Empowering Nigerian students with AI-powered learning tools and personalized educational experiences.';

export const FOOTER_LINKS = {
	accessibility: '/accessibility',
	sitemap: '/sitemap',
};
