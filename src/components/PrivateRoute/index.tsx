import { Navigate } from "react-router-dom";
import * as authService from '../../services/auth-service';

// children permite abrir o componente colocou outros componentes dentro dele 
// esse children que é passado como proprs é o <Admin /> que esta la no app.tsx e esta dentro do PrivateRoute lá
type Props = {
  children: JSX.Element;
};
export function PrivateRoute({ children }: Props) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}
