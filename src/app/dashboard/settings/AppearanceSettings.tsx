import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Separator } from '@radix-ui/react-select';

export function AppearanceSettings() {
	const handleSaveAppearance = () => {
		toast('Appearance settings updated', {
			description: 'Your appearance preferences have been saved.',
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Appearance</CardTitle>
				<CardDescription>Customize how EDUapp looks for you</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					{/* Theme Section */}
					<div>
						<h3 className="text-lg font-medium mb-4">Theme</h3>
						<div className="grid grid-cols-3 gap-4">
							<div className="border rounded-md p-4 cursor-pointer bg-background text-foreground flex flex-col items-center justify-center">
								<div className="h-20 w-full bg-background border rounded-md mb-2"></div>
								<span className="text-sm font-medium">Light</span>
							</div>
							<div className="border rounded-md p-4 cursor-pointer bg-slate-900 text-slate-50 flex flex-col items-center justify-center">
								<div className="h-20 w-full bg-slate-800 border border-slate-700 rounded-md mb-2"></div>
								<span className="text-sm font-medium">Dark</span>
							</div>
							<div className="border rounded-md p-4 cursor-pointer bg-background text-foreground flex flex-col items-center justify-center">
								<div className="h-20 w-full bg-gradient-to-b from-background to-slate-900 border rounded-md mb-2"></div>
								<span className="text-sm font-medium">System</span>
							</div>
						</div>
					</div>

					<Separator />

					{/* Text Size Section */}
					<div>
						<h3 className="text-lg font-medium mb-4">Text Size</h3>
						<div className="flex items-center">
							<span className="mr-2 text-sm">A</span>
							<input type="range" min="1" max="3" defaultValue="2" step="1" className="w-full max-w-md" />
							<span className="ml-2 text-lg">A</span>
						</div>
					</div>

					<Separator />

					{/* Dashboard Layout Section */}
					<div>
						<h3 className="text-lg font-medium mb-4">Dashboard Layout</h3>
						<Select defaultValue="standard">
							<SelectTrigger id="dashboardLayout" className="w-full max-w-md">
								<SelectValue placeholder="Select layout" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="compact">Compact</SelectItem>
								<SelectItem value="standard">Standard</SelectItem>
								<SelectItem value="comfortable">Comfortable</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<Button onClick={handleSaveAppearance} className="mt-6">
					Save Preferences
				</Button>
			</CardContent>
		</Card>
	);
}
