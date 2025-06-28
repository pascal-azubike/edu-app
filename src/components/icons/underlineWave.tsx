import { IconProps } from '@/types/landing-pages-types/icons.types';

const UnderlineWave = ({ className }: IconProps) => {
	return (
		<svg className={className} viewBox="0 0 300 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 10C47.6667 4 154.4 -3.2 298 5.60001" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
		</svg>
	);
};

export default UnderlineWave;
