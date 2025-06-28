import React, { useState } from 'react';
import Link from 'next/link';

const LEARNING_DATA = {
	recommended: [
		{
			title: 'Photosynthesis',
			subject: 'Biology',
			difficulty: 'Medium',
			href: '/practice/photosynthesis',
		},
		{
			title: 'Chemical Bonding',
			subject: 'Chemistry',
			difficulty: 'Hard',
			href: '/practice/chemical-bonding',
		},
		{
			title: 'Trigonometry',
			subject: 'Mathematics',
			difficulty: 'Hard',
			href: '/practice/trigonometry',
		},
		{
			title: 'Kinetic Energy',
			subject: 'Physics',
			difficulty: 'Medium',
			href: '/practice/kinetic-energy',
		},
	],
	bookmarked: [
		{
			title: 'Enzymes',
			subject: 'Biology',
			difficulty: 'Easy',
			href: '/practice/enzymes',
		},
	],
	recent: [
		{
			title: 'Quadratic Equations',
			subject: 'Mathematics',
			difficulty: 'Medium',
			href: '/practice/quadratic-equations',
		},
	],
};

const TABS = ['Recommended', 'Bookmarked', 'Recent'];

function ContinueLearning() {
	const [activeTab, setActiveTab] = useState('Recommended');
	const items = LEARNING_DATA[activeTab as keyof typeof LEARNING_DATA];

	return (
		<div className="w-full bg-white rounded-xl border border-slate-200 shadow p-6 flex flex-col gap-6">
			<div>
				<h3 className="text-xl font-semibold mb-1">Continue Learning</h3>
				<p className="text-slate-500 text-sm">Pick up where you left off</p>
			</div>
			<div className="flex gap-2 bg-slate-100 rounded-md p-1 w-fit">
				{TABS.map((tab) => (
					<button
						key={tab}
						className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${
							activeTab === tab ? 'bg-white text-primary shadow' : 'text-slate-700 hover:bg-slate-200'
						}`}
						onClick={() => setActiveTab(tab)}>
						{tab}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
				{items.length === 0 && <div className="text-slate-400 text-center col-span-2">No items found.</div>}
				{items.map((item) => (
					<div
						key={item.title}
						className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white border border-slate-200 rounded-lg shadow-sm p-4 w-full h-full">
						<div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto sm:mx-0">
							{/* Placeholder for icon or image */}
							<span className="text-xl font-bold text-slate-400">{item.title[0]}</span>
						</div>
						<div className="flex flex-col justify-center gap-1 flex-1">
							<div className="font-medium text-base text-slate-900">{item.title}</div>
							<div className="text-xs text-slate-500">
								{item.subject} &bull; {item.difficulty}
							</div>
							<Link
								href={item.href}
								className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition whitespace-nowrap w-fit mt-2">
								Practice now
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ContinueLearning;
