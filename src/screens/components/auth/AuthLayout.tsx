import { useReactiveVar } from "@apollo/client";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../../apollo";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Footer = styled.div``;
const DarkModeBtn = styled.div`
  cursor: pointer;
`;

interface IAuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </DarkModeBtn>
      </Footer>
    </Container>
  );
}
