'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
	name: string;
	email: string;
	role: string;
}

interface AuthContextType {
	user: User | null;
	login: (email: string) => Promise<void>;
	logout: () => void;
	isLoading: boolean;
}

export const UseAuth = (): AuthContextType => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		// Check for user in localStorage or session
		const storedUser = localStorage.getItem('user');
		if (storedUser !== null && storedUser !== '') {
			setUser(JSON.parse(storedUser));
		}
		setIsLoading(false);
	}, []);

	const login = async (email: string) => {
		
		const mockUser: User = {
			name: 'John Doe',
			email: email,
			role: 'Student',
		};
		setUser(mockUser);
		localStorage.setItem('user', JSON.stringify(mockUser));
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
		router.push('/login');
	};

	return { user, login, logout, isLoading };
};
