import { createContext } from "react";

/* Passo a passo para usar o contexto global com createContext */
/* Passo 1: Definir o tipo(type) do contexto e a função set que altera esse dado */
export type ContextCartCountType = {
    contextCartCount: number;
    setContextCartCount: (contextCartCount: number) => void;
}

/* Passo 2: Criar o contexto com a função createContext */
/* Vamos chamar esse componente createContext lá dentro do App tsx em breve */
export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount: 0,
    setContextCartCount: () => {}
})

