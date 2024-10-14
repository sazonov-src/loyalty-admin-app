/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBonuses = /* GraphQL */ `subscription OnCreateBonuses($filter: ModelSubscriptionBonusesFilterInput) {
  onCreateBonuses(filter: $filter) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBonusesSubscriptionVariables,
  APITypes.OnCreateBonusesSubscription
>;
export const onDeleteBonuses = /* GraphQL */ `subscription OnDeleteBonuses($filter: ModelSubscriptionBonusesFilterInput) {
  onDeleteBonuses(filter: $filter) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBonusesSubscriptionVariables,
  APITypes.OnDeleteBonusesSubscription
>;
export const onUpdateBonuses = /* GraphQL */ `subscription OnUpdateBonuses($filter: ModelSubscriptionBonusesFilterInput) {
  onUpdateBonuses(filter: $filter) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBonusesSubscriptionVariables,
  APITypes.OnUpdateBonusesSubscription
>;
