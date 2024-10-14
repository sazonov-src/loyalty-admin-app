/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Bonuses = {
  __typename: "Bonuses",
  bonusPoints?: number | null,
  createdAt: string,
  id: string,
  updatedAt: string,
};

export type ModelBonusesFilterInput = {
  and?: Array< ModelBonusesFilterInput | null > | null,
  bonusPoints?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelBonusesFilterInput | null,
  or?: Array< ModelBonusesFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBonusesConnection = {
  __typename: "ModelBonusesConnection",
  items:  Array<Bonuses | null >,
  nextToken?: string | null,
};

export type ModelBonusesConditionInput = {
  and?: Array< ModelBonusesConditionInput | null > | null,
  bonusPoints?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
  not?: ModelBonusesConditionInput | null,
  or?: Array< ModelBonusesConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateBonusesInput = {
  bonusPoints?: number | null,
  id?: string | null,
};

export type DeleteBonusesInput = {
  id: string,
};

export type UpdateBonusesInput = {
  bonusPoints?: number | null,
  id: string,
};

export type ModelSubscriptionBonusesFilterInput = {
  and?: Array< ModelSubscriptionBonusesFilterInput | null > | null,
  bonusPoints?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelStringInput | null,
  or?: Array< ModelSubscriptionBonusesFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type GetBonusesQueryVariables = {
  id: string,
};

export type GetBonusesQuery = {
  getBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListBonusesQueryVariables = {
  filter?: ModelBonusesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBonusesQuery = {
  listBonuses?:  {
    __typename: "ModelBonusesConnection",
    items:  Array< {
      __typename: "Bonuses",
      bonusPoints?: number | null,
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddBonusMutationVariables = {
  id: string,
};

export type AddBonusMutation = {
  AddBonus:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  },
};

export type WriteOffBonusesMutationVariables = {
  decrement: number,
  id: string,
};

export type WriteOffBonusesMutation = {
  WriteOffBonuses:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  },
};

export type CreateBonusesMutationVariables = {
  condition?: ModelBonusesConditionInput | null,
  input: CreateBonusesInput,
};

export type CreateBonusesMutation = {
  createBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteBonusesMutationVariables = {
  condition?: ModelBonusesConditionInput | null,
  input: DeleteBonusesInput,
};

export type DeleteBonusesMutation = {
  deleteBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateBonusesMutationVariables = {
  condition?: ModelBonusesConditionInput | null,
  input: UpdateBonusesInput,
};

export type UpdateBonusesMutation = {
  updateBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBonusesSubscriptionVariables = {
  filter?: ModelSubscriptionBonusesFilterInput | null,
};

export type OnCreateBonusesSubscription = {
  onCreateBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBonusesSubscriptionVariables = {
  filter?: ModelSubscriptionBonusesFilterInput | null,
};

export type OnDeleteBonusesSubscription = {
  onDeleteBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBonusesSubscriptionVariables = {
  filter?: ModelSubscriptionBonusesFilterInput | null,
};

export type OnUpdateBonusesSubscription = {
  onUpdateBonuses?:  {
    __typename: "Bonuses",
    bonusPoints?: number | null,
    createdAt: string,
    id: string,
    updatedAt: string,
  } | null,
};
