import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Object: { input: Record<string, string>; output: Record<string, string>; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  street: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type AddressConnectWhere = {
  node: AddressWhere;
};

export type AddressCreateInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type AddressOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AddressSort objects to sort Addresses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AddressSort>>;
};

/** Fields to sort Addresses by. The order in which sorts are applied is not guaranteed when specifying many fields in one AddressSort object. */
export type AddressSort = {
  city?: InputMaybe<SortDirection>;
  country?: InputMaybe<SortDirection>;
  houseNumber?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  street?: InputMaybe<SortDirection>;
  zipCode?: InputMaybe<SortDirection>;
};

export type AddressUpdateInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type AddressWhere = {
  AND?: InputMaybe<Array<AddressWhere>>;
  NOT?: InputMaybe<AddressWhere>;
  OR?: InputMaybe<Array<AddressWhere>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  city_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  country_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  country_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  country_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  country_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  houseNumber_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  houseNumber_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  houseNumber_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  houseNumber_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  street_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  street_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  street_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  street_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCode_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  zipCode_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  zipCode_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  zipCode_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateProductsMutationResponse = {
  __typename?: 'CreateProductsMutationResponse';
  info: CreateInfo;
  products: Array<Product>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  sum: Scalars['Float']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateOrder?: Maybe<Order>;
  MoveOrderToNextStatus?: Maybe<Order>;
  createProducts: CreateProductsMutationResponse;
  deleteProducts: DeleteInfo;
  updateProducts: UpdateProductsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateOrderArgs = {
  productIds: Array<Scalars['ID']['input']>;
};


export type MutationMoveOrderToNextStatusArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationCreateProductsArgs = {
  input: Array<ProductCreateInput>;
};


export type MutationDeleteProductsArgs = {
  where?: InputMaybe<ProductWhere>;
};


export type MutationUpdateProductsArgs = {
  update?: InputMaybe<ProductUpdateInput>;
  where?: InputMaybe<ProductWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

export type Order = {
  __typename?: 'Order';
  created?: Maybe<Scalars['DateTime']['output']>;
  customer: User;
  customerAggregate?: Maybe<OrderUserCustomerAggregationSelection>;
  customerConnection: OrderCustomerConnection;
  id: Scalars['ID']['output'];
  items: Array<Product>;
  itemsAggregate?: Maybe<OrderProductItemsAggregationSelection>;
  itemsConnection: OrderItemsConnection;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  status: OrderStatus;
};


export type OrderCustomerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type OrderCustomerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type OrderCustomerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrderCustomerConnectionSort>>;
  where?: InputMaybe<OrderCustomerConnectionWhere>;
};


export type OrderItemsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProductOptions>;
  where?: InputMaybe<ProductWhere>;
};


export type OrderItemsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductWhere>;
};


export type OrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrderItemsConnectionSort>>;
  where?: InputMaybe<OrderItemsConnectionWhere>;
};

export type OrderAggregateSelection = {
  __typename?: 'OrderAggregateSelection';
  count: Scalars['Int']['output'];
  created: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  lastModified: DateTimeAggregateSelectionNullable;
};

export type OrderConnectInput = {
  customer?: InputMaybe<OrderCustomerConnectFieldInput>;
  items?: InputMaybe<Array<OrderItemsConnectFieldInput>>;
};

export type OrderConnectWhere = {
  node: OrderWhere;
};

export type OrderCreateInput = {
  customer?: InputMaybe<OrderCustomerFieldInput>;
  items?: InputMaybe<OrderItemsFieldInput>;
  status: OrderStatus;
};

export type OrderCustomerAggregateInput = {
  AND?: InputMaybe<Array<OrderCustomerAggregateInput>>;
  NOT?: InputMaybe<OrderCustomerAggregateInput>;
  OR?: InputMaybe<Array<OrderCustomerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrderCustomerNodeAggregationWhereInput>;
};

export type OrderCustomerConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type OrderCustomerConnection = {
  __typename?: 'OrderCustomerConnection';
  edges: Array<OrderCustomerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderCustomerConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type OrderCustomerConnectionWhere = {
  AND?: InputMaybe<Array<OrderCustomerConnectionWhere>>;
  NOT?: InputMaybe<OrderCustomerConnectionWhere>;
  OR?: InputMaybe<Array<OrderCustomerConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type OrderCustomerCreateFieldInput = {
  node: UserCreateInput;
};

export type OrderCustomerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<OrderCustomerConnectionWhere>;
};

export type OrderCustomerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<OrderCustomerConnectionWhere>;
};

export type OrderCustomerFieldInput = {
  connect?: InputMaybe<OrderCustomerConnectFieldInput>;
  create?: InputMaybe<OrderCustomerCreateFieldInput>;
};

export type OrderCustomerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrderCustomerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrderCustomerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrderCustomerNodeAggregationWhereInput>>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderCustomerRelationship = {
  __typename?: 'OrderCustomerRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type OrderCustomerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type OrderCustomerUpdateFieldInput = {
  connect?: InputMaybe<OrderCustomerConnectFieldInput>;
  create?: InputMaybe<OrderCustomerCreateFieldInput>;
  delete?: InputMaybe<OrderCustomerDeleteFieldInput>;
  disconnect?: InputMaybe<OrderCustomerDisconnectFieldInput>;
  update?: InputMaybe<OrderCustomerUpdateConnectionInput>;
  where?: InputMaybe<OrderCustomerConnectionWhere>;
};

export type OrderDeleteInput = {
  customer?: InputMaybe<OrderCustomerDeleteFieldInput>;
  items?: InputMaybe<Array<OrderItemsDeleteFieldInput>>;
};

export type OrderDisconnectInput = {
  customer?: InputMaybe<OrderCustomerDisconnectFieldInput>;
  items?: InputMaybe<Array<OrderItemsDisconnectFieldInput>>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type OrderItemsAggregateInput = {
  AND?: InputMaybe<Array<OrderItemsAggregateInput>>;
  NOT?: InputMaybe<OrderItemsAggregateInput>;
  OR?: InputMaybe<Array<OrderItemsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrderItemsNodeAggregationWhereInput>;
};

export type OrderItemsConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProductConnectWhere>;
};

export type OrderItemsConnectOrCreateFieldInput = {
  onCreate: OrderItemsConnectOrCreateFieldInputOnCreate;
  where: ProductConnectOrCreateWhere;
};

export type OrderItemsConnectOrCreateFieldInputOnCreate = {
  node: ProductOnCreateInput;
};

