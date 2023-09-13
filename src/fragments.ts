import { gql } from "./__generated__";

export const PHOTO_FRAGMENT = gql(`
  fragment PhotoFragment on CoffeeShopPhoto {
    id
    url
  }
`);

export const CATEGORY_FRAGMENT = gql(`
  fragment CategoryFragment on Category {
    id
    name
    slug
  }
`);

export const USER_FRAGMENT = gql(`
  fragment UserFragment on User {
    id
    username
    avatarURL
  }
`);

export const SHOP_FRAGMENT = gql(`
  fragment ShopFragment on CoffeeShop {
    id
    name
    description
    longitude
    latitude
    isMine
    user {
        ...UserFragment
      }
      photos {
        ...PhotoFragment
      }
      categories {
        ...CategoryFragment
      }
  }
`);
