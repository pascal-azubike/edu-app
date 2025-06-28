import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CommunityForumPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Community Forum</CardTitle>
					<CardDescription>Engage in discussions and share knowledge with fellow students.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">This is the Community Forum page.</p>
				</CardContent>
			</Card>
		</div>
	);
}
