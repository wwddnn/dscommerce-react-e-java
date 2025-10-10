import QueryString from "qs";
import type { AccessTokenPayloadDTO, CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackend } from "../utils/request";
import type { AxiosRequestConfig } from "axios";
import * as accessTokenRepository from "../localStorage/access-token-repository";
import jwtDecode from "jwt-decode";

// é a nossa requiisção de login
export function LoginRequest(loginData: CredentialsDTO) {
  // cabeçalho da requisição
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  // corpo da requisição
  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers: headers,
  };

  return requestBackend(config);
}

// ao fazer o logout vou remover o token do localStorage
// usa o accessTokenRepository pq estruturamos a aplicação em componentes cada um com sua função, quem acessa o localStorage é o accessTokenRepository
export function Logout() {
  accessTokenRepository.remove();
}
// o repository é o responsavel por acessar o localStorage e salvar o token la
export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}
// pega o token do localStorage atraves do repository
export function getAccessToken(): string | null {
  return accessTokenRepository.get();
}

// quero pegar o payload do token. pode ocorrer um erro na hora de decodificar o token para o payload por isso colocamos o try catch
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
// verifica se usuario esta autenticado que é quando usuario esta com token ativo
export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();
  if(tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
    return true;
  }
  return false;
}
