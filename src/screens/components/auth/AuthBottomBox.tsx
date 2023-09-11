import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  a {
    color: ${(props) => props.theme.accentNormal};
  }
`;

const Cta = styled.span`
  display: flex;
  margin-right: 6px;
`;

interface IAuthBottomBox {
  cta: string;
  route: string;
  linkMessage: string;
}

export default function AuthBottomBox({
  cta,
  route,
  linkMessage,
}: IAuthBottomBox) {
  return (
    <Container>
      <Cta>{cta}</Cta>
      <Link to={route}>{linkMessage}</Link>
    </Container>
  );
}
