import { LucideIcon } from 'lucide-react';

export interface FooterLink {
	id: string;
	label: string;
	href: string;
	external?: boolean;
}

export interface FooterSection {
	id: string;
	title: string;
	links: Array<FooterLink>;
}

export interface SocialLink {
	id: string;
	platform: string;
	href: string;
	icon: LucideIcon;
	ariaLabel: string;
}

export interface FooterSectionProps {
	section: FooterSection;
}

export interface SocialLinksProps {
	socialLinks: Array<SocialLink>;
}
