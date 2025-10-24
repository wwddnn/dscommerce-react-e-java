import QueryString from "qs";
import type { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from "../localStorage/access-token-repository";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialsDTO) {
  // cabeçalho
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  // corpo
  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  // requisição
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    headers: headers,
    data: requestBody,
  };

  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken(): string | null {
  return accessTokenRepository.get();
}

// decodifica o token
export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    const token = accessTokenRepository.get();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch (error) {
    return undefined;
  }
}

// verifica se o token é valido (se esta ativo na validade de expiração)
export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();
  if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
    return true;
  }
  return false;
}

// verifica se o usuário tem algum dos papéis (roles)
export function hasAnyRoles(roles: RoleEnum[]): boolean {
  if (roles.length === 0) { 
    return true;
  }
  const tokenPayload = getAccessTokenPayload();
  if (tokenPayload !== undefined) {
    for (var i = 0; i < roles.length; i++) {
      if (tokenPayload.authorities.includes(roles[i])) {
        return true;
      }
    }
    //return roles.some(role => tokenData.authorities.includes(role));
  }
  return false;
}
