import axios, { AxiosError } from "axios";

type THTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const apiCLient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

class ApiError extends Error {
    constructor(public message: string, public httpStatus: number) {
        super(message);
        this.httpStatus = httpStatus;
    }
};

export const makeApiRequest = async <T = undefined>(url: string, method: THTTPMethod, body?: T) => {
    try {
        const response = await apiCLient({
            method,
            url,
            data: body || undefined
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<{ error: string }>;
            if (serverError.response) {
                throw new ApiError(
                    serverError.response.data.error || 'An unknown error occurred on the server',
                    serverError.response.status
                );
            } else {
                throw new ApiError(
                    'Network error: No response from the server',
                    0
                );
            }
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};