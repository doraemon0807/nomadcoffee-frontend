import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

export default function Router() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login" || "/signup"} element={<Navigate to="/" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
