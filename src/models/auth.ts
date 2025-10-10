export type CredentialsDTO = {
  username: string;
  password: string;
};

// TIPO DO TOKEN
export type AccessTokenPayloadDTO = {
  exp: number;
  user_name: string;
  authorities: RoleEnum[];
};

// TIPO ENUMERADO EM JAVASCRIPT
export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";
