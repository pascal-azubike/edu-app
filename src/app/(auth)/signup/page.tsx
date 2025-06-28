'use client';

import BrandLogo from '@/components/ui/brandLogo';
import SplitScreenLayout from '@/components/layouts/SplitScreenLayout';
import SignupForm from '@/components/auth/SignupForm';
import SignUpSideContent from '@/components/auth/SignUpSideContent';
import BackButton from '@/components/ui/back-button';

const Signup = () => {
	const leftContent = (
		<div>
			<BackButton />
			<SignUpSideContent />
		</div>
	);

	const rightContent = (
		<>
			<div className="flex flex-col items-center justify-center mb-6">
				<BrandLogo />
				<h2 className="text-2xl font-bold mt-8 mb-2">Create an account</h2>
				<p className="text-muted-foreground">Please enter your details to get started.</p>
			</div>

			<SignupForm />
		</>
	);

	return <SplitScreenLayout leftContent={leftContent} rightContent={rightContent} />;
};

export default Signup;
