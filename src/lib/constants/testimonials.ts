export interface Testimonial {
	name: string;
	role: string;
	content: string;
	avatar: string;
}

export const TESTIMONIALS: Array<Testimonial> = [
	{
		name: 'Sarah Johnson',
		role: 'Computer Science Student',
		content:
			'The interactive coding exercises and real-time feedback have significantly improved my programming skills. The platform makes learning to code fun and engaging!',
		avatar: 'https://i.pravatar.cc/150?img=1',
	},
	{
		name: 'Michael Chen',
		role: 'Data Science Enthusiast',
		content:
			'I love how the platform breaks down complex data science concepts into digestible lessons. The practical projects have helped me build a strong portfolio.',
		avatar: 'https://i.pravatar.cc/150?img=2',
	},
	{
		name: 'Emily Rodriguez',
		role: 'Web Developer',
		content:
			'The web development courses are comprehensive and up-to-date with the latest technologies. The community support is amazing!',
		avatar: 'https://i.pravatar.cc/150?img=3',
	},
]; 