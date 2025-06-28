import { StatData, StatIcon, StatTitle } from '@/types/dashboard/stats.types';
import { STAT_NAVIGATION_MAP } from '@/lib/constants/dashboard';
import type { Subject, Event } from '@/types/dashboard/stats.types';

// Mock data for the Dashboard stats page

// Stats data with proper typing
export const STATS_DATA: Array<StatData> = [
	{
		title: StatTitle.STUDY_TIME,
		value: '24.5 hrs',
		icon: StatIcon.CLOCK,
		navigateTo: STAT_NAVIGATION_MAP[StatTitle.STUDY_TIME],
	},
	{
		title: StatTitle.SUBJECT_COVERED,
		value: '5/8',
		icon: StatIcon.BOOK_OPEN,
		navigateTo: STAT_NAVIGATION_MAP[StatTitle.SUBJECT_COVERED],
	},
	{
		title: StatTitle.OVERALL_SCORE,
		value: '78%',
		icon: StatIcon.TRENDING_UP,
		navigateTo: STAT_NAVIGATION_MAP[StatTitle.OVERALL_SCORE],
	},
];

// Study progress data
export const RECENT_EXAMS = [
	{ name: 'Biology WAEC 2022', progress: 75, type: 'WAEC' },
	{ name: 'Chemistry JAMB 2023', progress: 42, type: 'JAMB' },
	{ name: 'Physics NECO 2021', progress: 88, type: 'NECO' },
	{ name: 'Mathematics Post-UTME', progress: 60, type: 'Post-UTME' },
];

// Recommended topics data
export const RECOMMENDED_TOPICS = [
	{ name: 'Photosynthesis', subject: 'Biology', difficulty: 'Medium' },
	{ name: 'Chemical Bonding', subject: 'Chemistry', difficulty: 'Hard' },
	{ name: 'Trigonometry', subject: 'Mathematics', difficulty: 'Hard' },
	{ name: 'Kinetic Energy', subject: 'Physics', difficulty: 'Medium' },
];

// Upcoming events data for the UpcomingEvents dashboard card
export const UPCOMING_EVENTS: Array<Event> = [
	{ name: 'JAMB Registration', date: 'Jan 15, 2025', daysLeft: 22 },
	{ name: 'WAEC Examination', date: 'May 10, 2025', daysLeft: 138 },
	{ name: 'University Admission', date: 'Aug 30, 2025', daysLeft: 249 },
];

// Subject performance data
export const SUBJECT_PERFORMANCE = [
	{ subject: 'Mathematics', score: 85 },
	{ subject: 'English', score: 76 },
	{ subject: 'Physics', score: 65 },
	{ subject: 'Chemistry', score: 42 },
];

// Subject performance data for analytics and charts
export type PerformanceDatum = { subject: string; score: number; color: string };
export const PERFORMANCE_DATA: Array<PerformanceDatum> = [
	{ subject: 'Math', score: 85, color: '#3B82F6' },
	{ subject: 'Eng', score: 76, color: '#10B981' },
	{ subject: 'Phy', score: 68, color: '#F59E0B' },
	{ subject: 'Chem', score: 90, color: '#8B5CF6' },
	{ subject: 'Bio', score: 72, color: '#06B6D4' },
];

export const MOCK_NEWS_ITEMS = [
	{
		id: '1',
		title: 'JAMB 2024 Registration Deadline Extended',
		summary: 'Joint Admissions and Matriculation Board extends registration deadline to accommodate more candidates.',
		category: 'announcement',
		author: 'JAMB Official',
		publishedAt: '2 hours ago',
		readTime: '3 min read',
		likes: 45,
		comments: 12,
		isLiked: false,
		featured: true,
	},
	{
		id: '2',
		title: 'New Study Techniques That Actually Work',
		summary: 'Research-backed methods to improve your retention and exam performance significantly.',
		category: 'studyTips',
		author: 'Dr. Sarah Ahmed',
		publishedAt: '6 hours ago',
		readTime: '5 min read',
		likes: 128,
		comments: 23,
		isLiked: true,
	},
];

export const PROGRES_DATA = [
	{ month: 'Jan', score: 65 },
	{ month: 'Feb', score: 68 },
	{ month: 'Mar', score: 72 },
	{ month: 'Apr', score: 75 },
	{ month: 'May', score: 70 },
	{ month: 'Jun', score: 78 },
	{ month: 'Jul', score: 82 },
	{ month: 'Aug', score: 79 },
];

export const FEATURES = [
	'Unlimited practice questions',
	'AI-powered study assistant',
	'Advanced analytics & insights',
	'Priority community support',
];

// Subject progress data for the SubjectsCovered dashboard card
export const SUBJECTS_DATA: Array<Subject> = [
	{
		name: 'Mathematics',
		topicsCovered: 12,
		totalTopics: 15,
		progress: 80,
		isCompleted: false,
		color: 'from-blue-500 to-blue-600',
	},
	{
		name: 'English Language',
		topicsCovered: 8,
		totalTopics: 10,
		progress: 80,
		isCompleted: false,
		color: 'from-green-500 to-green-600',
	},
	{
		name: 'Physics',
		topicsCovered: 6,
		totalTopics: 12,
		progress: 50,
		isCompleted: false,
		color: 'from-orange-500 to-orange-600',
	},
	{
		name: 'Chemistry',
		topicsCovered: 9,
		totalTopics: 9,
		progress: 100,
		isCompleted: true,
		color: 'from-purple-500 to-purple-600',
	},
	{
		name: 'Biology',
		topicsCovered: 4,
		totalTopics: 11,
		progress: 36,
		isCompleted: false,
		color: 'from-teal-500 to-teal-600',
	},
];
