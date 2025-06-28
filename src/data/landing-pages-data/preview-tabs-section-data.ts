import { TabData } from '@/types/landing-pages-types/preview-tabs-section.types';

// Section text constants
export const SECTION_TITLE = 'See EDUapp in Action';
export const SECTION_SUBTITLE = 'Explore our intuitive interface designed for effective studying';

// Default tabs data
export const DEFAULT_TABS_DATA: Array<TabData> = [
	{
		value: 'past-questions',
		label: 'Past Questions',
		title: 'Comprehensive Past Questions',
		description: 'Access thousands of past questions with detailed solutions for all major Nigerian exams.',
		imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
		imageAlt: 'Past Questions Interface',
		features: [
			{ text: 'Searchable by topic, year, and difficulty' },
			{ text: 'Download for offline study' },
			{ text: 'Detailed explanations for complex questions' },
		],
		buttonText: 'Try It Now',
		buttonLink: '/login',
	},
	{
		value: 'study-flow',
		label: 'Study Flow',
		title: 'Personalized Study Flow',
		description: 'Create customized study plans and track your progress over time.',
		imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
		imageAlt: 'Study Flow Interface',
		features: [
			{ text: 'Interactive flashcards and quizzes' },
			{ text: 'Progress tracking with detailed analytics' },
			{ text: 'Spaced repetition algorithm for effective learning' },
		],
		buttonText: 'Try It Now',
		buttonLink: '/signup',
	},
	{
		value: 'community',
		label: 'Community',
		title: 'Student Community',
		description: 'Connect with fellow students, ask questions, and collaborate on difficult topics.',
		imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
		imageAlt: 'Community Interface',
		features: [
			{ text: 'University-specific study groups' },
			{ text: 'Q&A forum with expert responses' },
			{ text: 'Find study buddies with similar goals' },
		],
		buttonText: 'Try It Now',
		buttonLink: '/login',
	},
];

// Default tab value
export const DEFAULT_TAB_VALUE = 'past-questions';
