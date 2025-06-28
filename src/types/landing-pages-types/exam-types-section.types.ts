import { FILTERS } from '@/data/landing-pages-data/exam-types-data';

export interface ExamType {
	name: string;
	description: string;
}

export interface Filters {
	universities?: Array<string>;
	universityCourses?: Record<string, Array<string>>;
}

export interface ExamTypesSectionProps {
	examTypes: Array<ExamType>;
	onExamSelect: (examName: string) => void;
	filters?: Filters;
}

export interface ExamTypeCardProps {
	exam: ExamType;
	isSelected: boolean;
	onClick: (examName: string) => void;
}

export interface FilterSectionProps {
	selectedExamType: string;
	selectedUniversity: string;
	selectedCourse: string;
	availableUniversities: Array<string>;
	availableCourses: Array<string>;
	onUniversitySelect: (university: string) => void;
	onCourseSelect: (course: string) => void;
}

export interface UniversitySelectorProps {
	selectedExamType: string;
	selectedUniversity: string;
	availableUniversities: Array<string>;
	onUniversitySelect: (university: string) => void;
}

export interface CourseSelectorProps {
	selectedCourse: string;
	availableCourses: Array<string>;
	onCourseSelect: (course: string) => void;
}

// Constants
export const SPECIAL_EXAM_TYPES = ['Post-UTME', 'University'];

export const DEFAULT_FILTERS: Filters = {
	universities: FILTERS.UNIVERSITIES,
	universityCourses: FILTERS.UNIVERSITY_COURSES,
};
