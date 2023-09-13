/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment PhotoFragment on CoffeeShopPhoto {\n    id\n    url\n  }\n": types.PhotoFragmentFragmentDoc,
    "\n  fragment CategoryFragment on Category {\n    id\n    name\n    slug\n  }\n": types.CategoryFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    id\n    username\n    avatarURL\n  }\n": types.UserFragmentFragmentDoc,
    "\n  fragment ShopFragment on CoffeeShop {\n    id\n    name\n    description\n    longitude\n    latitude\n    isMine\n    user {\n        ...UserFragment\n      }\n      photos {\n        ...PhotoFragment\n      }\n      categories {\n        ...CategoryFragment\n      }\n  }\n": types.ShopFragmentFragmentDoc,
    "\n  query me {\n    me {\n      profile {\n        ...UserFragment\n      }\n    }\n  }\n": types.MeDocument,
    "\nmutation createCoffeeShop($name: String!, $files: [Upload!]!){\n    createCoffeeShop(name: $name, files: $files) {\n      ok\n      error\n      id\n    }\n  }\n": types.CreateCoffeeShopDocument,
    "\nquery seeCoffeeShops{\n  seeCoffeeShops {\n    ...ShopFragment\n  }\n}\n": types.SeeCoffeeShopsDocument,
    "\nmutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ok\n    error\n    token\n  }\n}\n": types.LoginDocument,
    "\n    query seeCoffeeShop($id: Int!) {\n        seeCoffeeShop(id: $id) {\n            ...ShopFragment\n        }\n    }\n": types.SeeCoffeeShopDocument,
    "\n    mutation deleteCoffeeShop($id: Int!){\n        deleteCoffeeShop(id: $id) {\n            ok\n            error\n        }\n    }\n": types.DeleteCoffeeShopDocument,
    "\nmutation editCoffeeShop($id: Int!, $name: String, $longitude: String, $latitude: String, $categories: String){\n    editCoffeeShop(id: $id, name: $name, longitude: $longitude, latitude: $latitude, categories: $categories) {\n      ok\n      error\n    }\n  }\n  \n": types.EditCoffeeShopDocument,
    "\nmutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!, $githubUsername: String){\n    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password, githubUsername: $githubUsername) {\n      ok\n      error\n    }\n  }\n": types.CreateAccountDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PhotoFragment on CoffeeShopPhoto {\n    id\n    url\n  }\n"): (typeof documents)["\n  fragment PhotoFragment on CoffeeShopPhoto {\n    id\n    url\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CategoryFragment on Category {\n    id\n    name\n    slug\n  }\n"): (typeof documents)["\n  fragment CategoryFragment on Category {\n    id\n    name\n    slug\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFragment on User {\n    id\n    username\n    avatarURL\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    username\n    avatarURL\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ShopFragment on CoffeeShop {\n    id\n    name\n    description\n    longitude\n    latitude\n    isMine\n    user {\n        ...UserFragment\n      }\n      photos {\n        ...PhotoFragment\n      }\n      categories {\n        ...CategoryFragment\n      }\n  }\n"): (typeof documents)["\n  fragment ShopFragment on CoffeeShop {\n    id\n    name\n    description\n    longitude\n    latitude\n    isMine\n    user {\n        ...UserFragment\n      }\n      photos {\n        ...PhotoFragment\n      }\n      categories {\n        ...CategoryFragment\n      }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query me {\n    me {\n      profile {\n        ...UserFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query me {\n    me {\n      profile {\n        ...UserFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createCoffeeShop($name: String!, $files: [Upload!]!){\n    createCoffeeShop(name: $name, files: $files) {\n      ok\n      error\n      id\n    }\n  }\n"): (typeof documents)["\nmutation createCoffeeShop($name: String!, $files: [Upload!]!){\n    createCoffeeShop(name: $name, files: $files) {\n      ok\n      error\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery seeCoffeeShops{\n  seeCoffeeShops {\n    ...ShopFragment\n  }\n}\n"): (typeof documents)["\nquery seeCoffeeShops{\n  seeCoffeeShops {\n    ...ShopFragment\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ok\n    error\n    token\n  }\n}\n"): (typeof documents)["\nmutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ok\n    error\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query seeCoffeeShop($id: Int!) {\n        seeCoffeeShop(id: $id) {\n            ...ShopFragment\n        }\n    }\n"): (typeof documents)["\n    query seeCoffeeShop($id: Int!) {\n        seeCoffeeShop(id: $id) {\n            ...ShopFragment\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation deleteCoffeeShop($id: Int!){\n        deleteCoffeeShop(id: $id) {\n            ok\n            error\n        }\n    }\n"): (typeof documents)["\n    mutation deleteCoffeeShop($id: Int!){\n        deleteCoffeeShop(id: $id) {\n            ok\n            error\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation editCoffeeShop($id: Int!, $name: String, $longitude: String, $latitude: String, $categories: String){\n    editCoffeeShop(id: $id, name: $name, longitude: $longitude, latitude: $latitude, categories: $categories) {\n      ok\n      error\n    }\n  }\n  \n"): (typeof documents)["\nmutation editCoffeeShop($id: Int!, $name: String, $longitude: String, $latitude: String, $categories: String){\n    editCoffeeShop(id: $id, name: $name, longitude: $longitude, latitude: $latitude, categories: $categories) {\n      ok\n      error\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!, $githubUsername: String){\n    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password, githubUsername: $githubUsername) {\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\nmutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!, $githubUsername: String){\n    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password, githubUsername: $githubUsername) {\n      ok\n      error\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;