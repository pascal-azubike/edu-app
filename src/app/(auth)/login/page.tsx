import React from 'react';

import LoginForm from '@/components/auth/LoginForm';
import LoginSideContent from '@/components/auth/LoginSideContent';
import SplitScreenLayout from '@/components/layouts/SplitScreenLayout';
import BackButton from '@/components/ui/back-button';
import BrandLogo from '@/components/ui/brandLogo';

const Login = () => {
	const leftContent = <LoginSideContent />;

	const rightContent = (
		<>
			<BackButton />
			<div className="flex flex-col items-center justify-center mb-6">
				<BrandLogo />
				<h2 className="text-2xl font-bold mt-4 mb-2 text-center">Welcome back</h2>
				<p className="text-muted-foreground text-sm text-center">Enter your details to sign in</p>
			</div>
			<LoginForm />
		</>
	);

	return <SplitScreenLayout leftContent={leftContent} rightContent={rightContent} isRightSideFirst />;
};

export default Login;
