import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export enum ButtonVariant {
	DEFAULT = 'default',
	DESTRUCTIVE = 'destructive',
	OUTLINE = 'outline',
	SECONDARY = 'secondary',
	GHOST = 'ghost',
	LINK = 'link',
}

export enum ButtonSize {
	DEFAULT = 'default',
	SM = 'sm',
	LG = 'lg',
	ICON = 'icon',
}

const BUTTON_VARIANTS = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				[ButtonVariant.DEFAULT]: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				[ButtonVariant.DESTRUCTIVE]: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				[ButtonVariant.OUTLINE]: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				[ButtonVariant.SECONDARY]: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				[ButtonVariant.GHOST]: 'hover:bg-accent hover:text-accent-foreground',
				[ButtonVariant.LINK]: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				[ButtonSize.DEFAULT]: 'h-9 px-4 py-2',
				[ButtonSize.SM]: 'h-8 rounded-md px-3 text-xs',
				[ButtonSize.LG]: 'h-10 rounded-md px-8',
				[ButtonSize.ICON]: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: ButtonVariant.DEFAULT,
			size: ButtonSize.DEFAULT,
		},
	},
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof BUTTON_VARIANTS> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const COMP = asChild ? Slot : 'button';
		return <COMP className={cn(BUTTON_VARIANTS({ variant, size, className }))} ref={ref} {...props} />;
	},
);
Button.displayName = 'Button';

export { Button, BUTTON_VARIANTS };
