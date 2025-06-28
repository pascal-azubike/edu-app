import { StatTitle } from '@/types/dashboard/stats.types';

export const TOP_LEVEL_URLS = {
	home: () => `/`,
};

// export const DASHBOARD_URLS = {
// 	dashboard: () => '/dashboard',
// 	pastQuestions: () => '/dashboard/past-questions',
// 	pastQuestionsJamb: () => '/dashboard/past-questions/jamb',
// 	pastQuestionsWaec: () => '/dashboard/past-questions/waec',
// 	pastQuestionsNeco: () => '/dashboard/past-questions/neco',
// 	questionsAnswered: () => '/dashboard/questions-answered',
// 	studyFlow: () => '/dashboard/study-flow',
// 	community: () => '/dashboard/community',
// 	communityForum: () => '/dashboard/community/forum',
// 	communityEvents: () => '/dashboard/community/events',
// 	admissionsHub: () => '/dashboard/admissions-hub',
// 	settings: () => '/dashboard/settings',
// 	help: () => '/dashboard/help',
// };

export const DASHBOARD_LINKS = [
	{ name: 'Dashboard', href: '/dashboard', icon: 'home' },
	{
		name: 'Past Questions',
		href: '/dashboard/past-questions',
		icon: 'fileText',
		// subLinks: [
		// 	{ name: 'JAMB', href: '/dashboard/past-questions/jamb', icon: 'fileText' },
		// 	{ name: 'WAEC', href: '/dashboard/past-questions/waec', icon: 'fileText' },
		// 	{ name: 'NECO', href: '/dashboard/past-questions/neco', icon: 'fileText' },
		// ],
	},
	{ name: 'Questions Answered', href: '/dashboard/questions-answered', icon: 'barChart3' },
	{ name: 'Study Flow', href: '/dashboard/study-flow', icon: 'bookCheck' },
	{
		name: 'Community',
		href: '/dashboard/community',
		icon: 'users',
		// subLinks: [
		// 	{ name: 'Forum', href: '/dashboard/community/forum', icon: 'users' },
		// 	{ name: 'Events', href: '/dashboard/community/events', icon: 'users' },
		// ],
	},
	{ name: 'Admissions & Visa Hub', href: '/dashboard/admissions-hub', icon: 'graduationCap' },
	{ name: 'Settings', href: '/dashboard/settings', icon: 'settings' },
	{ name: 'Help', href: '/dashboard/help', icon: 'helpCircle' },
];

export const STAT_NAVIGATION_URLS: Record<StatTitle, string> = {
	[StatTitle.STUDY_TIME]: '/calendar',
	[StatTitle.SUBJECT_COVERED]: '/study-flow',
	[StatTitle.OVERALL_SCORE]: '/performance',
	[StatTitle.AVERAGE_SCORE]: '/performance',
};
