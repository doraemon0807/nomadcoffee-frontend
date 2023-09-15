import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  cursor: pointer;
`;

export default function FormBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Icons onClick={() => navigate(-1)}>
          <FontAwesomeIcon size="xl" icon={faArrowLeft} color={"gray"} />
        </Icons>
      </Wrapper>
    </Container>
  );
}
