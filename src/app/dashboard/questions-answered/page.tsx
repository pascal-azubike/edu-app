import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuestionsAnsweredPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Questions Answered</CardTitle>
					<CardDescription>Track your progress and review your answered questions.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">Track your progress and review your answered questions.</p>
				</CardContent>
			</Card>
		</div>
	);
}
