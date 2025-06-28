import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CommunityEventsPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Community Events</CardTitle>
					<CardDescription>Stay updated with upcoming community events and activities.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">This is the Community Events page.</p>
				</CardContent>
			</Card>
		</div>
	);
}
