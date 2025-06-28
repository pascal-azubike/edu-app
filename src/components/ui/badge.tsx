import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export enum BadgeVariant {
	DEFAULT = 'default',
	SECONDARY = 'secondary',
	DESTRUCTIVE = 'destructive',
	OUTLINE = 'outline',
}

const BADGE_VARIANTS = cva(
	'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				[BadgeVariant.DEFAULT]: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
				[BadgeVariant.SECONDARY]: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				[BadgeVariant.DESTRUCTIVE]:
					'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
				[BadgeVariant.OUTLINE]: 'text-foreground',
			},
		},
		defaultVariants: {
			variant: BadgeVariant.DEFAULT,
		},
	},
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof BADGE_VARIANTS> {
	variant?: BadgeVariant;
}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(BADGE_VARIANTS({ variant }), className)} {...props} />;
}

export { Badge, BADGE_VARIANTS };
