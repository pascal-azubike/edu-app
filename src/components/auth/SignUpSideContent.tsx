'use client';

import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import FeatureList from './FeatureList';
import { SIGNUP_FEATURES, STUDENT_AVATARS } from '@/data/auth-data';

/**
 * SignUpSideContent component displays the marketing content for the signup page
 * It includes a badge, main heading, features list, and social proof section
 */
export default function SignUpSideContent() {
	return (
		<ScrollArea className="h-full">
			<div className="space-y-6 p-6">
				{/* Trusted by badge */}
				<div className="inline-flex items-center px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full">
					<BookOpen className="h-4 w-4 mr-2 text-primary" />
					<span className="text-sm font-medium ">Trusted by 10,000+ students</span>
				</div>

				{/* Main heading */}
				<h1 className="text-staticWhite text-[30px] font-bold leading-[36px] tracking-[-0.75px]">
					Start your learning
					<br />
					journey today
				</h1>

				{/* Subheading */}
				<p className="text-[20px] font-[300] text-staticWhite/90 leading-[32.5px]">
					Join thousands of Nigerian students who are
					<br />
					achieving academic excellence with EDUapp.
				</p>

				{/* Features section */}
				<div>
					<h3 className="text-staticWhite text-[20px] font-semibold leading-[28px] mb-6 pt-9">
						Everything you need to succeed
					</h3>
					<FeatureList features={SIGNUP_FEATURES} />
				</div>
				{/* Social proof section */}
				<div className="bg-staticWhite/5 backdrop-blur-sm p-5 rounded-xl border border-staticWhite/30 mt-6">
					<p className="text-sm text-staticWhite/70 mb-4">Join our growing community</p>
					<div className="flex items-center space-x-4">
						{/* Student avatars */}
						<div className="flex -space-x-3">
							{STUDENT_AVATARS.map((student) => (
								<div
									key={`student-${student.id}`}
									className="h-8 w-8 rounded-full border-2 border-staticWhite overflow-hidden shadow-lg ring-2 ring-staticWhite">
									<Image
										src={`https://randomuser.me/api/portraits/men/${student.imageId}.jpg`}
										alt={`Student profile ${student.id}`}
										width={32}
										height={32}
										className="h-full w-full object-cover"
									/>
								</div>
							))}
						</div>
						<p className="text-sm text-staticWhite font-medium">
							<span className="font-bold text-primary">Join 10,000+</span> students already mastering their exams
						</p>
					</div>
				</div>
			</div>
		</ScrollArea>
	);
}
