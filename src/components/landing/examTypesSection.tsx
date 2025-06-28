'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
	ExamTypeCardProps,
	FilterSectionProps,
	UniversitySelectorProps,
	CourseSelectorProps,
	SPECIAL_EXAM_TYPES,
} from '@/types/landing-pages-types/exam-types-section.types';
import { toast } from 'sonner';
import { FILTERS } from '@/data/landing-pages-data/exam-types-data';

const ExamTypesSection = () => {
	const [selectedExamType, setSelectedExamType] = useState<string>('');
	const [selectedUniversity, setSelectedUniversity] = useState<string>('');
	const [selectedCourse, setSelectedCourse] = useState<string>('');
	const [availableCourses, setAvailableCourses] = useState<Array<string>>([]);

	// Update available courses when university changes
	useEffect(() => {
		if (selectedUniversity.length > 0 && FILTERS?.UNIVERSITY_COURSES !== undefined) {
			const courses = FILTERS.UNIVERSITY_COURSES[selectedUniversity] ?? [];
			setAvailableCourses(courses);
			setSelectedCourse('');
		} else {
			setAvailableCourses([]);
		}
	}, [selectedUniversity]);

	const handleExamSelect = (examName: string) => {
		const isAuthenticated = false;
		if (isAuthenticated) {
			// Navigate to the specific exam page or show more info
			toast.success(`Selected ${examName}`);
		} else {
			// the user needs to sign up or log in/

			toast.info('Please sign up or log in to access these resources');
		}
	};

	const handleExamTypeClick = useCallback((examName: string) => {
		if (SPECIAL_EXAM_TYPES.includes(examName)) {
			setSelectedExamType(examName);
			setSelectedUniversity('');
			setSelectedCourse('');
		} else {
			setSelectedExamType('');
			handleExamSelect(`${examName} Exam Questions`);
		}
	}, []);

	const handleUniversitySelect = useCallback((university: string) => {
		setSelectedUniversity(university);
		setSelectedCourse('');
	}, []);

	const handleCourseSelect = useCallback(
		(course: string) => {
			setSelectedCourse(course);
			if (selectedExamType.length > 0 && selectedUniversity.length > 0) {
				handleExamSelect(`${selectedExamType} - ${selectedUniversity} - ${course} Questions`);
			}
		},
		[selectedExamType, selectedUniversity],
	);

	const isExamSelected = (examName: string) => selectedExamType === examName;

	const shouldShowFilters = Boolean(selectedExamType.length > 0 && SPECIAL_EXAM_TYPES.includes(selectedExamType));

	const availableUniversities = FILTERS?.UNIVERSITIES?.slice(1);

	return (
		<section className="py-16 bg-background">
			<div className="edu-container">
				<h2 className="section-title">Prepare for All Nigerian Exams</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
					{FILTERS.EXAM_TYPES.map((exam) => (
						<ExamTypeCard
							key={exam.name}
							exam={exam}
							isSelected={isExamSelected(exam.name)}
							onClick={handleExamTypeClick}
						/>
					))}
				</div>

				{shouldShowFilters && (
					<FilterSection
						selectedExamType={selectedExamType}
						selectedUniversity={selectedUniversity}
						selectedCourse={selectedCourse}
						availableUniversities={availableUniversities}
						availableCourses={availableCourses}
						onUniversitySelect={handleUniversitySelect}
						onCourseSelect={handleCourseSelect}
					/>
				)}
			</div>
		</section>
	);
};

// exam type card compoenent ////////////////////////////////
const ExamTypeCard = ({ exam, isSelected, onClick }: ExamTypeCardProps) => {
	const handleClick = useCallback(() => {
		onClick(exam.name);
	}, [exam.name, onClick]);

	const cardClasses = `
    bg-card rounded-lg p-6 text-center hover:shadow-md transition-all duration-200 cursor-pointer border border-border
    ${isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-accent/50'}
  `.trim();

	return (
		<div className={cardClasses} onClick={handleClick}>
			<h3 className="text-xl font-semibold text-primary mb-2">{exam.name}</h3>
			<p className="text-sm text-muted-foreground leading-relaxed">{exam.description}</p>
		</div>
	);
};

// filter selection component ////////////////////////////
const FilterSection = ({
	selectedExamType,
	selectedUniversity,
	selectedCourse,
	availableUniversities,
	availableCourses,
	onUniversitySelect,
	onCourseSelect,
}: FilterSectionProps) => {
	return (
		<div className="mt-8 max-w-md mx-auto space-y-6">
			<UniversitySelector
				selectedExamType={selectedExamType}
				selectedUniversity={selectedUniversity}
				availableUniversities={availableUniversities}
				onUniversitySelect={onUniversitySelect}
			/>

			{selectedUniversity.length > 0 && (
				<CourseSelector
					selectedCourse={selectedCourse}
					availableCourses={availableCourses}
					onCourseSelect={onCourseSelect}
				/>
			)}
		</div>
	);
};

// university seletcor component /////////////////////////////
const UniversitySelector = ({
	selectedExamType,
	selectedUniversity,
	availableUniversities,
	onUniversitySelect,
}: UniversitySelectorProps) => {
	return (
		<div>
			<h3 className="text-lg font-medium mb-4 text-foreground">
				Select a University for {selectedExamType} Questions:
			</h3>
			<Select value={selectedUniversity} onValueChange={onUniversitySelect}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a university" />
				</SelectTrigger>
				<SelectContent>
					{availableUniversities.map((university) => (
						<SelectItem key={university} value={university}>
							{university}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

// course selectore component ///////////////////////////////
const CourseSelector = ({ selectedCourse, availableCourses, onCourseSelect }: CourseSelectorProps) => {
	return (
		<div>
			<h3 className="text-lg font-medium mb-4 text-foreground">Select a Course:</h3>
			<Select value={selectedCourse} onValueChange={onCourseSelect}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a course" />
				</SelectTrigger>
				<SelectContent>
					{availableCourses.map((course) => (
						<SelectItem key={course} value={course}>
							{course}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default ExamTypesSection;