export type OrderItemsConnection = {
  __typename?: 'OrderItemsConnection';
  edges: Array<OrderItemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderItemsConnectionSort = {
  node?: InputMaybe<ProductSort>;
};

export type OrderItemsConnectionWhere = {
  AND?: InputMaybe<Array<OrderItemsConnectionWhere>>;
  NOT?: InputMaybe<OrderItemsConnectionWhere>;
  OR?: InputMaybe<Array<OrderItemsConnectionWhere>>;
  node?: InputMaybe<ProductWhere>;
};

export type OrderItemsCreateFieldInput = {
  node: ProductCreateInput;
};

export type OrderItemsDeleteFieldInput = {
  where?: InputMaybe<OrderItemsConnectionWhere>;
};

export type OrderItemsDisconnectFieldInput = {
  where?: InputMaybe<OrderItemsConnectionWhere>;
};

export type OrderItemsFieldInput = {
  connect?: InputMaybe<Array<OrderItemsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrderItemsCreateFieldInput>>;
};

export type OrderItemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrderItemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrderItemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrderItemsNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  priceInEuro_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItemsRelationship = {
  __typename?: 'OrderItemsRelationship';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type OrderItemsUpdateConnectionInput = {
  node?: InputMaybe<ProductUpdateInput>;
};

export type OrderItemsUpdateFieldInput = {
  connect?: InputMaybe<Array<OrderItemsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrderItemsCreateFieldInput>>;
  delete?: InputMaybe<Array<OrderItemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrderItemsDisconnectFieldInput>>;
  update?: InputMaybe<OrderItemsUpdateConnectionInput>;
  where?: InputMaybe<OrderItemsConnectionWhere>;
};

export type OrderOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OrderSort objects to sort Orders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrderSort>>;
};

export type OrderProductItemsAggregationSelection = {
  __typename?: 'OrderProductItemsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrderProductItemsNodeAggregateSelection>;
};

export type OrderProductItemsNodeAggregateSelection = {
  __typename?: 'OrderProductItemsNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  priceInEuro: FloatAggregateSelectionNonNullable;
};

/** Fields to sort Orders by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrderSort object. */
export type OrderSort = {
  created?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastModified?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
};

export enum OrderStatus {
  Delivered = 'DELIVERED',
  InProgress = 'IN_PROGRESS',
  New = 'NEW',
  UnderDelivery = 'UNDER_DELIVERY'
}

export type OrderUpdateInput = {
  customer?: InputMaybe<OrderCustomerUpdateFieldInput>;
  items?: InputMaybe<Array<OrderItemsUpdateFieldInput>>;
  status?: InputMaybe<OrderStatus>;
};

export type OrderUserCustomerAggregationSelection = {
  __typename?: 'OrderUserCustomerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrderUserCustomerNodeAggregateSelection>;
};

export type OrderUserCustomerNodeAggregateSelection = {
  __typename?: 'OrderUserCustomerNodeAggregateSelection';
  email: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
};

export type OrderWhere = {
  AND?: InputMaybe<Array<OrderWhere>>;
  NOT?: InputMaybe<OrderWhere>;
  OR?: InputMaybe<Array<OrderWhere>>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  created_GT?: InputMaybe<Scalars['DateTime']['input']>;
  created_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  created_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  created_LT?: InputMaybe<Scalars['DateTime']['input']>;
  created_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<UserWhere>;
  customerAggregate?: InputMaybe<OrderCustomerAggregateInput>;
  customerConnection?: InputMaybe<OrderCustomerConnectionWhere>;
  customerConnection_NOT?: InputMaybe<OrderCustomerConnectionWhere>;
  customer_NOT?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  itemsAggregate?: InputMaybe<OrderItemsAggregateInput>;
  /** Return Orders where all of the related OrderItemsConnections match this filter */
  itemsConnection_ALL?: InputMaybe<OrderItemsConnectionWhere>;
  /** Return Orders where none of the related OrderItemsConnections match this filter */
  itemsConnection_NONE?: InputMaybe<OrderItemsConnectionWhere>;
  /** Return Orders where one of the related OrderItemsConnections match this filter */
  itemsConnection_SINGLE?: InputMaybe<OrderItemsConnectionWhere>;
  /** Return Orders where some of the related OrderItemsConnections match this filter */
  itemsConnection_SOME?: InputMaybe<OrderItemsConnectionWhere>;
  /** Return Orders where all of the related Products match this filter */
  items_ALL?: InputMaybe<ProductWhere>;
  /** Return Orders where none of the related Products match this filter */
  items_NONE?: InputMaybe<ProductWhere>;
  /** Return Orders where one of the related Products match this filter */
  items_SINGLE?: InputMaybe<ProductWhere>;
  /** Return Orders where some of the related Products match this filter */
  items_SOME?: InputMaybe<ProductWhere>;
  lastModified?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_GT?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lastModified_LT?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<OrderStatus>;
  status_IN?: InputMaybe<Array<OrderStatus>>;
};

export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['Object']['output']>;
  id: Scalars['ID']['output'];
  imageUrls: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  priceInEuro: Scalars['Float']['output'];
};

export type ProductAggregateSelection = {
  __typename?: 'ProductAggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  priceInEuro: FloatAggregateSelectionNonNullable;
};

export type ProductConnectOrCreateWhere = {
  node: ProductUniqueWhere;
};

export type ProductConnectWhere = {
  node: ProductWhere;
};

export type ProductCreateInput = {
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['Object']['input']>;
  imageUrls: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  priceInEuro: Scalars['Float']['input'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductOnCreateInput = {
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['Object']['input']>;
  imageUrls: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  priceInEuro: Scalars['Float']['input'];
};

export type ProductOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProductSort objects to sort Products by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProductSort>>;
};

/** Fields to sort Products by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProductSort object. */
export type ProductSort = {
  description?: InputMaybe<SortDirection>;
  details?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  priceInEuro?: InputMaybe<SortDirection>;
};

export type ProductUniqueWhere = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['Object']['input']>;
  imageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUrls_POP?: InputMaybe<Scalars['Int']['input']>;
  imageUrls_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceInEuro?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_ADD?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductWhere = {
  AND?: InputMaybe<Array<ProductWhere>>;
  NOT?: InputMaybe<ProductWhere>;
  OR?: InputMaybe<Array<ProductWhere>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['Object']['input']>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars['Object']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  imageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUrls_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  priceInEuro?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_GT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_GTE?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_IN?: InputMaybe<Array<Scalars['Float']['input']>>;
  priceInEuro_LT?: InputMaybe<Scalars['Float']['input']>;
  priceInEuro_LTE?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllOrder: Array<Order>;
  getOrderById?: Maybe<Order>;
  orders: Array<Order>;
  ordersAggregate: OrderAggregateSelection;
  ordersConnection: OrdersConnection;
  products: Array<Product>;
  productsAggregate: ProductAggregateSelection;
  productsConnection: ProductsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryGetAllOrderArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderStatuses: Array<OrderStatus>;
};


export type QueryGetOrderByIdArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  options?: InputMaybe<OrderOptions>;
  where?: InputMaybe<OrderWhere>;
};


