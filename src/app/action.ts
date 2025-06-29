'use client';

import { Configuration } from '@/generated/configuration';
import { DefaultApi } from '@/generated/apis/default-api';
import { AuthApi } from '@/generated/apis/auth-api';
import { UserCreate, UserResponse, UserUpdate } from '@/generated/models';
import { LoginCredentials } from '@/types/auth-types';

const API_CONFIG = new Configuration({
	basePath: process.env.NEXT_PUBLIC_API_URL,
});

const DEFAULT_API = new DefaultApi(API_CONFIG);
const AUTH_API = new AuthApi(API_CONFIG);

export async function getWelcomeMessage(): Promise<{ message: string | undefined }> {
	const response = await DEFAULT_API.readRootApiV1Get();
	return { message: response.data.message };
}

export async function loginUser(credentials: LoginCredentials): Promise<void> {
	await AUTH_API.loginApiV1AuthLoginPost(credentials.email, credentials.password);
}

export async function registerUser(userInfo: UserCreate): Promise<UserResponse> {
	const response = await AUTH_API.registerApiV1AuthRegisterPost(userInfo);
	return response.data;
}

export function initiateGoogleOAuth(): void {
	// Redirect the user to the backend's Google OAuth endpoint
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const redirectUrl = new URL('/api/v1/auth/google', baseUrl).toString();
	window.location.href = redirectUrl;
}

export async function logoutUser(): Promise<void> {
	await AUTH_API.logoutApiV1AuthLogoutPost();
}

export async function getCurrentUser(): Promise<UserResponse> {
	const response = await AUTH_API.readCurrentUserApiV1AuthMeGet();
	return response.data;
}

export async function handleGoogleCallback(): Promise<void> {
	await AUTH_API.authGoogleCallbackApiV1AuthGoogleCallbackGet();
}

export async function updateCurrentUser(userUpdate: UserUpdate): Promise<UserResponse> {
	const response = await AUTH_API.updateMeApiV1AuthMePut(userUpdate);
	return response.data;
}
