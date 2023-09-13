import { useReactiveVar } from "@apollo/client";
import { styled } from "styled-components";
import { isLoggedInVar } from "../../apollo";
import Avatar from "./shared/Avatar";
import { Link } from "react-router-dom";
import useUser from "../../hook/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faHome } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.fontColor};
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

function NavBar() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const { data } = useUser();

  return (
    <Container>
      <Wrapper>
        <Icons>
          <Link to={"/"}>
            <FontAwesomeIcon size="xl" icon={faHome} color={"gray"} />
          </Link>
          <Link to={"/add"}>
            <FontAwesomeIcon size="xl" icon={faPlusSquare} color={"gray"} />
          </Link>
          <Link to={`/profile/${data?.me.profile?.username}`}>
            {isLoggedIn ? (
              <Avatar url={data?.me?.profile?.avatarURL} size="sm" />
            ) : (
              <Avatar url="" />
            )}
          </Link>
        </Icons>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
