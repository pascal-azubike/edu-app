import type { Config } from 'tailwindcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import animate from 'tailwindcss-animate';

export default {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				staticWhite: 'var(--static-white)',
				staticBlack: 'var(--static-black)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					// eslint-disable-next-line @typescript-eslint/naming-convention
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					// eslint-disable-next-line @typescript-eslint/naming-convention
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
				edu: {
					primary: '#2563EB', // Blue
					secondary: '#6366F1', // Indigo
					accent: '#8B5CF6', // Purple
					success: '#10B981', // Green
					warning: '#F59E0B', // Amber
					danger: '#EF4444', // Red
					dark: '#1E293B', // Slate 800
					light: '#F8FAFC', // Slate 50
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
				},
				amber: {
					DEFAULT: 'hsl(var(--amber))',
					foreground: 'hsl(var(--amber-foreground))',
				},
				orange: {
					DEFAULT: 'hsl(var(--orange))',
					foreground: 'hsl(var(--orange-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				float: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					'0%, 100%': { transform: 'translateY(0)' },
					// eslint-disable-next-line @typescript-eslint/naming-convention
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'accordion-down': 'accordion-down 0.2s ease-out',
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Inter', 'sans-serif'],
				heading: ['Inter', 'sans-serif'],
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'var(--foreground)',
						h1: {
							fontWeight: '700',
							letterSpacing: '-0.025em',
						},
						h2: {
							fontWeight: '600',
							letterSpacing: '-0.025em',
						},
						h3: {
							fontWeight: '600',
							letterSpacing: '-0.025em',
						},
						// eslint-disable-next-line @typescript-eslint/naming-convention
						'h4,h5,h6': {
							fontWeight: '600',
						},
					},
				},
			},
			lineHeight: {
				tight: '1.15',
				hero: '1.05',
			},
		},
	},
	plugins: [animate],
} satisfies Config;
