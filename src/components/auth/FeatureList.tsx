'use client';
import { FeatureListProps } from '@/types/auth-types';
import { Check } from 'lucide-react';

export default function FeatureList({ features }: FeatureListProps) {
	return (
		<div className="space-y-4">
			{features.map((feature, index) => (
				<div key={index} className="flex items-start space-x-3">
					<div className="flex-shrink-0 mt-1 p-1 bg-staticWhite/30 rounded-full flex items-center justify-center">
						<Check className="h-4 w-4 text-staticWhite" />
					</div>
					<div>
						<h4 className="text-base font-semibold leading-6 text-staticWhite">{feature.title}</h4>
						<p className="text-sm font-normal leading-[22.75px] text-staticWhite/80">{feature.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}
