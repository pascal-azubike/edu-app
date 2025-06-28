import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge, BadgeVariant } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { SUBJECTS_DATA } from '@/data/dashboard/stats-page-data';
// import clsx from 'clsx';

const SubjectsCovered = () => {
	const completedSubjects = SUBJECTS_DATA.filter((subject) => subject.isCompleted).length;
	const totalSubjects = SUBJECTS_DATA.length;

	const overallProgress = Math.round(
		SUBJECTS_DATA.reduce((acc, subject) => acc + subject.progress, 0) / SUBJECTS_DATA.length,
	);

	return (
		<Card className="shadow-lg border-0 overflow-hidden">
			<CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
							<BookOpen className="h-5 w-5 text-primary-foreground" />
						</div>
						<div>
							<CardTitle className="text-lg font-bold">Subjects Progress</CardTitle>
							<p className="text-muted-foreground text-sm mt-1">
								{completedSubjects}/{totalSubjects} subjects completed
							</p>
						</div>
					</div>
					<div className="text-right">
						<div className="text-2xl font-bold text-primary">{overallProgress}%</div>
						<div className="text-xs text-muted-foreground">Overall</div>
					</div>
				</div>
			</CardHeader>

			{/* CardContent displays the list of subjects and their progress bars */}
			<CardContent className="p-6">
				<div className="space-y-4">
					{SUBJECTS_DATA.map((subject) => (
						<div key={subject.name} className="group">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center gap-3">
									<div
										className={`w-8 h-8 bg-gradient-to-br ${subject.color} rounded-lg flex items-center justify-center shadow-sm`}>
										{subject.isCompleted ? (
											<CheckCircle className="h-4 w-4 text-primary-foreground" />
										) : (
											<Clock className="h-4 w-4 text-primary-foreground" />
										)}
									</div>
									<div>
										<h4 className="font-semibold text-sm">{subject.name}</h4>
										<p className="text-xs text-muted-foreground">
											{subject.topicsCovered}/{subject.totalTopics} topics
										</p>
									</div>
								</div>

								{/* <div className="flex items-center gap-2">
									<Badge
										variant={subject.isCompleted ? BadgeVariant.DEFAULT : BadgeVariant.SECONDARY}
										className={clsx(
											'text-xs px-2 py-1 transition-colors',
											subject.isCompleted
												? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/40'
												: 'bg-muted text-muted-foreground border-border hover:bg-muted/70'
										)}>
										{subject.progress}%
									</Badge>
								</div> */}
							</div>

							<div className="relative">
								<Progress value={subject.progress} className="h-2 bg-muted" />
								<div
									className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${subject.color} rounded-full transition-all duration-500`}
									style={{ width: `${subject.progress}%` }}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Summary Footer */}
				<div className="mt-6 pt-4 border-t border-border">
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-2 text-muted-foreground">
							<TrendingUp className="h-4 w-4" />
							<span>Keep up the great work!</span>
						</div>
						<span className="font-medium text-primary">
							{/* Total topics mastered across all subjects */}
							{SUBJECTS_DATA.reduce((acc, subject) => acc + subject.topicsCovered, 0)} topics mastered
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default SubjectsCovered;
