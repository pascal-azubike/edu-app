import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Separator } from '@radix-ui/react-select';

export function NotificationSettings() {
	const handleSaveNotifications = () => {
		toast('Notification preferences updated', {
			description: 'Your notification settings have been updated.',
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Notification Preferences</CardTitle>
				<CardDescription>Control how and when you receive notifications</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					{/* Email Notifications Section */}
					<div>
						<h3 className="text-lg font-medium mb-4">Email Notifications</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<Label htmlFor="emailNewQuestions">New forum questions</Label>
								<Switch id="emailNewQuestions" defaultChecked />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="emailAnswers">Answers to your questions</Label>
								<Switch id="emailAnswers" defaultChecked />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="emailStudyBuddies">Study buddy requests</Label>
								<Switch id="emailStudyBuddies" defaultChecked />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="emailReminders">Study reminders</Label>
								<Switch id="emailReminders" />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="emailAnnouncements">EDUapp announcements</Label>
								<Switch id="emailAnnouncements" defaultChecked />
							</div>
						</div>
					</div>

					<Separator />

					{/* Push Notifications Section */}
					<div>
						<h3 className="text-lg font-medium mb-4">Push Notifications</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<Label htmlFor="pushChat">Chat messages</Label>
								<Switch id="pushChat" defaultChecked />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="pushForumActivity">Forum activity</Label>
								<Switch id="pushForumActivity" defaultChecked />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="pushExamAlerts">Exam date alerts</Label>
								<Switch id="pushExamAlerts" defaultChecked />
							</div>
							<div className="flex items-center justify-between">
								<Label htmlFor="pushStudyReminders">Daily study reminders</Label>
								<Switch id="pushStudyReminders" />
							</div>
						</div>
					</div>
				</div>

				<Button onClick={handleSaveNotifications} className="mt-6">
					Save Preferences
				</Button>
			</CardContent>
		</Card>
	);
} 