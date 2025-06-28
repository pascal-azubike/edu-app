'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button, ButtonVariant, ButtonSize } from '@/components/ui/button';

export enum ThemeConstants {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}
export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant={ButtonVariant.GHOST}
			size={ButtonSize.ICON}
			onClick={() => setTheme(theme === ThemeConstants.LIGHT ? ThemeConstants.DARK : ThemeConstants.LIGHT)}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
