'use client';

import { createContext, forwardRef, useId, useContext } from 'react';
import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
	Controller,
	FormProvider,
	useFormContext,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

const formFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<formFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</formFieldContext.Provider>
	);
};

const UseFormField = () => {
	const fieldContext = useContext(formFieldContext);
	const itemContext = useContext(formItemContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (fieldContext === null) {
		throw new Error('UseFormField should be used within <FormField>');
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	};
};

type FormItemContextValue = {
	id: string;
};

const formItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
	const id = useId();

	return (
		<formItemContext.Provider value={{ id }}>
			<div ref={ref} className={cn('space-y-2', className)} {...props} />
		</formItemContext.Provider>
	);
});
FormItem.displayName = 'FormItem';

const FormLabel = forwardRef<
	React.ElementRef<typeof LabelPrimitiveRoot>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitiveRoot>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = UseFormField();

	return <Label ref={ref} className={cn(error && 'text-destructive', className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = 'FormLabel';

const FormControl = forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
	({ ...props }, ref) => {
		const { error, formItemId, formDescriptionId, formMessageId } = UseFormField();

		return (
			<Slot
				ref={ref}
				id={formItemId}
				aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
				aria-invalid={!!error}
				{...props}
			/>
		);
	},
);
FormControl.displayName = 'FormControl';

const FormDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => {
		const { formDescriptionId } = UseFormField();

		return (
			<p ref={ref} id={formDescriptionId} className={cn('text-[0.8rem] text-muted-foreground', className)} {...props} />
		);
	},
);
FormDescription.displayName = 'FormDescription';

const FormMessage = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, children, ...props }, ref) => {
		const { error, formMessageId } = UseFormField();
		const body = error ? String(error?.message ?? '') : children;

		if (body === null || body === undefined) {
			return null;
		}

		return (
			<p
				ref={ref}
				id={formMessageId}
				className={cn('text-[0.8rem] font-medium text-destructive', className)}
				{...props}>
				{body}
			</p>
		);
	},
);
FormMessage.displayName = 'FormMessage';

export {
	UseFormField as useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,
};
