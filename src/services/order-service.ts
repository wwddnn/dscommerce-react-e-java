import type { OrderDTO } from "../models/order";
import { requestBackend } from "../utils/requests";
import type { AxiosRequestConfig } from "axios";

export function orderByIdRequest(id: number) {

    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);
}

export function placeOrderRequest(cart: OrderDTO) {

    const config: AxiosRequestConfig = {
        url: `/orders`,
        method: 'POST',
        withCredentials: true,
        data: cart,
    }

    return requestBackend(config);
}