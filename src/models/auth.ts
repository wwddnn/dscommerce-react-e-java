export type CredentialsDTO = {
  username: string;
  password: string;
};

export type AccessTokenPayloadDTO = {
  exp: number;
  user_name: string;
  authorities: RoleEnum[];
};

// definindo tipo enumerado em javascript
export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";
