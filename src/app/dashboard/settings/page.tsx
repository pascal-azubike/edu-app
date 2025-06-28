'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSettings } from './ProfileSettings';
import { NotificationSettings } from './NotificationSettings';
import { AppearanceSettings } from './AppearanceSettings';

export default function Settings() {
	return (
		<div className="flex-1 p-6 md:p-8 overflow-auto">
			<header className="mb-8">
				<h1 className="text-3xl font-bold mb-2">Settings</h1>
				<p className="text-muted-foreground">Manage your account and preferences</p>
			</header>

			<Tabs defaultValue="profile" className="mb-8">
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="appearance">Appearance</TabsTrigger>
				</TabsList>

				<TabsContent value="profile" className="pt-6">
					<ProfileSettings />
				</TabsContent>
				<TabsContent value="notifications" className="pt-6">
					<NotificationSettings />
				</TabsContent>
				<TabsContent value="appearance" className="pt-6">
					<AppearanceSettings />
				</TabsContent>
			</Tabs>
		</div>
	);
}
