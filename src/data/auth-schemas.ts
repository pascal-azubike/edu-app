import * as z from 'zod';

export const MIN_PASSWORD_LENGTH = 8;

export const loginSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	password: z.string().min(1, 'Password is required'),
	rememberMe: z.boolean(),
});

export const signupSchema = z
	.object({
		firstName: z.string().min(2, 'First name must be at least 2 characters'),
		lastName: z.string().min(2, 'Last name must be at least 2 characters'),
		email: z.string().email('Please enter a valid email address'),
		password: z
			.string()
			.min(MIN_PASSWORD_LENGTH, 'Password must be at least 8 characters')
			.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
			.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
			.regex(/[0-9]/, 'Password must contain at least one number')
			.regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
		confirmPassword: z.string(),
		agreeToTerms: z.boolean().refine((val) => val === true, {
			message: 'You must accept the terms and conditions',
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});
