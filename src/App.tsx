import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";
import Cart from "./routes/ClientHome/Cart";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import Login from "./routes/ClientHome/login";
import AdminHome from "./routes/Admin/AdminHome";
import Admin from "./routes/Admin";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./utils/history";

export default function App() {
  /* Passo 3: Instanciar um useState no App tsx */
  /* Vou prover na aplicação toda esse componente, todos vão poder usar esse dado aqui */
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  /* Passo 4: Prover o contexto globalmente usando método Provider */
  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element={<Admin />}>
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  );
}
