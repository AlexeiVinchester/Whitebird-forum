import axios, { AxiosError } from "axios";
import { baseDomain } from "../config/config";
import { THTTPMethods } from "../types/httpMethods.type";
import { ApiError } from "./errors/apiError";

const apiCLient = axios.create({
    baseURL: baseDomain
});

export const makeApiRequest = async <T = undefined>(url: string, method: THTTPMethods, body?: T) => {
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
                    serverError.message,
                    0
                );
            }
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};