export type QueryOrdersAggregateArgs = {
  where?: InputMaybe<OrderWhere>;
};


export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OrderSort>>>;
  where?: InputMaybe<OrderWhere>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductOptions>;
  where?: InputMaybe<ProductWhere>;
};


export type QueryProductsAggregateArgs = {
  where?: InputMaybe<ProductWhere>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProductSort>>>;
  where?: InputMaybe<ProductWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateProductsMutationResponse = {
  __typename?: 'UpdateProductsMutationResponse';
  info: UpdateInfo;
  products: Array<Product>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  addresses: Array<Address>;
  addressesAggregate?: Maybe<UserAddressAddressesAggregationSelection>;
  addressesConnection: UserAddressesConnection;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  orders: Array<Order>;
  ordersAggregate?: Maybe<UserOrderOrdersAggregationSelection>;
  ordersConnection: UserOrdersConnection;
  roles: Array<Scalars['String']['output']>;
};


export type UserAddressesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AddressOptions>;
  where?: InputMaybe<AddressWhere>;
};


export type UserAddressesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AddressWhere>;
};


export type UserAddressesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserAddressesConnectionSort>>;
  where?: InputMaybe<UserAddressesConnectionWhere>;
};


export type UserOrdersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrderOptions>;
  where?: InputMaybe<OrderWhere>;
};


export type UserOrdersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrderWhere>;
};


export type UserOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserOrdersConnectionSort>>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserAddressAddressesAggregationSelection = {
  __typename?: 'UserAddressAddressesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserAddressAddressesNodeAggregateSelection>;
};

export type UserAddressAddressesNodeAggregateSelection = {
  __typename?: 'UserAddressAddressesNodeAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  country: StringAggregateSelectionNonNullable;
  houseNumber: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  street: StringAggregateSelectionNonNullable;
  zipCode: StringAggregateSelectionNonNullable;
};

export type UserAddressesAggregateInput = {
  AND?: InputMaybe<Array<UserAddressesAggregateInput>>;
  NOT?: InputMaybe<UserAddressesAggregateInput>;
  OR?: InputMaybe<Array<UserAddressesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserAddressesNodeAggregationWhereInput>;
};

export type UserAddressesConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AddressConnectWhere>;
};

