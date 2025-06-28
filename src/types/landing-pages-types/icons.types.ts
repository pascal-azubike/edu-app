import { SVGProps } from 'react';

// Base interface for simple icons
export interface IconProps {
	className?: string;
	size?: number;
	color?: string;
}

// Extended interface for more complex icons with additional props
export interface ExtendedIconProps {
	className?: string;
	size?: number;
	color?: string;
	strokeWidth?: number;
	fill?: string;
	stroke?: string;
}

// Interface for SVG-based icons that might need all SVG props
export interface SVGIconProps extends SVGProps<SVGSVGElement> {
	className?: string;
	size?: number | string;
}

// Union type for common icon sizes (separate from numeric size)
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Union type for icon variants/styles
export type IconVariant = 'filled' | 'outline' | 'solid';

// Interface for icons with predefined size variants (doesn't extend IconProps to avoid conflict)
export interface SizedIconProps {
	className?: string;
	size?: IconSize | number; 
	color?: string;
	variant?: IconVariant;
}

// Interface specifically for custom icon components like StarIcon, UnderlineWave
export interface CustomIconProps {
	className?: string;
	width?: number | string;
	height?: number | string;
	fill?: string;
	stroke?: string;
	strokeWidth?: number | string;
}


