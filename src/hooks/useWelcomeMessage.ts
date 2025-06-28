"use client"
import { useQuery } from '@tanstack/react-query';
import { getWelcomeMessage } from '@/app/action';

export const UseWelcomeMessage = () => {
	return useQuery({
		queryKey: ['welcomeMessage'],
		queryFn: getWelcomeMessage,
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});
}; 