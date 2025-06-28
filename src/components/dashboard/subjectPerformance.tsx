'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, ButtonVariant } from '@/components/ui/button';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useRouter } from 'next/navigation';
import { TrendingUp, Target, Award } from 'lucide-react';
import { PERFORMANCE_DATA, PerformanceDatum } from '@/data/dashboard/stats-page-data';

const GOAL_THRESHOLD = 80; // Minimum average score to be considered 'On Track'
const BAR_RADIUS = 8; // Rounded corners for bar chart

const SubjectPerformance = () => {
	const router = useRouter();

	const averageScore = Math.round(
		PERFORMANCE_DATA.reduce((acc: number, item: PerformanceDatum) => acc + item.score, 0) / PERFORMANCE_DATA.length,
	);
	// Find the subject with the highest score
	const topSubject = PERFORMANCE_DATA.reduce((prev: PerformanceDatum, current: PerformanceDatum) =>
		prev.score > current.score ? prev : current,
	);

	const handleDetailedClick = () => {
		router.push('/performance'); // Navigate to detailed performance page
	};

	return (
		<Card className="shadow-lg border-0 overflow-hidden">
			<CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
							<TrendingUp className="h-5 w-5 text-primary-foreground" />
						</div>
						<div>
							<CardTitle className="text-lg font-bold">Performance Analytics</CardTitle>
							<p className="text-muted-foreground text-sm mt-1">Your subject-wise scores</p>
						</div>
					</div>
					<div className="text-right">
						<div className="text-2xl font-bold text-primary">{averageScore}%</div>
						<div className="text-xs text-muted-foreground">Average</div>
					</div>
				</div>
			</CardHeader>

			<CardContent className="p-6">
				{/* Quick Stats: Top subject and goal progress */}
				<div className="grid grid-cols-2 gap-4 mb-6">
					<div className="bg-muted rounded-xl p-4 border border-border">
						<div className="flex items-center gap-2 mb-2">
							<Award className="h-4 w-4 text-primary" />
							<span className="text-sm font-medium text-primary">Top Subject</span>
						</div>
						<div className="text-lg font-bold text-foreground">{topSubject.subject}</div>
						<div className="text-sm text-muted-foreground">{topSubject.score}% score</div>
					</div>

					<div className="bg-muted rounded-xl p-4 border border-border">
						<div className="flex items-center gap-2 mb-2">
							<Target className="h-4 w-4 text-primary" />
							<span className="text-sm font-medium text-primary">Goal Progress</span>
						</div>
						<div className="text-lg font-bold text-foreground">
							{averageScore >= GOAL_THRESHOLD ? 'On Track' : 'Improving'}
						</div>
						<div className="text-sm text-muted-foreground">
							{averageScore >= GOAL_THRESHOLD ? 'Great job!' : 'Keep going!'}
						</div>
					</div>
				</div>

				{/* Bar Chart: Subject performance visualization */}
				<div className="h-[180px] mb-4">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
							<XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
							<Tooltip
								contentStyle={{
									borderRadius: '12px',
									border: 'none',
									boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
									backgroundColor: 'white',
								}}
								formatter={(value) => [`${value}%`, 'Score']}
								labelFormatter={(label) => `${label}`}
							/>
							<Bar dataKey="score" radius={[BAR_RADIUS, BAR_RADIUS, 0, 0]} barSize={32}>
								{PERFORMANCE_DATA.map((entry: PerformanceDatum, index: number) => (
									<Cell key={`cell-${index}`} fill={entry.color} />
								))}
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>

				<Button
					variant={ButtonVariant.OUTLINE}
					className="w-full hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200 font-medium"
					onClick={handleDetailedClick}>
					<TrendingUp className="h-4 w-4 mr-2 text-primary" />
					View Detailed Analysis
				</Button>
			</CardContent>
		</Card>
	);
};

export default SubjectPerformance;
