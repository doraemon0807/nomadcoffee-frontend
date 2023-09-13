import { styled } from "styled-components";
import NavBar from "./NavBar";
import FormBar from "./FormBar";

const Content = styled.main`
  padding-top: 60px;
  padding-bottom: 30px;
  width: 100%;
  margin: 0 auto;
`;

interface IProps {
  children: React.ReactNode;
  form?: boolean;
}

function Layout({ children, form }: IProps) {
  return (
    <>
      {form ? <FormBar /> : <NavBar />}
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
