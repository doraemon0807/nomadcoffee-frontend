import styled from "styled-components";

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  margin: 5px 0px;
  max-width: 300px;
  width: 300px;
`;

export const FormError = styled.span`
  color: red;
`;

export const Category = styled.div`
  padding: 6px;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  margin-right: 4px;
`;
