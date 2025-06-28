'use client';
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';
import {
	PreviewTabsSectionProps,
	TabContentProps,
	TabImageProps,
	TabDetailsProps,
	TabHeaderProps,
	FeaturesListProps,
	FeatureItemProps,
	TabActionProps,
} from '@/types/landing-pages-types/preview-tabs-section.types';
import {
	DEFAULT_TABS_DATA,
	SECTION_TITLE,
	SECTION_SUBTITLE,
	DEFAULT_TAB_VALUE,
} from '@/data/landing-pages-data/preview-tabs-section-data';
import Image from 'next/image';

const PreviewTabsSection = ({ tabsData = DEFAULT_TABS_DATA }: PreviewTabsSectionProps) => {
	const handleTabChange = useCallback(() => {
		// Handle tab change
	}, []);

	return (
		<section className="py-20 bg-background">
			<div className="edu-container">
				<SectionHeader />

				<Tabs
					defaultValue={tabsData[0]?.value ?? DEFAULT_TAB_VALUE}
					className="max-w-4xl mx-auto"
					onValueChange={handleTabChange}>
					<TabsList className="grid w-full grid-cols-3 mb-8">
						{tabsData.map((tab) => (
							<TabsTrigger key={tab.value} value={tab.value}>
								{tab.label}
							</TabsTrigger>
						))}
					</TabsList>

					{tabsData.map((tab) => (
						<TabContent key={tab.value} tabData={tab} />
					))}
				</Tabs>
			</div>
		</section>
	);
};

const SectionHeader = () => {
	return (
		<div className="max-w-3xl mx-auto text-center mb-12">
			<h2 className="section-title">{SECTION_TITLE}</h2>
			<p className="section-subtitle">{SECTION_SUBTITLE}</p>
		</div>
	);
};

const TabContent = ({ tabData }: TabContentProps) => {
	return (
		<TabsContent value={tabData.value} className="border border-border rounded-xl shadow-sm overflow-hidden bg-card">
			<TabImage imageUrl={tabData.imageUrl} imageAlt={tabData.imageAlt} />
			<TabDetails tabData={tabData} />
		</TabsContent>
	);
};

const TabImage = ({ imageUrl, imageAlt }: TabImageProps) => {
	return (
		<div className="p-1">
			<Image src={imageUrl} alt={imageAlt} className="w-full h-auto rounded-lg" height={1000} width={1000} />
		</div>
	);
};

const TabDetails = ({ tabData }: TabDetailsProps) => {
	return (
		<div className="p-6 bg-muted/30">
			<TabHeader title={tabData.title} description={tabData.description} />
			<FeaturesList features={tabData.features} />
			<TabAction buttonText={tabData.buttonText} buttonLink={tabData.buttonLink} />
		</div>
	);
};

const TabHeader = ({ title, description }: TabHeaderProps) => {
	return (
		<>
			<h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
			<p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
		</>
	);
};

const FeaturesList = ({ features }: FeaturesListProps) => {
	return (
		<ul className="space-y-2">
			{features.map((feature, index) => (
				<FeatureItem key={`feature-${index}`} text={feature.text} />
			))}
		</ul>
	);
};

const FeatureItem = ({ text }: FeatureItemProps) => {
	return (
		<li className="flex items-center">
			<CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
			<span className="text-card-foreground">{text}</span>
		</li>
	);
};

const TabAction = ({ buttonText, buttonLink }: TabActionProps) => {
	const handleClick = useCallback(() => {
		// In a real app, you would use your router here
		window.location.href = buttonLink;
	}, [buttonLink]);

	return (
		<div className="mt-6">
			<Button onClick={handleClick} className="btn-primary">
				{buttonText}
			</Button>
		</div>
	);
};

export default PreviewTabsSection;
