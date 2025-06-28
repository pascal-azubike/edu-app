import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function StudyFlowPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Study Flow</CardTitle>
					<CardDescription>Organize and track your study sessions and progress.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">Organize and track your study sessions and progress.</p>
				</CardContent>
			</Card>
		</div>
	);
}
