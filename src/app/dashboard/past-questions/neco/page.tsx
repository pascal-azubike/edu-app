import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NecoPastQuestionsPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>NECO Past Questions</CardTitle>
					<CardDescription>Practice with past NECO examination questions and improve your skills.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">This is the NECO past questions page.</p>
				</CardContent>
			</Card>
		</div>
	);
}
