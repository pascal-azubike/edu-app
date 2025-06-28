'use client';

interface SplitScreenLayoutProps {
	leftContent: React.ReactNode;
	rightContent: React.ReactNode;
	isRightSideFirst?: boolean;
}

const SplitScreenLayout = ({ leftContent, rightContent, isRightSideFirst = false }: SplitScreenLayoutProps) => {
	const leftSide = (
		<div className="hidden md:block md:w-1/2 bg-gradient-to-br from-gray/70 to-gray/50 bg-[rgba(93,93,93,0.70)] relative overflow-hidden">
			{/* Enhanced background image with better contrast */}
			<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>

			{/* Improved dark overlay for better text contrast */}
			<div className="absolute inset-0 bg-[#020817]/70 bg-gradient-to-br from-[#020817]/80 to-[#020817]/60"></div>

			{/* Enhanced abstract pattern overlay with slight animation */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWNpcmNsZXJzIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvcGF0dGVybj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4tY2lyY2xlcykiLz48L3N2Zz4=')] bg-repeat opacity-20 animate-pulse"></div>

			<div className="h-full w-full flex items-center justify-center p-6 md:p-8 relative z-10">
				<div className="text-white max-w-lg h-full">{leftContent}</div>
			</div>
		</div>
	);

	const rightSide = (
		<div className="w-full md:w-1/2 flex flex-col p-4 md:p-8 bg-background h-full">
			<div className="w-full max-w-md mx-auto h-full">{rightContent}</div>
		</div>
	);

	return (
		<div className="flex min-h-screen">
			{isRightSideFirst ? (
				<>
					{rightSide}
					{leftSide}
				</>
			) : (
				<>
					{leftSide}
					{rightSide}
				</>
			)}
		</div>
	);
};

export default SplitScreenLayout;
