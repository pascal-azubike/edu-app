'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const QUERY_CLIENT = new QueryClient();

export default function QueryProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={QUERY_CLIENT}>
			{children}
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}
