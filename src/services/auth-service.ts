import QueryString from "qs";
import type { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from "../localStorage/access-token-repository";

export function loginRequest(loginData: CredentialsDTO) {

    // cabeçalho
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    }

    // corpo
    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" });

    // requisição
    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        headers: headers,
        data: requestBody

    }

    return requestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() : string | null {
    return accessTokenRepository.get();
}