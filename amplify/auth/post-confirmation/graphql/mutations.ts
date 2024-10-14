/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const AddBonus = /* GraphQL */ `mutation AddBonus($id: String!) {
  AddBonus(id: $id) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddBonusMutationVariables,
  APITypes.AddBonusMutation
>;
export const WriteOffBonuses = /* GraphQL */ `mutation WriteOffBonuses($decrement: Int!, $id: String!) {
  WriteOffBonuses(decrement: $decrement, id: $id) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.WriteOffBonusesMutationVariables,
  APITypes.WriteOffBonusesMutation
>;
export const createBonuses = /* GraphQL */ `mutation CreateBonuses(
  $condition: ModelBonusesConditionInput
  $input: CreateBonusesInput!
) {
  createBonuses(condition: $condition, input: $input) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBonusesMutationVariables,
  APITypes.CreateBonusesMutation
>;
export const deleteBonuses = /* GraphQL */ `mutation DeleteBonuses(
  $condition: ModelBonusesConditionInput
  $input: DeleteBonusesInput!
) {
  deleteBonuses(condition: $condition, input: $input) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBonusesMutationVariables,
  APITypes.DeleteBonusesMutation
>;
export const updateBonuses = /* GraphQL */ `mutation UpdateBonuses(
  $condition: ModelBonusesConditionInput
  $input: UpdateBonusesInput!
) {
  updateBonuses(condition: $condition, input: $input) {
    bonusPoints
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBonusesMutationVariables,
  APITypes.UpdateBonusesMutation
>;
