'use client';
import { ShieldCheck } from 'lucide-react';

import { ScrollArea } from '../ui/scroll-area';
import { FEATURES } from '../../data/auth-data';
import { DEFAULT_TESTIMONIALS } from '@/data/landing-pages-data/testimonials-section-data';
import Image from 'next/image';
import FeatureList from './FeatureList';

const LoginSideContent = () => {
	return (
		<ScrollArea className="h-full">
			<div className="space-y-6 p-6">
				{/* Badge */}
				<div className="inline-flex items-center px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full">
					<ShieldCheck className="h-4 w-4 mr-2 text-primary" />
					<span className="text-sm font-medium text-white">Secure Login</span>
				</div>

				{/* Primary Heading */}
				<h1 className="text-staticWhite text-[30px] font-bold leading-[36px] tracking-[-0.75px]">
					Welcome back to your
					<br />
					study journey
				</h1>

				{/* Subheading */}
				<p className="text-[20px] font-[300] text-staticWhite/90 leading-[32.5px]">
					Login to continue your exam
					<br />
					preparation and access study materials.
				</p>

				{/* Testimonial */}
				<div className="bg-staticWhite/5 backdrop-blur-sm p-5 rounded-xl border border-staticWhite/30 mt-6">
					<p className="text-base mb-4 italic font-light text-staticWhite/70">
						&ldquo;{DEFAULT_TESTIMONIALS[0].quote}&rdquo;
					</p>
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-full bg-staticWhite/10 overflow-hidden">
							<Image
								src={DEFAULT_TESTIMONIALS[0].avatar}
								alt="Student testimonial"
								className="h-full w-full object-cover"
								width={400}
								height={400}
							/>
						</div>
						<div>
							<p className="font-medium text-staticWhite">{DEFAULT_TESTIMONIALS[0].name}</p>
							<p className="text-xs text-staticWhite/60">{DEFAULT_TESTIMONIALS[0].university}</p>
						</div>
					</div>
				</div>

				{/* Feature list */}
				<div>
					<h3 className="text-staticWhite text-[20px] font-semibold leading-[28px] mb-6 pt-9">Why students choose us</h3>
					<FeatureList features={FEATURES} />
				</div>
			</div>
		</ScrollArea>
	);
};

export default LoginSideContent;
