import { type AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findPageRequest(page: number, name: string, size = 12, sort = "name" ) {
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/products",
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort
        }
    }
    return requestBackend(config);
}

export function findById(id: number){
    return requestBackend( { url: "/products/${id}"})
}

