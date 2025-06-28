'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, ButtonVariant } from '@/components/ui/button';
import { toast } from 'sonner';
import { GoogleIcon } from '../icons/GoogleIcon';
import { Form } from '@/components/ui/form';
import { FormFields } from './FormFields';
import { loginSchema } from '@/data/auth-schemas';
import type { LoginFormValues } from '@/types/auth-types';
import { loginUser } from '@/app/action';
import { initiateGoogleOAuth } from '@/app/action';

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	// Initialize form with validation
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
		setIsLoading(true);
		try {
			await loginUser({
				email: data.email,
				password: data.password,
				rememberMe: data.rememberMe,
			});
			toast.success('Login successful!');
			router.push('/dashboard');
		} catch {
			toast.error('Invalid email or password');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormFields<LoginFormValues>
					control={form.control}
					isLoading={isLoading}
					showPassword={showPassword}
					onTogglePassword={() => setShowPassword(!showPassword)}
					type="login"
				/>

				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading ? 'Signing in...' : 'Sign In'}
				</Button>

				<Button
					variant={ButtonVariant.OUTLINE}
					type="button"
					className="w-full"
					disabled={isLoading}
					onClick={initiateGoogleOAuth}>
					<GoogleIcon className="mr-2 h-4 w-4" />
					Sign in with Google
				</Button>

				<p className="text-center text-xs text-muted-foreground">
					Don&apos;t have an account?{' '}
					<Link href="/signup" className="text-primary hover:underline font-medium">
						Sign up
					</Link>
				</p>
			</form>
		</Form>
	);
};

export default LoginForm;
