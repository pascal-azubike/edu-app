'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { DASHBOARD_LINKS } from '@/lib/urls';
import {
	Home,
	FileText,
	BarChart3,
	BookCheck,
	Users,
	Settings,
	HelpCircle,
	ChevronDown,
	ChevronUp,
	GraduationCap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ICONS = {
	home: Home,
	fileText: FileText,
	barChart3: BarChart3,
	bookCheck: BookCheck,
	users: Users,
	settings: Settings,
	helpCircle: HelpCircle,
	graduationCap: GraduationCap,
};

interface SidebarLink {
	name: string;
	href: string;
	icon: keyof typeof ICONS;
	subLinks?: Array<SidebarLink>;
}

// Animation easing for sublink transitions
const EASE_IN = 0.4;
const EASE_OUT = 0.2;
const SUBLINK_EASE: [number, number, number, number] = [EASE_IN, 0, EASE_OUT, 1];

interface SidebarLinksProps {
	collapsed: boolean;
	expandedSections: Array<string>;
	toggleSection: (sectionName: string) => void;
}

export default function SidebarLinks({ collapsed, expandedSections, toggleSection }: SidebarLinksProps) {
	const pathname = usePathname();
	return (
		<nav className="flex-1 space-y-2">
			{(DASHBOARD_LINKS as Array<SidebarLink>).map((link) => {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				const IconComponent = ICONS[link.icon];
				const isActive = pathname === link.href;
				const hasActiveSubLink =
					Array.isArray(link.subLinks) && link.subLinks.some((subLink) => pathname === subLink.href);
				const isExpanded = expandedSections.includes(link.name);
				const hasSubLinks = Array.isArray(link.subLinks) && link.subLinks.length > 0;

				return (
					<div key={link.name}>
						<div className="flex items-center">
							<Link
								href={link.href}
								className={cn(
									'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors flex-1',
									isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground',
									collapsed && 'justify-center px-3',
								)}
								aria-current={isActive ? 'page' : undefined}>
								<IconComponent className={cn('h-5 w-5', collapsed ? 'mx-0' : 'mr-3', 'text-inherit')} />
								{!collapsed && <span className="truncate">{link.name}</span>}
							</Link>
							{!collapsed && hasSubLinks && (
								<button
									onClick={() => toggleSection(link.name)}
									className={cn(
										'p-1 rounded hover:bg-accent ml-1',
										hasActiveSubLink && 'bg-primary text-primary-foreground',
									)}
									aria-label={isExpanded ? 'Collapse section' : 'Expand section'}>
									{isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
								</button>
							)}
						</div>
						<AnimatePresence initial={false}>
							{!collapsed && hasSubLinks && isExpanded && (
								<motion.div
									key="subLinks"
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.25, ease: SUBLINK_EASE }}
									className="ml-8 mt-1 space-y-1 overflow-hidden">
									{link.subLinks?.map((subLink) => {
										// eslint-disable-next-line @typescript-eslint/naming-convention
										const SubIconComponent = ICONS[subLink.icon];
										const isSubActive = pathname === subLink.href;
										return (
											<Link
												key={subLink.name}
												href={subLink.href}
												className={cn(
													'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
													isSubActive
														? 'bg-primary text-primary-foreground'
														: 'hover:bg-accent hover:text-accent-foreground',
												)}>
												<SubIconComponent className="h-4 w-4 mr-2 text-inherit" />
												<span className="truncate">{subLink.name}</span>
											</Link>
										);
									})}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			})}
		</nav>
	);
}
