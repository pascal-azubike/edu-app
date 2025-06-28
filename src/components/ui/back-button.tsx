'use client';

import { useRouter } from 'next/navigation';
import { Button, ButtonVariant } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
	className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
	const router = useRouter();

	return (
		<Button
			variant={ButtonVariant.GHOST}
			onClick={() => router.back()}
			className={`flex items-center gap-2 ${className ?? ''}`}>
			<ArrowLeft className="h-4 w-4" />
			Back
		</Button>
	);
};

export default BackButton;
