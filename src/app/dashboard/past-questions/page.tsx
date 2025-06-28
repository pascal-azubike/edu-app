import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PastQuestionsPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Past Questions</CardTitle>
					<CardDescription>Access and practice with past examination questions from JAMB, WAEC, and NECO.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">Access and practice with past examination questions from JAMB, WAEC, and NECO.</p>
				</CardContent>
			</Card>
		</div>
	);
}
