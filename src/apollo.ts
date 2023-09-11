import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import routes from "./routes";
import { NavigateFunction } from "react-router-dom";

const TOKEN = "TOKEN";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

export const logInUser = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logOutUser = (navigate: NavigateFunction) => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  window.location.reload();
  navigate(routes.home, { replace: true });
};

// --- apollo client --- //
export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://nomadcoffee-backend-ee6f.onrender.com/graphql"
      : "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
