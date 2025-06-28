import ExamTypesSection from '@/components/landing/examTypesSection';
import FeaturesSection from '@/components/landing/featureSection';
import HeroSection from '@/components/landing/heroSection';
import PreviewTabsSection from '@/components/landing/previewTabsSection';
import SimpleStatsSection from '@/components/landing/simpleStatsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { DEFAULT_TESTIMONIALS } from '@/data/landing-pages-data/testimonials-section-data';

const LandingPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<HeroSection />
				<FeaturesSection />
				<SimpleStatsSection />
				<ExamTypesSection />
				<PreviewTabsSection />
				<TestimonialsSection testimonials={DEFAULT_TESTIMONIALS} />
			</main>
		</div>
	);
};

export default LandingPage;
