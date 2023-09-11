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
    "\nmutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ok\n    error\n    token\n  }\n}\n": types.LoginDocument,
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
export function gql(source: "\nmutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ok\n    error\n    token\n  }\n}\n"): (typeof documents)["\nmutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    ok\n    error\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!, $githubUsername: String){\n    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password, githubUsername: $githubUsername) {\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\nmutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!, $githubUsername: String){\n    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password, githubUsername: $githubUsername) {\n      ok\n      error\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;