import type { RoleEnum } from "../../models/auth";
import * as authService from "../../services/auth-service";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
  roles?: RoleEnum[];
};

// se o usuário não estiver autenticado então vai direcionar para a página de Login
// se o usuário não tiver os papéis (roles) necessários então vai direcionar para a página de catálogo
// se passar nos dois casos, ai vou mostrar o conteúdo protegido
export function PrivateRoute({ children, roles = [] }: Props) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  if (!authService.hasAnyRoles(roles)) {
    return <Navigate to="/catalog" />;
  }
  return children;
}
