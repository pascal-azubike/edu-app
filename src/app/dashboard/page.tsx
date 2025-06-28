'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UseAuth } from '@/hooks/hooks';
import { Calendar, LayoutDashboard, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

// Import dashboard components

import NewsFeed from '@/components/dashboard/newsFeed';
import PremiumCard from '@/components/dashboard/premiumCard';
import ProgressChart from '@/components/dashboard/progressChart';
import StatsSection from '@/components/dashboard/statsSection';
import SubjectPerformance from '@/components/dashboard/subjectPerformance';
import SubjectsCovered from '@/components/dashboard/subjectsCovered';
import UpcomingEvents from '@/components/dashboard/upcomingEvents';

// Import data
import { UPCOMING_EVENTS } from '@/data/dashboard/stats-page-data';

const Dashboard = () => {
	const { user } = UseAuth();
	const isAdmin = user?.role === 'Admin';

	return (
		<div className="flex min-h-screen">
			<div className="flex-1 overflow-auto">
				{/* Hero Header Section */}
				<Card className="border-0 shadow-none rounded-none">
					<CardContent className="px-6 md:px-8 py-8">
						<div className="flex justify-between items-start">
							<div className="space-y-2">
								<div className="flex items-center gap-3 mb-2">
									<div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
										<TrendingUp className="h-6 w-6 text-white" />
									</div>
									<div>
										<h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
											Welcome back, {user && user.name && user.name.trim() ? user.name.split(' ')[0] : 'Student'}! 👋
										</h1>
										<p className="text-muted-foreground text-lg font-medium mt-1">
											Ready to continue your learning journey?
										</p>
									</div>
								</div>

								{/* Quick Action Cards */}
								<div className="flex flex-wrap gap-3 mt-4">
									<Link href="/past-questions" className="group">
										<div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 shadow-sm">
											<Calendar className="h-4 w-4 text-primary" />
											<span className="text-sm font-medium group-hover:text-primary">Practice Questions</span>
										</div>
									</Link>
									<Link href="/community" className="group">
										<div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-200 shadow-sm">
											<Users className="h-4 w-4 text-secondary" />
											<span className="text-sm font-medium group-hover:text-secondary">Join Community</span>
										</div>
									</Link>
								</div>
							</div>

							{isAdmin && (
								<Button
									asChild
									className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 gap-2 shadow-lg border-0">
									<Link href="/admin">
										<LayoutDashboard className="h-4 w-4" />
										<span>Admin Panel</span>
									</Link>
								</Button>
							)}
						</div>
					</CardContent>
				</Card>

				{/* Main Content */}
				<div className="px-6 md:px-8 py-8 space-y-8">
					<StatsSection />

					{/* Main Grid Layout */}
					<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
						{/* Left Column */}
						<div className="xl:col-span-8 space-y-8">
							{/* Progress Chart */}
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<TrendingUp className="h-5 w-5 text-primary" />
										Your Learning Progress
									</CardTitle>
									<CardDescription>Track your improvement over time</CardDescription>
								</CardHeader>
								<CardContent>
									<ProgressChart />
								</CardContent>
							</Card>
							<NewsFeed />
							<SubjectPerformance />
						</div>

						{/* Right Column - Secondary Content */}
						<div className="xl:col-span-4 space-y-6">
							<UpcomingEvents events={UPCOMING_EVENTS} />
							<SubjectsCovered />
							<PremiumCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
