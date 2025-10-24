import * as authService from '../../services/auth-service';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

// se o usuário não estiver autenticado então vai direcionar para a página de Login, caso contrário retorna o children
export function PrivateRoute({ children }: Props) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}
