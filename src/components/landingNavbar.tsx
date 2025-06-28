import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import BrandLogo from './ui/brandLogo';
import { AUTH_BUTTONS, NAVIGATION_LINKS } from '@/data/landing-pages-data/landing-navbar-data';
import { ThemeToggle } from './theme-toggle';

const MainNavigation = () => {
	return (
		<header className={cn('border-b backdrop-blur', 'bg-background/95 supports-[backdrop-filter]:bg-background/60')}>
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
				{/* Left: Logo and navigation links */}
				<div className="mr-4 hidden md:flex">
					<div className="mr-6">
						<BrandLogo />
					</div>
					<nav className="flex items-center space-x-6 text-sm font-medium">
						{NAVIGATION_LINKS.map((link) => (
							<Link key={link.href} href={link.href} className={cn('transition-colors hover:text-foreground/80')}>
								{link.label}
							</Link>
						))}
					</nav>
				</div>

				{/* Middle: Theme toggle */}
				<div className="flex items-center justify-center">
					<ThemeToggle />
				</div>

				{/* Right: Login and signup buttons */}
				<div className="flex items-center justify-end space-x-2">
					{AUTH_BUTTONS.map((button) => (
						<Button key={button.href} asChild variant={button.variant}>
							<Link href={button.href}>{button.label}</Link>
						</Button>
					))}
				</div>
			</div>
		</header>
	);
};

export default MainNavigation;
