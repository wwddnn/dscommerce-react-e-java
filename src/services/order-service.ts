import { requestBackend } from "../utils/requests";
import type { AxiosRequestConfig } from "axios";

export function orderByIdRequest(id: number) {

    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);
}