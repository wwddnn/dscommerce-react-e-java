// tipo enumerado
export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

// tipo para as credenciais de login
export type CredentialsDTO = {
  username: string;
  password: string;
};

// tipo para o payload do token
export type AccessTokenPayloadDTO = {
  exp: number;
  user_name: string;
  authorities: RoleEnum[];
};
