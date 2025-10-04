import { TOKEN_KEY } from "../utils/system";

/* 
esse arquivo é nosso repository, o responsavel por acessar o localStorage salvando ou buscando o token la
*/

// salva o token no localStorage
// obs. tem que passar para string antes de salvar no localStorage
export function save(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

// pega o token do localStorage
export function get() : string | null {
   return localStorage.getItem(TOKEN_KEY);
}

// remove o token do localStorage
export function remove() {
    localStorage.removeItem(TOKEN_KEY);
}