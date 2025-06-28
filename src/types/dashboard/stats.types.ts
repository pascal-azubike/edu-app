import { ComponentType } from 'react';

export enum StatIcon {
	CLOCK = 'Clock',
	BOOK_OPEN = 'BookOpen',
	TRENDING_UP = 'TrendingUp',
}

export enum StatTitle {
	STUDY_TIME = 'Study Time',
	SUBJECT_COVERED = 'Subject Covered',
	OVERALL_SCORE = 'Overall Score',
	AVERAGE_SCORE = 'Average Score',
}

export interface StatData {
	title: StatTitle;
	value: string;
	icon: StatIcon;
	navigateTo?: string;
}

export interface StatsCardProps {
	title: string;
	value: string;
	icon: ComponentType<{ className?: string }>;
	navigateTo?: string;
	isLoading?: boolean;
	error?: string;
}

export interface StatsSectionProps {
	data?: Array<StatData>;
	isLoading?: boolean;
	error?: string;
}

export type NewsItem = {
	id: string;
	title: string;
	summary: string;
	category: string;
	author: string;
	publishedAt: string;
	readTime: string;
	likes: number;
	comments: number;
	isLiked?: boolean;
	featured?: boolean;
	imageUrl?: string; // Optional image for the news feed
};

export type Subject = {
	name: string;
	topicsCovered: number;
	totalTopics: number;
	progress: number;
	isCompleted: boolean;
	color: string;
};

// Represents an upcoming event for the dashboard
export type Event = {
	readonly name: string;
	readonly date: string;
	readonly daysLeft: number;
};
