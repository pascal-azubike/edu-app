"use client"
import { DEFAULT_STATS } from '@/data/landing-pages-data/simple-stats-data';
import { SimpleStatsSectionProps, Stat } from '@/types/landing-pages-types/simple-stats-types';

const SimpleStatsSection = ({ stats = DEFAULT_STATS }: SimpleStatsSectionProps) => {
	return (
		<section className="py-12 bg-card border-b border-border">
			<div className="edu-container">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index: number) => (
						<StatCard key={`${stat.label}-${index}`} stat={stat} />
					))}
				</div>
			</div>
		</section>
	);
};

const StatCard = ({ stat }: { stat: Stat }) => {
	return (
		<div className="text-center group">
			<div className="text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
				{stat.value}
			</div>
			<p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
		</div>
	);
};

export default SimpleStatsSection;
