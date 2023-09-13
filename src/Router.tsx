import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Layout from "./screens/components/Layout";
import Add from "./screens/Add";
import Shop from "./screens/Shop";
import Profile from "./screens/Profile";
import Category from "./screens/Category";
import ShopEdit from "./screens/ShopEdit";
import Error404 from "./screens/404";

export default function Router() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route
            path={"/"}
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path={"/add"}
            element={
              <Layout form>
                <Add />
              </Layout>
            }
          />
          <Route
            path={"/shop/:id"}
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path={"/shop/:id/edit"}
            element={
              <Layout form>
                <ShopEdit />
              </Layout>
            }
          />
          <Route
            path={"/profile/:username"}
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path={"/category/:slug"}
            element={
              <Layout>
                <Category />
              </Layout>
            }
          />
          <Route path={"/login" || "/signup"} element={<Navigate to="/" />} />
          <Route path="*" element={<Error404 />} />
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
