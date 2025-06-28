import React from 'react';

import { Clock, BookOpen, TrendingUp } from 'lucide-react';
import StatsCard from './statsCard';
import { STATS_DATA } from '@/data/dashboard/stats-page-data';
import { StatIcon } from '@/types/dashboard/stats.types';

// Local icon mapping for stat icons, now type-safe
const ICONS: Record<StatIcon, React.ComponentType<{ className?: string }>> = {
	[StatIcon.CLOCK]: Clock,
	[StatIcon.BOOK_OPEN]: BookOpen,
	[StatIcon.TRENDING_UP]: TrendingUp,
};

const StatsSection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
			{STATS_DATA.map((stat, index) => {
				const iconComponent = ICONS[stat.icon];
				return (
					<StatsCard
						key={index}
						title={stat.title}
						value={stat.value}
						icon={iconComponent}
					/>
				);
			})}
		</div>
	);
};

export default StatsSection;
