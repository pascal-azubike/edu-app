import QueryProvider from '@/components/query-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import SITE_METADATA from '@/data/site-metadata';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body suppressHydrationWarning={true} className="min-h-screen bg-background">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<QueryProvider>{children}</QueryProvider>
				</ThemeProvider>
				<Toaster /> {/* <Sonner /> */}
				
			</body>
		</html>
	);
}
