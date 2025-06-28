import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import type { Event } from '@/types/dashboard/stats.types';
import EventItem from './eventIem';

interface UpcomingEventsProps {
	events: ReadonlyArray<Event>;
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Upcoming Events</CardTitle>
				<CardDescription>Important dates to remember</CardDescription>
			</CardHeader>
			{/* CardContent displays the list of upcoming events and a calendar link */}
			<CardContent>
				<div className="space-y-4">
					{events.map((event, index) => (
						<EventItem key={index} name={event.name} date={event.date} daysLeft={event.daysLeft} />
					))}
					<Link href="/calendar" className="w-full mt-2 block">
						<button className="w-full mt-2 btn btn-primary">View Full Calendar</button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default UpcomingEvents;
