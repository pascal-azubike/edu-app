export interface Feature {
	title: string;
	description: string;
	icon: React.ComponentType<{ className?: string }>;
}

export interface FeaturesSectionProps {
	features?: Array<Feature>;
}
