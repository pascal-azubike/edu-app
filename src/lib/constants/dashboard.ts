import { StatTitle } from '@/types/dashboard/stats.types';

export const DASHBOARD_ROUTES = {
	CALENDAR: '/calendar',
	STUDY_FLOW: '/study-flow',
	PERFORMANCE: '/performance',
} as const;

export const STAT_NAVIGATION_MAP: Record<StatTitle, string | undefined> = {
	[StatTitle.STUDY_TIME]: DASHBOARD_ROUTES.CALENDAR,
	[StatTitle.SUBJECT_COVERED]: DASHBOARD_ROUTES.STUDY_FLOW,
	[StatTitle.OVERALL_SCORE]: DASHBOARD_ROUTES.PERFORMANCE,
	[StatTitle.AVERAGE_SCORE]: DASHBOARD_ROUTES.PERFORMANCE,
} as const;

export const DASHBOARD_GRID_CONFIG = {
	MOBILE: 'grid-cols-1',
	TABLET: 'md:grid-cols-2',
	DESKTOP: 'lg:grid-cols-4',
	GAP: 'gap-5',
	MARGIN_BOTTOM: 'mb-8',
} as const;

export const STATS_CARD_CONFIG = {
	ICON_SIZE: 'h-5 w-5',
	ICON_CONTAINER_SIZE: 'h-10 w-10',
	TRANSITION_DURATION: 'duration-200',
	HOVER_SCALE: 'hover:scale-105',
	HOVER_SHADOW: 'hover:shadow-md',
	HOVER_BORDER: 'hover:border-primary/20',
} as const; 