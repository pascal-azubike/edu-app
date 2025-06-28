import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function WaecPastQuestionsPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>WAEC Past Questions</CardTitle>
					<CardDescription>Practice with past WAEC examination questions and improve your skills.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">This is the WAEC past questions page.</p>
				</CardContent>
			</Card>
		</div>
	);
}
