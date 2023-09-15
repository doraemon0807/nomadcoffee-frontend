import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { gql } from "../__generated__";
import { useMutation, useQuery } from "@apollo/client";
import { Category } from "./components/shared/sharedStyles";
import Avatar from "./components/shared/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  DeleteCoffeeShopMutation,
  SeeCoffeeShopQuery,
} from "../__generated__/graphql";
import routes from "../routes";
import { SEE_COFFEE_SHOPS } from "./Home";
import arrayParser from "../hook/categoryParser";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShopCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  max-width: 90%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  overflow: hidden;
  max-height: 85vh;
  height: 100%;
  box-sizing: border-box;
`;
const ImageColumn = styled.div`
  width: 100%;
  place-self: center;
`;

const File = styled.img`
  width: 100%;
  max-height: 80vh;
`;

const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const AvatarWrapper = styled.div`
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 28px;
  margin-right: 12px;
`;

const TitleActions = styled.div`
  display: flex;
`;

const TitleAction = styled.div`
  margin-right: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.grayNormal};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.fontColor};
  }
`;

const DataContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const DataTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 6px;
  margin-bottom: 4px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Categories = styled.div`
  display: flex;
`;

export const SEE_COFFEE_SHOP = gql(`
    query seeCoffeeShop($id: Int!) {
        seeCoffeeShop(id: $id) {
            ...ShopFragment
        }
    }
`);

const DELETE_COFFEE_SHOP = gql(`
    mutation deleteCoffeeShop($id: Int!){
        deleteCoffeeShop(id: $id) {
            ok
            error
        }
    }
`);

export default function Shop() {
  const { id } = useParams();
  const navigate = useNavigate();

  const onSeeShopCompleted = ({ seeCoffeeShop }: SeeCoffeeShopQuery) => {
    if (!seeCoffeeShop?.id) {
      navigate(routes.error404);
    }
  };

  const { data } = useQuery(SEE_COFFEE_SHOP, {
    variables: {
      id: parseInt(id!),
    },
    onCompleted: onSeeShopCompleted,
  });

  const onDeleteCompleted = async ({
    deleteCoffeeShop: { ok, error },
  }: DeleteCoffeeShopMutation) => {
    if (!ok) {
      return alert(error);
    } else {
      navigate(routes.home);
    }
  };

  const [deleteShopMutation, { loading: deleteShopLoading }] = useMutation(
    DELETE_COFFEE_SHOP,
    {
      onCompleted: onDeleteCompleted,
      refetchQueries: [SEE_COFFEE_SHOPS],
    }
  );

  const handleDelete = () => {
    if (!deleteShopLoading) {
      deleteShopMutation({
        variables: {
          id: parseInt(id!),
        },
      });
    }
  };

  return (
    <Container>
      <ShopCard>
        <ImageColumn>
          <File src={data?.seeCoffeeShop?.photos?.[0]?.url} />
        </ImageColumn>
        <DataColumn>
          <Header>
            <TitleContainer>
              <Title>{data?.seeCoffeeShop?.name}</Title>
              {data?.seeCoffeeShop?.isMine ? (
                <TitleActions>
                  <TitleAction
                    onClick={() =>
                      navigate(`/shop/${id}/edit`, {
                        state: {
                          userId: data?.seeCoffeeShop?.user?.id,
                          name: data?.seeCoffeeShop?.name,
                          longitude: data?.seeCoffeeShop?.longitude,
                          latitude: data?.seeCoffeeShop?.latitude,
                          categories: arrayParser(
                            data?.seeCoffeeShop?.categories
                          ),
                        },
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </TitleAction>
                  <TitleAction onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                  </TitleAction>
                </TitleActions>
              ) : null}
            </TitleContainer>
            <AvatarWrapper>
              <Link to={`/profile/${data?.seeCoffeeShop?.user?.username}`}>
                <Username>{data?.seeCoffeeShop?.user?.username}</Username>
                <Avatar url={data?.seeCoffeeShop?.user?.avatarURL} />
              </Link>
            </AvatarWrapper>
          </Header>
          <DataContainer>
            <DataBox>
              <DataTitle>
                <h3>Coordinates</h3>
              </DataTitle>
              <DataInfo>
                <span>
                  {`${data?.seeCoffeeShop?.latitude} : ${data?.seeCoffeeShop?.longitude}`}
                </span>
              </DataInfo>
            </DataBox>
            <DataBox>
              <DataTitle>
                <h3>Description</h3>
              </DataTitle>
              <DataInfo>
                <span>{`${data?.seeCoffeeShop?.description}`}</span>
              </DataInfo>
            </DataBox>
            <DataBox>
              <DataTitle>
                <h3>Categories</h3>
              </DataTitle>
              <DataInfo>
                <Categories>
                  {data?.seeCoffeeShop?.categories?.map((category) => (
                    <Link to={`/category/${category?.slug}`} key={category?.id}>
                      <Category>{category?.name}</Category>
                    </Link>
                  ))}
                </Categories>
              </DataInfo>
            </DataBox>
          </DataContainer>
        </DataColumn>
      </ShopCard>
    </Container>
  );
}
