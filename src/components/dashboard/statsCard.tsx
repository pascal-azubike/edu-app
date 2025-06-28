'use client';

import React, { createElement } from 'react';
import clsx from 'clsx';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { StatsCardProps } from '@/types/dashboard/stats.types';
import { STATS_CARD_CONFIG } from '@/lib/constants/dashboard';

function StatsCard({ title, value, icon: iconComponent, isLoading = false, error }: StatsCardProps) {
	if (isLoading === true) {
		// Loading skeleton UI
		return (
			<Card className="transition-all duration-200">
				<CardContent className="pt-6">
					<div className="flex items-center justify-between">
						<div className="flex-1">
							<Skeleton className="h-4 w-20 mb-2" />
							<Skeleton className="h-8 w-16" />
						</div>
						<Skeleton className={`${STATS_CARD_CONFIG.ICON_CONTAINER_SIZE} rounded-full`} />
					</div>
				</CardContent>
			</Card>
		);
	}

	if (error !== null && error !== undefined) {
		// Error state UI
		return (
			<Card className="transition-all duration-200 border-destructive/20">
				<CardContent className="pt-6">
					<div className="flex items-center justify-between">
						<div className="flex-1">
							<p className="text-sm font-medium text-destructive mb-1">{title}</p>
							<p className="text-sm text-muted-foreground">Error loading data</p>
						</div>
						<div
							className={`${STATS_CARD_CONFIG.ICON_CONTAINER_SIZE} bg-destructive/10 rounded-full flex items-center justify-center`}>
							<AlertCircle className={`${STATS_CARD_CONFIG.ICON_SIZE} text-destructive`} />
						</div>
					</div>
				</CardContent>
			</Card>
		);
	}

	// Card and icon container class names
	const cardClassName = clsx('transition-all', STATS_CARD_CONFIG.TRANSITION_DURATION);
	const iconContainerClassName = clsx(
		STATS_CARD_CONFIG.ICON_CONTAINER_SIZE,
		'bg-primary/10 rounded-full flex items-center justify-center transition-colors',
	);

	return (
		<Card className={cardClassName}>
			<CardContent className="pt-6">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
						<p className="text-2xl font-bold">{value}</p>
					</div>
					<div className={iconContainerClassName}>
						{createElement(iconComponent, { className: `${STATS_CARD_CONFIG.ICON_SIZE} text-primary` })}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default StatsCard;
