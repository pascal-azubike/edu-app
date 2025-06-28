'use client';

import { BookOpen } from 'lucide-react';

const BrandLogo = () => {
	return (
		<div className="flex items-center space-x-2">
			<div className="w-6 h-6 p-1.5 bg-[rgba(37,99,235,0.10)] rounded-lg flex items-center justify-center">
				<BookOpen className="h-4.5 w-5 text-[#2563EB] stroke-[2.5]" />
			</div>
			<span className="font-bold text-xl">EduApp</span>
		</div>
	);
};

export default BrandLogo;
