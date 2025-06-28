import { z } from 'zod';
import { loginSchema, signupSchema } from '@/data/auth-schemas';
import { Control } from 'react-hook-form';

export interface Feature {
	title: string;
	description: string;
}
export type FeatureListProps = {
	features: ReadonlyArray<Feature>;
};

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	imageUrl: string;
}

export interface FormFieldsProps<T extends FormValues> {
	control: Control<T>;
	isLoading?: boolean;
	showPassword?: boolean;
	onTogglePassword?: () => void;
	type: 'login' | 'signup';
}

export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>;

export type FormValues = LoginFormValues | SignupFormValues;
export type LoginCredentials = z.infer<typeof loginSchema>;
