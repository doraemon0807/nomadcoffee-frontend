import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { useReactiveVar } from "@apollo/client";
import routes from "./routes";
import { isLoggedInVar } from "./apollo";
import Login from "./screens/Login";

export default function Router() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