export type UserAddressesConnection = {
  __typename?: 'UserAddressesConnection';
  edges: Array<UserAddressesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserAddressesConnectionSort = {
  node?: InputMaybe<AddressSort>;
};

export type UserAddressesConnectionWhere = {
  AND?: InputMaybe<Array<UserAddressesConnectionWhere>>;
  NOT?: InputMaybe<UserAddressesConnectionWhere>;
  OR?: InputMaybe<Array<UserAddressesConnectionWhere>>;
  node?: InputMaybe<AddressWhere>;
};

export type UserAddressesCreateFieldInput = {
  node: AddressCreateInput;
};

export type UserAddressesDeleteFieldInput = {
  where?: InputMaybe<UserAddressesConnectionWhere>;
};

export type UserAddressesDisconnectFieldInput = {
  where?: InputMaybe<UserAddressesConnectionWhere>;
};

export type UserAddressesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAddressesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserAddressesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserAddressesNodeAggregationWhereInput>>;
  city_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  city_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  city_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  city_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  country_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  country_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  country_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  houseNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  houseNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  houseNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  houseNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  houseNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  houseNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  street_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  street_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  street_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  street_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  street_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  street_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  street_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  street_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  street_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  street_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  street_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  street_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  street_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  street_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  street_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zipCode_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  zipCode_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  zipCode_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  zipCode_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  zipCode_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  zipCode_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zipCode_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zipCode_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zipCode_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zipCode_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  zipCode_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  zipCode_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  zipCode_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  zipCode_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  zipCode_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAddressesRelationship = {
  __typename?: 'UserAddressesRelationship';
  cursor: Scalars['String']['output'];
  node: Address;
};

export type UserAddressesUpdateConnectionInput = {
  node?: InputMaybe<AddressUpdateInput>;
};

export type UserAddressesUpdateFieldInput = {
  connect?: InputMaybe<Array<UserAddressesConnectFieldInput>>;
  create?: InputMaybe<Array<UserAddressesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserAddressesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserAddressesDisconnectFieldInput>>;
  update?: InputMaybe<UserAddressesUpdateConnectionInput>;
  where?: InputMaybe<UserAddressesConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  email: StringAggregateSelectionNonNullable;
  firstName: StringAggregateSelectionNonNullable;
  lastName: StringAggregateSelectionNonNullable;
};

export type UserConnectInput = {
  addresses?: InputMaybe<Array<UserAddressesConnectFieldInput>>;
  orders?: InputMaybe<Array<UserOrdersConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  orders?: InputMaybe<UserOrdersFieldInput>;
};

export type UserDeleteInput = {
  addresses?: InputMaybe<Array<UserAddressesDeleteFieldInput>>;
  orders?: InputMaybe<Array<UserOrdersDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  addresses?: InputMaybe<Array<UserAddressesDisconnectFieldInput>>;
  orders?: InputMaybe<Array<UserOrdersDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserOrderOrdersAggregationSelection = {
  __typename?: 'UserOrderOrdersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserOrderOrdersNodeAggregateSelection>;
};

export type UserOrderOrdersNodeAggregateSelection = {
  __typename?: 'UserOrderOrdersNodeAggregateSelection';
  created: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  lastModified: DateTimeAggregateSelectionNullable;
};

export type UserOrdersAggregateInput = {
  AND?: InputMaybe<Array<UserOrdersAggregateInput>>;
  NOT?: InputMaybe<UserOrdersAggregateInput>;
  OR?: InputMaybe<Array<UserOrdersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserOrdersNodeAggregationWhereInput>;
};

export type UserOrdersConnectFieldInput = {
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrderConnectWhere>;
};

export type UserOrdersConnection = {
  __typename?: 'UserOrdersConnection';
  edges: Array<UserOrdersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserOrdersConnectionSort = {
  node?: InputMaybe<OrderSort>;
};

export type UserOrdersConnectionWhere = {
  AND?: InputMaybe<Array<UserOrdersConnectionWhere>>;
  NOT?: InputMaybe<UserOrdersConnectionWhere>;
  OR?: InputMaybe<Array<UserOrdersConnectionWhere>>;
  node?: InputMaybe<OrderWhere>;
};

export type UserOrdersCreateFieldInput = {
  node: OrderCreateInput;
};

export type UserOrdersDeleteFieldInput = {
  delete?: InputMaybe<OrderDeleteInput>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserOrdersDisconnectFieldInput = {
  disconnect?: InputMaybe<OrderDisconnectInput>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserOrdersFieldInput = {
  connect?: InputMaybe<Array<UserOrdersConnectFieldInput>>;
  create?: InputMaybe<Array<UserOrdersCreateFieldInput>>;
};

export type UserOrdersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserOrdersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserOrdersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserOrdersNodeAggregationWhereInput>>;
  created_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  created_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  created_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  created_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  created_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  created_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  created_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  created_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  created_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  created_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  lastModified_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserOrdersRelationship = {
  __typename?: 'UserOrdersRelationship';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type UserOrdersUpdateConnectionInput = {
  node?: InputMaybe<OrderUpdateInput>;
};

export type UserOrdersUpdateFieldInput = {
  connect?: InputMaybe<Array<UserOrdersConnectFieldInput>>;
  create?: InputMaybe<Array<UserOrdersCreateFieldInput>>;
  delete?: InputMaybe<Array<UserOrdersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserOrdersDisconnectFieldInput>>;
  update?: InputMaybe<UserOrdersUpdateConnectionInput>;
  where?: InputMaybe<UserOrdersConnectionWhere>;
};

export type UserRelationInput = {
  addresses?: InputMaybe<Array<UserAddressesCreateFieldInput>>;
  orders?: InputMaybe<Array<UserOrdersCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  email?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  addresses?: InputMaybe<Array<UserAddressesUpdateFieldInput>>;
  orders?: InputMaybe<Array<UserOrdersUpdateFieldInput>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  addressesAggregate?: InputMaybe<UserAddressesAggregateInput>;
  /** Return Users where all of the related UserAddressesConnections match this filter */
  addressesConnection_ALL?: InputMaybe<UserAddressesConnectionWhere>;
  /** Return Users where none of the related UserAddressesConnections match this filter */
  addressesConnection_NONE?: InputMaybe<UserAddressesConnectionWhere>;
  /** Return Users where one of the related UserAddressesConnections match this filter */
  addressesConnection_SINGLE?: InputMaybe<UserAddressesConnectionWhere>;
  /** Return Users where some of the related UserAddressesConnections match this filter */
  addressesConnection_SOME?: InputMaybe<UserAddressesConnectionWhere>;
  /** Return Users where all of the related Addresses match this filter */
  addresses_ALL?: InputMaybe<AddressWhere>;
  /** Return Users where none of the related Addresses match this filter */
  addresses_NONE?: InputMaybe<AddressWhere>;
  /** Return Users where one of the related Addresses match this filter */
  addresses_SINGLE?: InputMaybe<AddressWhere>;
  /** Return Users where some of the related Addresses match this filter */
  addresses_SOME?: InputMaybe<AddressWhere>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  firstName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  firstName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  firstName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  lastName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  lastName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  lastName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  ordersAggregate?: InputMaybe<UserOrdersAggregateInput>;
  /** Return Users where all of the related UserOrdersConnections match this filter */
  ordersConnection_ALL?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where none of the related UserOrdersConnections match this filter */
  ordersConnection_NONE?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where one of the related UserOrdersConnections match this filter */
  ordersConnection_SINGLE?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where some of the related UserOrdersConnections match this filter */
  ordersConnection_SOME?: InputMaybe<UserOrdersConnectionWhere>;
  /** Return Users where all of the related Orders match this filter */
  orders_ALL?: InputMaybe<OrderWhere>;
  /** Return Users where none of the related Orders match this filter */
  orders_NONE?: InputMaybe<OrderWhere>;
  /** Return Users where one of the related Orders match this filter */
  orders_SINGLE?: InputMaybe<OrderWhere>;
  /** Return Users where some of the related Orders match this filter */
  orders_SOME?: InputMaybe<OrderWhere>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  roles_INCLUDES?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AddressConnectWhere: AddressConnectWhere;
  AddressCreateInput: AddressCreateInput;
  AddressOptions: AddressOptions;
  AddressSort: AddressSort;
  AddressUpdateInput: AddressUpdateInput;
  AddressWhere: AddressWhere;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateProductsMutationResponse: ResolverTypeWrapper<CreateProductsMutationResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeAggregateSelectionNullable: ResolverTypeWrapper<DateTimeAggregateSelectionNullable>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatAggregateSelectionNonNullable: ResolverTypeWrapper<FloatAggregateSelectionNonNullable>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDAggregateSelectionNonNullable: ResolverTypeWrapper<IdAggregateSelectionNonNullable>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Object: ResolverTypeWrapper<Scalars['Object']['output']>;
  Order: ResolverTypeWrapper<Order>;
  OrderAggregateSelection: ResolverTypeWrapper<OrderAggregateSelection>;
  OrderConnectInput: OrderConnectInput;
  OrderConnectWhere: OrderConnectWhere;
  OrderCreateInput: OrderCreateInput;
  OrderCustomerAggregateInput: OrderCustomerAggregateInput;
  OrderCustomerConnectFieldInput: OrderCustomerConnectFieldInput;
  OrderCustomerConnection: ResolverTypeWrapper<OrderCustomerConnection>;
  OrderCustomerConnectionSort: OrderCustomerConnectionSort;
  OrderCustomerConnectionWhere: OrderCustomerConnectionWhere;
  OrderCustomerCreateFieldInput: OrderCustomerCreateFieldInput;
  OrderCustomerDeleteFieldInput: OrderCustomerDeleteFieldInput;
  OrderCustomerDisconnectFieldInput: OrderCustomerDisconnectFieldInput;
  OrderCustomerFieldInput: OrderCustomerFieldInput;
  OrderCustomerNodeAggregationWhereInput: OrderCustomerNodeAggregationWhereInput;
  OrderCustomerRelationship: ResolverTypeWrapper<OrderCustomerRelationship>;
  OrderCustomerUpdateConnectionInput: OrderCustomerUpdateConnectionInput;
  OrderCustomerUpdateFieldInput: OrderCustomerUpdateFieldInput;
  OrderDeleteInput: OrderDeleteInput;
  OrderDisconnectInput: OrderDisconnectInput;
  OrderEdge: ResolverTypeWrapper<OrderEdge>;
  OrderItemsAggregateInput: OrderItemsAggregateInput;
  OrderItemsConnectFieldInput: OrderItemsConnectFieldInput;
  OrderItemsConnectOrCreateFieldInput: OrderItemsConnectOrCreateFieldInput;
  OrderItemsConnectOrCreateFieldInputOnCreate: OrderItemsConnectOrCreateFieldInputOnCreate;
  OrderItemsConnection: ResolverTypeWrapper<OrderItemsConnection>;
  OrderItemsConnectionSort: OrderItemsConnectionSort;
  OrderItemsConnectionWhere: OrderItemsConnectionWhere;
  OrderItemsCreateFieldInput: OrderItemsCreateFieldInput;
  OrderItemsDeleteFieldInput: OrderItemsDeleteFieldInput;
  OrderItemsDisconnectFieldInput: OrderItemsDisconnectFieldInput;
  OrderItemsFieldInput: OrderItemsFieldInput;
  OrderItemsNodeAggregationWhereInput: OrderItemsNodeAggregationWhereInput;
  OrderItemsRelationship: ResolverTypeWrapper<OrderItemsRelationship>;
  OrderItemsUpdateConnectionInput: OrderItemsUpdateConnectionInput;
  OrderItemsUpdateFieldInput: OrderItemsUpdateFieldInput;
  OrderOptions: OrderOptions;
  OrderProductItemsAggregationSelection: ResolverTypeWrapper<OrderProductItemsAggregationSelection>;
  OrderProductItemsNodeAggregateSelection: ResolverTypeWrapper<OrderProductItemsNodeAggregateSelection>;
  OrderSort: OrderSort;
  OrderStatus: OrderStatus;
  OrderUpdateInput: OrderUpdateInput;
  OrderUserCustomerAggregationSelection: ResolverTypeWrapper<OrderUserCustomerAggregationSelection>;
  OrderUserCustomerNodeAggregateSelection: ResolverTypeWrapper<OrderUserCustomerNodeAggregateSelection>;
  OrderWhere: OrderWhere;
  OrdersConnection: ResolverTypeWrapper<OrdersConnection>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Product: ResolverTypeWrapper<Product>;
  ProductAggregateSelection: ResolverTypeWrapper<ProductAggregateSelection>;
  ProductConnectOrCreateWhere: ProductConnectOrCreateWhere;
  ProductConnectWhere: ProductConnectWhere;
  ProductCreateInput: ProductCreateInput;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductOnCreateInput: ProductOnCreateInput;
  ProductOptions: ProductOptions;
  ProductSort: ProductSort;
  ProductUniqueWhere: ProductUniqueWhere;
  ProductUpdateInput: ProductUpdateInput;
  ProductWhere: ProductWhere;
  ProductsConnection: ResolverTypeWrapper<ProductsConnection>;
  Query: ResolverTypeWrapper<{}>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateProductsMutationResponse: ResolverTypeWrapper<UpdateProductsMutationResponse>;
  UpdateUsersMutationResponse: ResolverTypeWrapper<UpdateUsersMutationResponse>;
  User: ResolverTypeWrapper<User>;
  UserAddressAddressesAggregationSelection: ResolverTypeWrapper<UserAddressAddressesAggregationSelection>;
  UserAddressAddressesNodeAggregateSelection: ResolverTypeWrapper<UserAddressAddressesNodeAggregateSelection>;
  UserAddressesAggregateInput: UserAddressesAggregateInput;
  UserAddressesConnectFieldInput: UserAddressesConnectFieldInput;
  UserAddressesConnection: ResolverTypeWrapper<UserAddressesConnection>;
  UserAddressesConnectionSort: UserAddressesConnectionSort;
  UserAddressesConnectionWhere: UserAddressesConnectionWhere;
  UserAddressesCreateFieldInput: UserAddressesCreateFieldInput;
  UserAddressesDeleteFieldInput: UserAddressesDeleteFieldInput;
  UserAddressesDisconnectFieldInput: UserAddressesDisconnectFieldInput;
  UserAddressesNodeAggregationWhereInput: UserAddressesNodeAggregationWhereInput;
  UserAddressesRelationship: ResolverTypeWrapper<UserAddressesRelationship>;
  UserAddressesUpdateConnectionInput: UserAddressesUpdateConnectionInput;
  UserAddressesUpdateFieldInput: UserAddressesUpdateFieldInput;
  UserAggregateSelection: ResolverTypeWrapper<UserAggregateSelection>;
  UserConnectInput: UserConnectInput;
  UserConnectWhere: UserConnectWhere;
  UserCreateInput: UserCreateInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectInput: UserDisconnectInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserOptions: UserOptions;
  UserOrderOrdersAggregationSelection: ResolverTypeWrapper<UserOrderOrdersAggregationSelection>;
  UserOrderOrdersNodeAggregateSelection: ResolverTypeWrapper<UserOrderOrdersNodeAggregateSelection>;
  UserOrdersAggregateInput: UserOrdersAggregateInput;
  UserOrdersConnectFieldInput: UserOrdersConnectFieldInput;
  UserOrdersConnection: ResolverTypeWrapper<UserOrdersConnection>;
  UserOrdersConnectionSort: UserOrdersConnectionSort;
  UserOrdersConnectionWhere: UserOrdersConnectionWhere;
  UserOrdersCreateFieldInput: UserOrdersCreateFieldInput;
  UserOrdersDeleteFieldInput: UserOrdersDeleteFieldInput;
  UserOrdersDisconnectFieldInput: UserOrdersDisconnectFieldInput;
  UserOrdersFieldInput: UserOrdersFieldInput;
  UserOrdersNodeAggregationWhereInput: UserOrdersNodeAggregationWhereInput;
  UserOrdersRelationship: ResolverTypeWrapper<UserOrdersRelationship>;
  UserOrdersUpdateConnectionInput: UserOrdersUpdateConnectionInput;
  UserOrdersUpdateFieldInput: UserOrdersUpdateFieldInput;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressConnectWhere: AddressConnectWhere;
  AddressCreateInput: AddressCreateInput;
  AddressOptions: AddressOptions;
  AddressSort: AddressSort;
  AddressUpdateInput: AddressUpdateInput;
  AddressWhere: AddressWhere;
  Boolean: Scalars['Boolean']['output'];
  CreateInfo: CreateInfo;
  CreateProductsMutationResponse: CreateProductsMutationResponse;
  DateTime: Scalars['DateTime']['output'];
  DateTimeAggregateSelectionNullable: DateTimeAggregateSelectionNullable;
  DeleteInfo: DeleteInfo;
  Float: Scalars['Float']['output'];
  FloatAggregateSelectionNonNullable: FloatAggregateSelectionNonNullable;
  ID: Scalars['ID']['output'];
  IDAggregateSelectionNonNullable: IdAggregateSelectionNonNullable;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Object: Scalars['Object']['output'];
  Order: Order;
  OrderAggregateSelection: OrderAggregateSelection;
  OrderConnectInput: OrderConnectInput;
  OrderConnectWhere: OrderConnectWhere;
  OrderCreateInput: OrderCreateInput;
  OrderCustomerAggregateInput: OrderCustomerAggregateInput;
  OrderCustomerConnectFieldInput: OrderCustomerConnectFieldInput;
  OrderCustomerConnection: OrderCustomerConnection;
  OrderCustomerConnectionSort: OrderCustomerConnectionSort;
  OrderCustomerConnectionWhere: OrderCustomerConnectionWhere;
  OrderCustomerCreateFieldInput: OrderCustomerCreateFieldInput;
  OrderCustomerDeleteFieldInput: OrderCustomerDeleteFieldInput;
  OrderCustomerDisconnectFieldInput: OrderCustomerDisconnectFieldInput;
  OrderCustomerFieldInput: OrderCustomerFieldInput;
  OrderCustomerNodeAggregationWhereInput: OrderCustomerNodeAggregationWhereInput;
  OrderCustomerRelationship: OrderCustomerRelationship;
  OrderCustomerUpdateConnectionInput: OrderCustomerUpdateConnectionInput;
  OrderCustomerUpdateFieldInput: OrderCustomerUpdateFieldInput;
  OrderDeleteInput: OrderDeleteInput;
  OrderDisconnectInput: OrderDisconnectInput;
  OrderEdge: OrderEdge;
  OrderItemsAggregateInput: OrderItemsAggregateInput;
  OrderItemsConnectFieldInput: OrderItemsConnectFieldInput;
  OrderItemsConnectOrCreateFieldInput: OrderItemsConnectOrCreateFieldInput;
  OrderItemsConnectOrCreateFieldInputOnCreate: OrderItemsConnectOrCreateFieldInputOnCreate;
  OrderItemsConnection: OrderItemsConnection;
  OrderItemsConnectionSort: OrderItemsConnectionSort;
  OrderItemsConnectionWhere: OrderItemsConnectionWhere;
  OrderItemsCreateFieldInput: OrderItemsCreateFieldInput;
  OrderItemsDeleteFieldInput: OrderItemsDeleteFieldInput;
  OrderItemsDisconnectFieldInput: OrderItemsDisconnectFieldInput;
  OrderItemsFieldInput: OrderItemsFieldInput;
  OrderItemsNodeAggregationWhereInput: OrderItemsNodeAggregationWhereInput;
  OrderItemsRelationship: OrderItemsRelationship;
  OrderItemsUpdateConnectionInput: OrderItemsUpdateConnectionInput;
  OrderItemsUpdateFieldInput: OrderItemsUpdateFieldInput;
  OrderOptions: OrderOptions;
  OrderProductItemsAggregationSelection: OrderProductItemsAggregationSelection;
  OrderProductItemsNodeAggregateSelection: OrderProductItemsNodeAggregateSelection;
  OrderSort: OrderSort;
  OrderUpdateInput: OrderUpdateInput;
  OrderUserCustomerAggregationSelection: OrderUserCustomerAggregationSelection;
  OrderUserCustomerNodeAggregateSelection: OrderUserCustomerNodeAggregateSelection;
  OrderWhere: OrderWhere;
  OrdersConnection: OrdersConnection;
  PageInfo: PageInfo;
  Product: Product;
  ProductAggregateSelection: ProductAggregateSelection;
  ProductConnectOrCreateWhere: ProductConnectOrCreateWhere;
  ProductConnectWhere: ProductConnectWhere;
  ProductCreateInput: ProductCreateInput;
  ProductEdge: ProductEdge;
  ProductOnCreateInput: ProductOnCreateInput;
  ProductOptions: ProductOptions;
  ProductSort: ProductSort;
  ProductUniqueWhere: ProductUniqueWhere;
  ProductUpdateInput: ProductUpdateInput;
  ProductWhere: ProductWhere;
  ProductsConnection: ProductsConnection;
  Query: {};
  String: Scalars['String']['output'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  UpdateInfo: UpdateInfo;
  UpdateProductsMutationResponse: UpdateProductsMutationResponse;
  UpdateUsersMutationResponse: UpdateUsersMutationResponse;
  User: User;
  UserAddressAddressesAggregationSelection: UserAddressAddressesAggregationSelection;
  UserAddressAddressesNodeAggregateSelection: UserAddressAddressesNodeAggregateSelection;
  UserAddressesAggregateInput: UserAddressesAggregateInput;
  UserAddressesConnectFieldInput: UserAddressesConnectFieldInput;
  UserAddressesConnection: UserAddressesConnection;
  UserAddressesConnectionSort: UserAddressesConnectionSort;
  UserAddressesConnectionWhere: UserAddressesConnectionWhere;
  UserAddressesCreateFieldInput: UserAddressesCreateFieldInput;
  UserAddressesDeleteFieldInput: UserAddressesDeleteFieldInput;
  UserAddressesDisconnectFieldInput: UserAddressesDisconnectFieldInput;
  UserAddressesNodeAggregationWhereInput: UserAddressesNodeAggregationWhereInput;
  UserAddressesRelationship: UserAddressesRelationship;
  UserAddressesUpdateConnectionInput: UserAddressesUpdateConnectionInput;
  UserAddressesUpdateFieldInput: UserAddressesUpdateFieldInput;
  UserAggregateSelection: UserAggregateSelection;
  UserConnectInput: UserConnectInput;
  UserConnectWhere: UserConnectWhere;
  UserCreateInput: UserCreateInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectInput: UserDisconnectInput;
  UserEdge: UserEdge;
  UserOptions: UserOptions;
  UserOrderOrdersAggregationSelection: UserOrderOrdersAggregationSelection;
  UserOrderOrdersNodeAggregateSelection: UserOrderOrdersNodeAggregateSelection;
  UserOrdersAggregateInput: UserOrdersAggregateInput;
  UserOrdersConnectFieldInput: UserOrdersConnectFieldInput;
  UserOrdersConnection: UserOrdersConnection;
  UserOrdersConnectionSort: UserOrdersConnectionSort;
  UserOrdersConnectionWhere: UserOrdersConnectionWhere;
  UserOrdersCreateFieldInput: UserOrdersCreateFieldInput;
  UserOrdersDeleteFieldInput: UserOrdersDeleteFieldInput;
  UserOrdersDisconnectFieldInput: UserOrdersDisconnectFieldInput;
  UserOrdersFieldInput: UserOrdersFieldInput;
  UserOrdersNodeAggregationWhereInput: UserOrdersNodeAggregationWhereInput;
  UserOrdersRelationship: UserOrdersRelationship;
  UserOrdersUpdateConnectionInput: UserOrdersUpdateConnectionInput;
  UserOrdersUpdateFieldInput: UserOrdersUpdateFieldInput;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
  UsersConnection: UsersConnection;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductsMutationResponse'] = ResolversParentTypes['CreateProductsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DateTimeAggregateSelectionNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateTimeAggregateSelectionNullable'] = ResolversParentTypes['DateTimeAggregateSelectionNullable']> = {
  max?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FloatAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatAggregateSelectionNonNullable'] = ResolversParentTypes['FloatAggregateSelectionNonNullable']> = {
  average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDAggregateSelectionNonNullable'] = ResolversParentTypes['IDAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  CreateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'productIds'>>;
  MoveOrderToNextStatus?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationMoveOrderToNextStatusArgs, 'orderId'>>;
  createProducts?: Resolver<ResolversTypes['CreateProductsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateProductsArgs, 'input'>>;
  deleteProducts?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteProductsArgs>>;
  updateProducts?: Resolver<ResolversTypes['UpdateProductsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateProductsArgs>>;
  updateUsers?: Resolver<ResolversTypes['UpdateUsersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateUsersArgs>>;
};

export interface ObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Object'], any> {
  name: 'Object';
}

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<OrderCustomerArgs, 'directed'>>;
  customerAggregate?: Resolver<Maybe<ResolversTypes['OrderUserCustomerAggregationSelection']>, ParentType, ContextType, RequireFields<OrderCustomerAggregateArgs, 'directed'>>;
  customerConnection?: Resolver<ResolversTypes['OrderCustomerConnection'], ParentType, ContextType, RequireFields<OrderCustomerConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<OrderItemsArgs, 'directed'>>;
  itemsAggregate?: Resolver<Maybe<ResolversTypes['OrderProductItemsAggregationSelection']>, ParentType, ContextType, RequireFields<OrderItemsAggregateArgs, 'directed'>>;
  itemsConnection?: Resolver<ResolversTypes['OrderItemsConnection'], ParentType, ContextType, RequireFields<OrderItemsConnectionArgs, 'directed'>>;
  lastModified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAggregateSelection'] = ResolversParentTypes['OrderAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  lastModified?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCustomerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCustomerConnection'] = ResolversParentTypes['OrderCustomerConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderCustomerRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCustomerRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCustomerRelationship'] = ResolversParentTypes['OrderCustomerRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderEdge'] = ResolversParentTypes['OrderEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItemsConnection'] = ResolversParentTypes['OrderItemsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderItemsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItemsRelationship'] = ResolversParentTypes['OrderItemsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderProductItemsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductItemsAggregationSelection'] = ResolversParentTypes['OrderProductItemsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrderProductItemsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderProductItemsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProductItemsNodeAggregateSelection'] = ResolversParentTypes['OrderProductItemsNodeAggregateSelection']> = {
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  priceInEuro?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderUserCustomerAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderUserCustomerAggregationSelection'] = ResolversParentTypes['OrderUserCustomerAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrderUserCustomerNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderUserCustomerNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderUserCustomerNodeAggregateSelection'] = ResolversParentTypes['OrderUserCustomerNodeAggregateSelection']> = {
  email?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrdersConnection'] = ResolversParentTypes['OrdersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Object']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrls?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceInEuro?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAggregateSelection'] = ResolversParentTypes['ProductAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  priceInEuro?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsConnection'] = ResolversParentTypes['ProductsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllOrder?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetAllOrderArgs, 'limit' | 'offset' | 'orderStatuses'>>;
  getOrderById?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetOrderByIdArgs, 'orderId'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, Partial<QueryOrdersArgs>>;
  ordersAggregate?: Resolver<ResolversTypes['OrderAggregateSelection'], ParentType, ContextType, Partial<QueryOrdersAggregateArgs>>;
  ordersConnection?: Resolver<ResolversTypes['OrdersConnection'], ParentType, ContextType, Partial<QueryOrdersConnectionArgs>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProductsArgs>>;
  productsAggregate?: Resolver<ResolversTypes['ProductAggregateSelection'], ParentType, ContextType, Partial<QueryProductsAggregateArgs>>;
  productsConnection?: Resolver<ResolversTypes['ProductsConnection'], ParentType, ContextType, Partial<QueryProductsConnectionArgs>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  usersAggregate?: Resolver<ResolversTypes['UserAggregateSelection'], ParentType, ContextType, Partial<QueryUsersAggregateArgs>>;
  usersConnection?: Resolver<ResolversTypes['UsersConnection'], ParentType, ContextType, Partial<QueryUsersConnectionArgs>>;
};

export type StringAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringAggregateSelectionNonNullable'] = ResolversParentTypes['StringAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProductsMutationResponse'] = ResolversParentTypes['UpdateProductsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUsersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUsersMutationResponse'] = ResolversParentTypes['UpdateUsersMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  addresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<UserAddressesArgs, 'directed'>>;
  addressesAggregate?: Resolver<Maybe<ResolversTypes['UserAddressAddressesAggregationSelection']>, ParentType, ContextType, RequireFields<UserAddressesAggregateArgs, 'directed'>>;
  addressesConnection?: Resolver<ResolversTypes['UserAddressesConnection'], ParentType, ContextType, RequireFields<UserAddressesConnectionArgs, 'directed'>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<UserOrdersArgs, 'directed'>>;
  ordersAggregate?: Resolver<Maybe<ResolversTypes['UserOrderOrdersAggregationSelection']>, ParentType, ContextType, RequireFields<UserOrdersAggregateArgs, 'directed'>>;
  ordersConnection?: Resolver<ResolversTypes['UserOrdersConnection'], ParentType, ContextType, RequireFields<UserOrdersConnectionArgs, 'directed'>>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressAddressesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressAddressesAggregationSelection'] = ResolversParentTypes['UserAddressAddressesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserAddressAddressesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressAddressesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressAddressesNodeAggregateSelection'] = ResolversParentTypes['UserAddressAddressesNodeAggregateSelection']> = {
  city?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  houseNumber?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressesConnection'] = ResolversParentTypes['UserAddressesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserAddressesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressesRelationship'] = ResolversParentTypes['UserAddressesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAggregateSelection'] = ResolversParentTypes['UserAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrderOrdersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrderOrdersAggregationSelection'] = ResolversParentTypes['UserOrderOrdersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserOrderOrdersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrderOrdersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrderOrdersNodeAggregateSelection'] = ResolversParentTypes['UserOrderOrdersNodeAggregateSelection']> = {
  created?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  lastModified?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrdersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrdersConnection'] = ResolversParentTypes['UserOrdersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserOrdersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrdersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrdersRelationship'] = ResolversParentTypes['UserOrdersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateProductsMutationResponse?: CreateProductsMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelectionNullable?: DateTimeAggregateSelectionNullableResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  FloatAggregateSelectionNonNullable?: FloatAggregateSelectionNonNullableResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IdAggregateSelectionNonNullableResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Object?: GraphQLScalarType;
  Order?: OrderResolvers<ContextType>;
  OrderAggregateSelection?: OrderAggregateSelectionResolvers<ContextType>;
  OrderCustomerConnection?: OrderCustomerConnectionResolvers<ContextType>;
  OrderCustomerRelationship?: OrderCustomerRelationshipResolvers<ContextType>;
  OrderEdge?: OrderEdgeResolvers<ContextType>;
  OrderItemsConnection?: OrderItemsConnectionResolvers<ContextType>;
  OrderItemsRelationship?: OrderItemsRelationshipResolvers<ContextType>;
  OrderProductItemsAggregationSelection?: OrderProductItemsAggregationSelectionResolvers<ContextType>;
  OrderProductItemsNodeAggregateSelection?: OrderProductItemsNodeAggregateSelectionResolvers<ContextType>;
  OrderUserCustomerAggregationSelection?: OrderUserCustomerAggregationSelectionResolvers<ContextType>;
  OrderUserCustomerNodeAggregateSelection?: OrderUserCustomerNodeAggregateSelectionResolvers<ContextType>;
  OrdersConnection?: OrdersConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductAggregateSelection?: ProductAggregateSelectionResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductsConnection?: ProductsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateProductsMutationResponse?: UpdateProductsMutationResponseResolvers<ContextType>;
  UpdateUsersMutationResponse?: UpdateUsersMutationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAddressAddressesAggregationSelection?: UserAddressAddressesAggregationSelectionResolvers<ContextType>;
  UserAddressAddressesNodeAggregateSelection?: UserAddressAddressesNodeAggregateSelectionResolvers<ContextType>;
  UserAddressesConnection?: UserAddressesConnectionResolvers<ContextType>;
  UserAddressesRelationship?: UserAddressesRelationshipResolvers<ContextType>;
  UserAggregateSelection?: UserAggregateSelectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserOrderOrdersAggregationSelection?: UserOrderOrdersAggregationSelectionResolvers<ContextType>;
  UserOrderOrdersNodeAggregateSelection?: UserOrderOrdersNodeAggregateSelectionResolvers<ContextType>;
  UserOrdersConnection?: UserOrdersConnectionResolvers<ContextType>;
  UserOrdersRelationship?: UserOrdersRelationshipResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
};


export type AddImageToProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  newImageUrl: Scalars['String']['input'];
}>;


export type AddImageToProductMutation = { __typename?: 'Mutation', updateProducts: { __typename?: 'UpdateProductsMutationResponse', products: Array<{ __typename?: 'Product', imageUrls: Array<string> }> } };

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['Object']['input']>;
  imageUrls: Array<Scalars['String']['input']> | Scalars['String']['input'];
  priceInEuro: Scalars['Float']['input'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProducts: { __typename?: 'CreateProductsMutationResponse', products: Array<{ __typename?: 'Product', id: string, description: string, details?: Record<string, string> | null, imageUrls: Array<string>, name: string, priceInEuro: number }> } };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  options?: InputMaybe<ProductOptions>;
}>;


export type GetProductQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', description: string, details?: Record<string, string> | null, id: string, imageUrls: Array<string>, name: string, priceInEuro: number }> };

export type SetImagesOnProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  imageUrls: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type SetImagesOnProductMutation = { __typename?: 'Mutation', updateProducts: { __typename?: 'UpdateProductsMutationResponse', products: Array<{ __typename?: 'Product', id: string }> } };


export const AddImageToProductDocument = gql`
    mutation addImageToProduct($id: ID!, $newImageUrl: String!) {
  updateProducts(where: {id: $id}, update: {imageUrls_PUSH: [$newImageUrl]}) {
    products {
      imageUrls
    }
  }
}
    `;
export const CreateProductDocument = gql`
    mutation createProduct($name: String!, $description: String!, $details: Object, $imageUrls: [String!]!, $priceInEuro: Float!) {
  createProducts(
    input: {description: $description, details: $details, imageUrls: $imageUrls, name: $name, priceInEuro: $priceInEuro}
  ) {
    products {
      id
      description
      details
      imageUrls
      name
      priceInEuro
    }
  }
}
    `;
export const GetProductDocument = gql`
    query getProduct($id: ID!, $options: ProductOptions) {
  products(where: {id: $id}, options: $options) {
    description
    details
    id
    imageUrls
    name
    priceInEuro
  }
}
    `;
export const SetImagesOnProductDocument = gql`
    mutation setImagesOnProduct($id: ID!, $imageUrls: [String!]!) {
  updateProducts(where: {id: $id}, update: {imageUrls: $imageUrls}) {
    products {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addImageToProduct(variables: AddImageToProductMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddImageToProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddImageToProductMutation>(AddImageToProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addImageToProduct', 'mutation', variables);
    },
    createProduct(variables: CreateProductMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProductMutation>(CreateProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createProduct', 'mutation', variables);
    },
    getProduct(variables: GetProductQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductQuery>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProduct', 'query', variables);
    },
    setImagesOnProduct(variables: SetImagesOnProductMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetImagesOnProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetImagesOnProductMutation>(SetImagesOnProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setImagesOnProduct', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;