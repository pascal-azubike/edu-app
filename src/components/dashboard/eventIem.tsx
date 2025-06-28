import React from 'react';
import { Calendar } from 'lucide-react';

interface EventItemProps {
	name: string;
	date: string;
	daysLeft: number;
}

const EventItem: React.FC<EventItemProps> = ({ name, date, daysLeft }) => {
	return (
		<div className="flex items-start gap-3">
			<div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
				<Calendar className="h-5 w-5 text-primary" />
			</div>
			<div>
				<p className="font-medium">{name}</p>
				<p className="text-sm text-muted-foreground">{date}</p>
				<p className="text-sm font-medium text-primary">{daysLeft} days left</p>
			</div>
		</div>
	);
};

export default EventItem;
