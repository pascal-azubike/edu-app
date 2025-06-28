import { cn } from '@/lib/utils';

interface SkeletonProps {
	className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'animate-pulse rounded-md bg-muted',
				className
			)}
		/>
	);
};

export { Skeleton }; 