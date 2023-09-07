import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  fontColor: "#2c2c2c",
  bgColor: "#fcfcfc",
};

export const darkTheme: DefaultTheme = {
  fontColor: "#fcfcfc",
  bgColor: "#2c2c2c",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    input {
      all: unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
      background-color: ${(props) => props.theme.bgColor};
      font-size:14px;
      font-family: "Roboto";
      color: ${(props) => props.theme.fontColor}
    }
    a {
      color: inherit;
      text-decoration: none;
    }
`;
