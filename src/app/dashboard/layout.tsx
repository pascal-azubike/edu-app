import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/sidebar';
import { fetchCurrentUser } from '../action_server';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
	await verifyUserOrRedirect();

	return (
		<div className="flex max-h-screen overflow-hidden">
			<div className="h-screen overflow-y-auto flex-shrink-0">
				<Sidebar />
			</div>
			<div className="max-h-screen flex-1 overflow-y-auto bg-muted text-foreground">{children}</div>
		</div>
	);
}

async function verifyUserOrRedirect() {
	// commets
	const cookieStore = await cookies();
	console.log(cookieStore);
	const authToken = cookieStore.get('access_token');
	const tokenValue = authToken?.value;
	console.log(tokenValue);
	if (tokenValue === undefined || tokenValue === null || tokenValue === '') {
		redirect('/login');
	}

	try {
		await fetchCurrentUser({
			headers: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				Authorization: `Bearer ${tokenValue}`,
			},
		});
	} catch (error) {
		console.log(error);
		redirect('/login');
	}
}
