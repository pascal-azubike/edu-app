'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, LucideIcon } from 'lucide-react';

interface FooterLink {
	name: string;
	href: string;
	icon?: LucideIcon;
}

interface FooterSection {
	title: string;
	links: Array<FooterLink>;
}

const FOOTER_LINKS: Array<FooterSection> = [
	{
		title: 'EDUapp',
		links: [
			{ name: 'About Us', href: '/about' },
			{ name: 'Our Team', href: '/team' },
			{ name: 'Careers', href: '/careers' },
			{ name: 'Contact', href: '/contact' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ name: 'Blog', href: '/blog' },
			{ name: 'Study Guides', href: '/study-guides' },
			{ name: 'FAQ', href: '/faq' },
			{ name: 'Support', href: '/support' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ name: 'Terms of Service', href: '/terms' },
			{ name: 'Privacy Policy', href: '/privacy' },
			{ name: 'Cookie Policy', href: '/cookies' },
		],
	},
	{
		title: 'Connect',
		links: [
			{ name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
			{ name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
			{ name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
			{ name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
		],
	},
];

export default function LandingFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full h-full pt-12 pb-16 bg-[#0F172A] flex flex-col justify-start items-center">
			<div className="w-full max-w-[1024px] px-6 flex flex-col justify-start items-start gap-8">
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{FOOTER_LINKS.map((section) => (
						<div key={section.title} className="w-full flex flex-col justify-start items-start gap-4">
							<div className="w-full flex flex-col justify-start items-start">
								<h3 className="w-full text-[#FCFBF8] text-[18px] font-inter font-semibold leading-[28px]">
									{section.title}
								</h3>
							</div>
							<div className="w-full flex flex-col justify-start items-start gap-2">
								{section.links.map((link) => (
									<div key={link.name} className="w-full flex flex-col justify-start items-start">
										<Link
											href={link.href}
											className="flex justify-start items-start text-[#E2E8F0] text-base font-inter font-normal leading-6 hover:text-white transition-colors">
											{link.icon && (
												<span className="flex items-center gap-2">
													<link.icon className="h-4 w-4" />
													{link.name}
												</span>
											)}
											{!link.icon && link.name}
										</Link>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="w-full pt-8 border-t border-[#1E293B] flex flex-col justify-start items-start">
					<div className="w-full pb-[0.75px] flex flex-col justify-start items-center">
						<p className="w-full text-center text-[#94A3B8] text-sm font-inter font-normal leading-[22.75px]">
							© {currentYear} EDUapp. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
