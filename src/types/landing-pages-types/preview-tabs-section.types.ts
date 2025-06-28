// Types for the Preview Tabs Section component

export interface Feature {
	text: string;
}

export interface TabData {
	value: string;
	label: string;
	title: string;
	description: string;
	imageUrl: string;
	imageAlt: string;
	features: Array<Feature>;
	buttonText: string;
	buttonLink: string;
}

export interface PreviewTabsSectionProps {
	onPracticeClick?: (topic: string) => void;
	tabsData?: Array<TabData>;
}

export interface TabContentProps {
	tabData: TabData;
}

export interface TabImageProps {
	imageUrl: string;
	imageAlt: string;
}

export interface TabDetailsProps {
	tabData: TabData;
}

export interface TabHeaderProps {
	title: string;
	description: string;
}

export interface FeaturesListProps {
	features: Array<Feature>;
}

export interface FeatureItemProps {
	text: string;
}

export interface TabActionProps {
	buttonText: string;
	buttonLink: string;
}
