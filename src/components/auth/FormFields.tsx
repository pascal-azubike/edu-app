import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button, ButtonVariant, ButtonSize } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Link from 'next/link';

import type { FormFieldsProps, FormValues } from '@/types/auth-types';
import { Path } from 'react-hook-form';

export const FormFields = <T extends FormValues>({
	control,
	isLoading = false,
	showPassword = false,
	onTogglePassword,
	type,
}: FormFieldsProps<T>) => {
	return (
		<div className="space-y-3">
			{type === 'signup' && (
				<>
					<FormField
						control={control}
						name={'firstName' as Path<T>}
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<div className="relative">
										<User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
										<Input
											placeholder="John"
											className="pl-10"
											disabled={isLoading}
											{...field}
											value={field.value as string}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name={'lastName' as Path<T>}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<div className="relative">
										<User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
										<Input
											placeholder="Doe"
											className="pl-10"
											disabled={isLoading}
											{...field}
											value={field.value as string}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)}

			<FormField
				control={control}
				name={'email' as Path<T>}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<div className="relative">
								<Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
								<Input
									type="email"
									placeholder="your.email@example.com"
									className="pl-10"
									disabled={isLoading}
									{...field}
									value={field.value as string}
								/>
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name={'password' as Path<T>}
				render={({ field }) => (
					<FormItem>
						<div className="flex items-center justify-between">
							<FormLabel>Password</FormLabel>
							{type === 'login' && (
								<Link href="/forgot-password" className="text-xs text-primary hover:underline">
									Forgot?
								</Link>
							)}
						</div>
						<FormControl>
							<div className="relative">
								<Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
								<Input
									type={showPassword ? 'text' : 'password'}
									placeholder="••••••••"
									className="pl-10"
									disabled={isLoading}
									{...field}
									value={field.value as string}
								/>
								<Button
									type="button"
									variant={ButtonVariant.GHOST}
									size={ButtonSize.ICON}
									className="absolute right-1 top-1 h-7 w-7"
									onClick={onTogglePassword}
									disabled={isLoading}>
									{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
								</Button>
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			{type === 'signup' && (
				<FormField
					control={control}
					name={'confirmPassword' as Path<T>}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<Input
										type={showPassword ? 'text' : 'password'}
										placeholder="••••••••"
										className="pl-10"
										disabled={isLoading}
										{...field}
										value={field.value as string}
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}

			{type === 'login' ? (
				<FormField
					control={control}
					name={'rememberMe' as Path<T>}
					render={({ field }) => (
						<FormItem className="flex items-center space-x-2">
							<FormControl>
								<Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} disabled={isLoading} />
							</FormControl>
							<FormLabel className="text-xs font-normal">Remember for 30 days</FormLabel>
						</FormItem>
					)}
				/>
			) : (
				<FormField
					control={control}
					name={'agreeToTerms' as Path<T>}
					render={({ field }) => (
						<FormItem className="flex items-center space-x-2">
							<FormControl>
								<Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} disabled={isLoading} />
							</FormControl>
							<FormLabel className="text-xs font-normal">
								I agree to the{' '}
								<Link href="/terms" className="text-primary hover:underline">
									Terms of Service
								</Link>{' '}
								and{' '}
								<Link href="/privacy" className="text-primary hover:underline">
									Privacy Policy
								</Link>
							</FormLabel>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
		</div>
	);
};
