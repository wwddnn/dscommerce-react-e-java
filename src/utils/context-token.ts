import { createContext } from "react";
import type { AccessTokenPayloadDTO } from "../models/auth";

// cria o tipo
export type ContextTokenType = {
  contextTokenPayload: AccessTokenPayloadDTO | undefined;
  setContextTokenPayload: (
    accessTokenPayload: AccessTokenPayloadDTO | undefined
  ) => void;
};

// cria a função com createContext
export const ContextToken = createContext<ContextTokenType>({
  contextTokenPayload: undefined,
  setContextTokenPayload: () => {},
});
