import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CommunityPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Community</CardTitle>
					<CardDescription>Connect with other students and share knowledge.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">Connect with other students and share knowledge.</p>
				</CardContent>
			</Card>
		</div>
	);
}
