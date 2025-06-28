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
import { signupSchema } from '@/data/auth-schemas';
import type { SignupFormValues } from '@/types/auth-types';
import { registerUser } from '@/app/action';
import { initiateGoogleOAuth } from '@/app/action';

const SignupForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	// Initialize form with validation
	const form = useForm<SignupFormValues>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			agreeToTerms: false,
		},
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
		setIsLoading(true);

		try {
			await registerUser({
				email: data.email,
				password: data.password,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				full_name: `${data.firstName} ${data.lastName}`,
			});
			toast.success('Signup successful!');
			form.reset();
			router.push('/login');
		} catch {
			toast.error('An error occurred during signup');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormFields<SignupFormValues>
					control={form.control}
					isLoading={isLoading}
					showPassword={showPassword}
					onTogglePassword={() => setShowPassword(!showPassword)}
					type="signup"
				/>

				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading ? 'Creating account...' : 'Create Account'}
				</Button>

				<Button
					variant={ButtonVariant.OUTLINE}
					type="button"
					className="w-full"
					disabled={isLoading}
					onClick={initiateGoogleOAuth}>
					<GoogleIcon className="mr-2 h-4 w-4" />
					Sign up with Google
				</Button>

				<p className="text-center text-xs text-muted-foreground">
					Already have an account?{' '}
					<Link href="/login" className="text-primary hover:underline font-medium">
						Sign in
					</Link>
				</p>
			</form>
		</Form>
	);
};

export default SignupForm;
