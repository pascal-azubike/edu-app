import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Separator } from '@radix-ui/react-select';

export function ProfileSettings() {
	const profileData = {
		fullName: 'Adebayo Johnson',
		email: 'adebayo@example.com',
		phone: '+234 812 345 6789',
		university: 'University of Lagos',
		course: 'Computer Science',
		educationLevel: 'secondary',
		yearOfStudy: 'final',
		examInterest: 'jamb',
	};

	const handleSaveProfile = () => {
		toast('Profile updated', {
			description: 'Your profile information has been saved successfully.',
		});
	};

	return (
		<>
			{/* Personal Information Section */}
			<Card>
				<CardHeader>
					<CardTitle>Personal Information</CardTitle>
					<CardDescription>Update your personal details</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="fullName">Full Name</Label>
							<Input id="fullName" defaultValue={profileData.fullName} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" defaultValue={profileData.email} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input id="phone" defaultValue={profileData.phone} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="university">University/School</Label>
							<Input id="university" defaultValue={profileData.university} />
						</div>
					</div>

					<Separator className="my-4" />

					{/* Academic Information Section */}
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Academic Information</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="educationLevel">Education Level</Label>
								<Select defaultValue={profileData.educationLevel}>
									<SelectTrigger id="educationLevel">
										<SelectValue placeholder="Select education level" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="secondary">Secondary School</SelectItem>
										<SelectItem value="undergraduate">Undergraduate</SelectItem>
										<SelectItem value="postgraduate">Postgraduate</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="yearOfStudy">Year of Study</Label>
								<Select defaultValue={profileData.yearOfStudy}>
									<SelectTrigger id="yearOfStudy">
										<SelectValue placeholder="Select year" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="first">First Year</SelectItem>
										<SelectItem value="second">Second Year</SelectItem>
										<SelectItem value="third">Third Year</SelectItem>
										<SelectItem value="fourth">Fourth Year</SelectItem>
										<SelectItem value="final">Final Year</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="course">Course/Department</Label>
								<Input id="course" defaultValue={profileData.course} />
							</div>

							<div className="space-y-2">
								<Label htmlFor="examInterest">Exam Interest</Label>
								<Select defaultValue={profileData.examInterest}>
									<SelectTrigger id="examInterest">
										<SelectValue placeholder="Select exam" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="waec">WAEC</SelectItem>
										<SelectItem value="neco">NECO</SelectItem>
										<SelectItem value="jamb">JAMB</SelectItem>
										<SelectItem value="postUtme">Post-UTME</SelectItem>
										<SelectItem value="university">University Exams</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>

					<Button onClick={handleSaveProfile} className="mt-4">
						Save Changes
					</Button>
				</CardContent>
			</Card>

			{/* Password & Security Section */}
			<Card className="mt-6">
				<CardHeader>
					<CardTitle>Password & Security</CardTitle>
					<CardDescription>Manage your password and security settings</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="currentPassword">Current Password</Label>
							<Input id="currentPassword" type="password" />
						</div>
						<div></div>
						<div className="space-y-2">
							<Label htmlFor="newPassword">New Password</Label>
							<Input id="newPassword" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirmPassword">Confirm New Password</Label>
							<Input id="confirmPassword" type="password" />
						</div>
					</div>

					<div className="flex items-center space-x-2 mt-4">
						<Switch id="twoFactor" />
						<Label htmlFor="twoFactor">Enable two-factor authentication</Label>
					</div>

					<Button className="mt-4">Update Password</Button>
				</CardContent>
			</Card>
		</>
	);
}
