import LandingFooter from '@/components/landing/LandingFooter';
import MainNavigation from '@/components/landingNavbar';
import { ReactNode } from 'react';

const LandingPage = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<MainNavigation />
			<main className="flex-1">{children}</main>
			<LandingFooter />
		</div>
	);
};

export default LandingPage;
