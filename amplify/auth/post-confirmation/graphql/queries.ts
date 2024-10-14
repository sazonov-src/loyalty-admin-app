/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBonuses = /* GraphQL */ `query GetBonuses($id: ID!) {
  getBonuses(id: $id) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBonusesQueryVariables,
  APITypes.GetBonusesQuery
>;
export const listBonuses = /* GraphQL */ `query ListBonuses(
  $filter: ModelBonusesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBonuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      bonusPoints
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBonusesQueryVariables,
  APITypes.ListBonusesQuery
>;
