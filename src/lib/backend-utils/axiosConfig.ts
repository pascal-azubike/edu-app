import axios, { AxiosError, AxiosHeaders  } from 'axios';
import axiosRetry, { isNetworkError, isRetryableError } from 'axios-retry';
import {  once } from 'lodash';
import { Configuration, DefaultApi } from '@/generated';


const DEFAULT_RETRIES = 6;

function isRetryable(error: AxiosError) {
	return isNetworkError(error) || isRetryableError(error);
}
function setupAxios() {
	const axiosInstance = axios.create();

	axiosRetry(axiosInstance, {
		retries: DEFAULT_RETRIES,
		retryCondition: isRetryable,
		retryDelay: axiosRetry.exponentialDelay,
	});

	axiosInstance.interceptors.request.use( (config) => {
		
		return {
			...config,
			headers: new AxiosHeaders({ ...config.headers }),
		};
	});

	axiosInstance.interceptors.response.use(
		(response) => response,
		(err) => {
			return Promise.reject(err);
		},
	);

	return axiosInstance;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const backendApi = once(() => {
	const axiosInstance = setupAxios();

	const config = new Configuration({
		basePath: process.env.NEXT_PUBLIC_API_URL,
		baseOptions: {
      	axios: axiosInstance
    }
	});

	const defaultApi = new DefaultApi(config);
	return defaultApi
	
});


