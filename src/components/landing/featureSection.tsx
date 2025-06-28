"use client"
import { Feature, FeaturesSectionProps } from '@/types/landing-pages-types/feature-section.types';
import { DEFAULT_FEATURES } from '@/data/landing-pages-data/features-section-data';

const FeaturesSection = ({ features = DEFAULT_FEATURES }: FeaturesSectionProps) => {
	return (
		<section className="py-20 bg-muted/50">
			<div className="edu-container">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="section-title">Everything You Need to Succeed</h2>
					<p className="section-subtitle">Our comprehensive platform is designed specifically for Nigerian students.</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature) => (
						<FeatureCard key={feature.title} feature={feature} />
					))}
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
	const ICON_COMPONENT = feature.icon;

	return (
		<div className="feature-card group bg-background">
			<div className="p-6">
				<div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
					<ICON_COMPONENT className="h-6 w-6 text-primary" />
				</div>
				<h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
				<p className="text-muted-foreground leading-relaxed">{feature.description}</p>
			</div>
		</div>
	);
};

export default FeaturesSection;
