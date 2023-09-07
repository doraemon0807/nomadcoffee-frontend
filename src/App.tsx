import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./styles";
import Router from "./Router";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client, darkModeVar } from "./apollo";

function App() {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
