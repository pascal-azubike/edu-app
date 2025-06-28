import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HelpPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Help</CardTitle>
					<CardDescription>Get support and find answers to your questions.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">Get support and find answers to your questions.</p>
				</CardContent>
			</Card>
		</div>
	);
}
