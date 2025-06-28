'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Crown, Zap, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FEATURES } from '@/data/dashboard/stats-page-data';

const PremiumCard = () => {
	const router = useRouter();

	const handleUpgradeClick = () => {
		router.push('/pricing');
	};

	return (
		<Card className="relative overflow-hidden border-0 shadow-lg">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>

			{/* Animated Background Pattern */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-0 left-0 w-32 h-32 bg-card/20 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
				<div className="absolute bottom-0 right-0 w-24 h-24 bg-card/20 rounded-full translate-x-12 translate-y-12 animate-pulse delay-1000"></div>
			</div>

			<CardContent className="relative p-6 text-staticWhite">
				{/* Header */}
				<div className="flex items-center gap-3 mb-4">
					<div className="w-12 h-12 bg-staticWhite/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
						<Crown className="h-6 w-6 text-amber" />
					</div>
					<div>
						<h3 className="text-xl font-bold flex items-center gap-2">
							Premium Access
							<Sparkles className="h-5 w-5 text-amber" />
						</h3>
						<p className="text-staticWhite/80 text-sm">Unlock your full potential</p>
					</div>
				</div>

				{/* Features */}
				<div className="space-y-2 mb-6">
					{FEATURES.map((feature, index) => (
						<div key={index} className="flex items-center gap-2 text-sm text-staticWhite/90">
							<Zap className="h-4 w-4 text-amber flex-shrink-0" />
							<span>{feature}</span>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="space-y-3">
					<Button
						onClick={handleUpgradeClick}
						className="w-full bg-staticWhite text-primary hover:bg-staticWhite/90 hover:text-primary font-semibold shadow-lg transition-all duration-200 group">
						<span>Upgrade to Premium</span>
						<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform text-primary" />
					</Button>

					<p className="text-center text-staticWhite/70 text-xs">Join 10,000+ students already excelling</p>
				</div>

				{/* Special Offer Badge */}
				<div className="absolute top-4 right-4">
					<div className="bg-amber text-staticWhite px-3 py-1 rounded-full text-xs font-bold">50% OFF</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default PremiumCard;
