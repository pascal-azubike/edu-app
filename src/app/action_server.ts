'use server';

import { AuthApi } from '@/generated/apis/auth-api';
import { Configuration } from '@/generated/configuration';

const CONFIG = new Configuration({
	basePath: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000',
});

const API = new AuthApi(CONFIG);

export async function fetchCurrentUser(options?: Record<string, unknown>) {
	return API.readCurrentUserApiV1AuthMeGet(options);
}
 