import QueryString from "qs";
import type { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackend } from "../utils/request";

// é a nossa requiisção de login
export function LoginRequest(loginData: CredentialsDTO) {

    // cabeçalho da requisição
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    // corpo da requisição
    const requestBody = QueryString.stringify({ ... loginData, grant_type: "password" });


    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers: headers
    }

    return requestBackend(config);
}