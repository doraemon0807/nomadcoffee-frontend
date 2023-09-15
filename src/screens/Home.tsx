import styled from "styled-components";
import PageTitle from "./components/shared/PageTitle";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import ShopPost from "./components/main/ShopPost";

const FeedContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const SEE_COFFEE_SHOPS = gql(`
query seeCoffeeShops{
  seeCoffeeShops {
    ...ShopFragment
  }
}
`);

export default function Home() {
  const { data } = useQuery(SEE_COFFEE_SHOPS);

  return (
    <FeedContainer>
      <PageTitle title="Main" />
      {data?.seeCoffeeShops?.map(
        (shop) => shop && <ShopPost key={shop.id} {...shop} />
      )}
    </FeedContainer>
  );
}
