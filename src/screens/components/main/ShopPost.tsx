import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";
import styled from "styled-components";
import { Category } from "../shared/sharedStyles";

interface IShopPostProps {
  id: number;
  name: string;
  user?:
    | {
        __typename?: "User" | undefined;
        id: number;
        username: string;
        avatarURL?: string | null | undefined;
      }
    | null
    | undefined;
  photos?:
    | ({
        __typename?: "CoffeeShopPhoto" | undefined;
        id: number;
        url: string;
      } | null)[]
    | null
    | undefined;
  categories?:
    | ({
        __typename?: "Category" | undefined;
        id: number;
        name: string;
        slug: string;
      } | null)[]
    | null
    | undefined;
}

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 10px;
`;
const Header = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;
const UserInfo = styled.div`
  a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
const Username = styled.div`
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
`;
const File = styled.img`
  width: 100%;
`;
const Data = styled.div`
  padding: 15px 10px;
`;
const Categories = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default function ShopPost({
  id,
  name,
  user,
  photos,
  categories,
}: IShopPostProps) {
  return (
    <Container key={id}>
      <Header>
        <Title>{name}</Title>
        <UserInfo>
          <Link to={`/profile/${user?.username}`}>
            <Username>{user?.username}</Username>
            <Avatar url={user?.avatarURL} />
          </Link>
        </UserInfo>
      </Header>
      <Link to={`/shop/${id}`}>
        <File src={photos?.[0]?.url} />
      </Link>
      <Data>
        <Categories>
          {categories?.map((category) => (
            <Link to={`/category/${category?.slug}`} key={category?.id}>
              <Category>{category?.name}</Category>
            </Link>
          ))}
        </Categories>
      </Data>
    </Container>
  );
}
