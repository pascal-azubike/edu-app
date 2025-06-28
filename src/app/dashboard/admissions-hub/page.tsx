import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdmissionsHubPage() {
	return (
		<div className="px-6 md:px-8 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Admissions & Visa Hub</CardTitle>
					<CardDescription>Access resources and guidance for admissions and visa processes.</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">Access resources and guidance for admissions and visa processes.</p>
				</CardContent>
			</Card>
		</div>
	);
}
