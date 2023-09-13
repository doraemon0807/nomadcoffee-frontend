import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.accentNormal};
  color: white;
  text-align: center;
  max-width: 300px;
  width: 300px;
  cursor: pointer;
`;

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: IButtonProps) {
  return <SButton onClick={onClick}>{children}</SButton>;
}
