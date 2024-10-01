/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  bigint: { input: any; output: any }
  bytea: { input: any; output: any }
  citext: { input: any; output: any }
  date: { input: any; output: any }
  jsonb: { input: any; output: any }
  numeric: { input: any; output: any }
  time: { input: any; output: any }
  timestamptz: { input: any; output: any }
  uuid: { input: any; output: any }
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>
  _gt?: InputMaybe<Scalars['Boolean']['input']>
  _gte?: InputMaybe<Scalars['Boolean']['input']>
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Boolean']['input']>
  _lte?: InputMaybe<Scalars['Boolean']['input']>
  _neq?: InputMaybe<Scalars['Boolean']['input']>
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>
  _gt?: InputMaybe<Scalars['Int']['input']>
  _gte?: InputMaybe<Scalars['Int']['input']>
  _in?: InputMaybe<Array<Scalars['Int']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Int']['input']>
  _lte?: InputMaybe<Scalars['Int']['input']>
  _neq?: InputMaybe<Scalars['Int']['input']>
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>
}

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests'
  id: Scalars['uuid']['output']
  options?: Maybe<Scalars['jsonb']['output']>
}

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate'
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>
  nodes: Array<AuthProviderRequests>
}

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthProviderRequests_Max_Fields>
  min?: Maybe<AuthProviderRequests_Min_Fields>
}

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>
}

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  options?: InputMaybe<Jsonb_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>
}

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>
  options?: InputMaybe<Scalars['jsonb']['input']>
}

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields'
  id?: Maybe<Scalars['uuid']['output']>
}

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields'
  id?: Maybe<Scalars['uuid']['output']>
}

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>
}

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint
  update_columns?: Array<AuthProviderRequests_Update_Column>
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>
}

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>
  options?: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>
}

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>
  options?: InputMaybe<Scalars['jsonb']['input']>
}

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>
  options?: InputMaybe<Scalars['jsonb']['input']>
}

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders'
  id: Scalars['String']['output']
  /** An array relationship */
  userProviders: Array<AuthUserProviders>
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate'
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>
  nodes: Array<AuthProviders>
}

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthProviders_Max_Fields>
  min?: Maybe<AuthProviders_Min_Fields>
}

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>
  _not?: InputMaybe<AuthProviders_Bool_Exp>
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>
  id?: InputMaybe<String_Comparison_Exp>
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey',
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields'
  id?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields'
  id?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>
}

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>
}

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint
  update_columns?: Array<AuthProviders_Update_Column>
  where?: InputMaybe<AuthProviders_Bool_Exp>
}

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>
}

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id',
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp
}

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes'
  comment?: Maybe<Scalars['String']['output']>
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate
  value: Scalars['String']['output']
}

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate'
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>
  nodes: Array<AuthRefreshTokenTypes>
}

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>
}

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>
  comment?: InputMaybe<String_Comparison_Exp>
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>
  value?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey',
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular',
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>
}

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>
  value?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields'
  comment?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields'
  comment?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>
}

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
}

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>
  value?: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input']
}

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp
}

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens'
  createdAt: Scalars['timestamptz']['output']
  expiresAt: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  metadata?: Maybe<Scalars['jsonb']['output']>
  refreshTokenHash?: Maybe<Scalars['String']['output']>
  type: AuthRefreshTokenTypes_Enum
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']['output']
}

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate'
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>
  nodes: Array<AuthRefreshTokens>
}

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>
}

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthRefreshTokens_Max_Fields>
  min?: Maybe<AuthRefreshTokens_Min_Fields>
}

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>
}

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  metadata?: InputMaybe<Jsonb_Comparison_Exp>
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  expiresAt?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  refreshTokenHash?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>
  expiresAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  refreshTokenHash?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  expiresAt?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  refreshTokenHash?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>
  expiresAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  refreshTokenHash?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>
}

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint
  update_columns?: Array<AuthRefreshTokens_Update_Column>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>
  expiresAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  refreshTokenHash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  userId?: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>
}

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId',
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles'
  role: Scalars['String']['output']
  /** An array relationship */
  userRoles: Array<AuthUserRoles>
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate
  /** An array relationship */
  usersByDefaultRole: Array<Users>
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate'
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>
  nodes: Array<AuthRoles>
}

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthRoles_Max_Fields>
  min?: Maybe<AuthRoles_Min_Fields>
}

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>
  _not?: InputMaybe<AuthRoles_Bool_Exp>
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>
  role?: InputMaybe<String_Comparison_Exp>
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey',
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields'
  role?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields'
  role?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>
}

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>
}

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint
  update_columns?: Array<AuthRoles_Update_Column>
  where?: InputMaybe<AuthRoles_Bool_Exp>
}

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input']
}

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role',
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role',
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp
}

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders'
  accessToken: Scalars['String']['output']
  createdAt: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  /** An object relationship */
  provider: AuthProviders
  providerId: Scalars['String']['output']
  providerUserId: Scalars['String']['output']
  refreshToken?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['timestamptz']['output']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']['output']
}

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate'
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>
  nodes: Array<AuthUserProviders>
}

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>
}

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthUserProviders_Max_Fields>
  min?: Maybe<AuthUserProviders_Min_Fields>
}

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<AuthUserProviders_Max_Order_By>
  min?: InputMaybe<AuthUserProviders_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>
  accessToken?: InputMaybe<String_Comparison_Exp>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  provider?: InputMaybe<AuthProviders_Bool_Exp>
  providerId?: InputMaybe<String_Comparison_Exp>
  providerUserId?: InputMaybe<String_Comparison_Exp>
  refreshToken?: InputMaybe<String_Comparison_Exp>
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key',
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>
  providerId?: InputMaybe<Scalars['String']['input']>
  providerUserId?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields'
  accessToken?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  providerId?: Maybe<Scalars['String']['output']>
  providerUserId?: Maybe<Scalars['String']['output']>
  refreshToken?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  providerId?: InputMaybe<Order_By>
  providerUserId?: InputMaybe<Order_By>
  refreshToken?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields'
  accessToken?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  providerId?: Maybe<Scalars['String']['output']>
  providerUserId?: Maybe<Scalars['String']['output']>
  refreshToken?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  providerId?: InputMaybe<Order_By>
  providerUserId?: InputMaybe<Order_By>
  refreshToken?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>
}

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint
  update_columns?: Array<AuthUserProviders_Update_Column>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  provider?: InputMaybe<AuthProviders_Order_By>
  providerId?: InputMaybe<Order_By>
  providerUserId?: InputMaybe<Order_By>
  refreshToken?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  userId?: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  providerId?: InputMaybe<Scalars['String']['input']>
  providerUserId?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  providerId?: InputMaybe<Scalars['String']['input']>
  providerUserId?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp
}

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles'
  createdAt: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  role: Scalars['String']['output']
  /** An object relationship */
  roleByRole: AuthRoles
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']['output']
}

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate'
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>
  nodes: Array<AuthUserRoles>
}

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>
}

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<AuthUserRoles_Max_Fields>
  min?: Maybe<AuthUserRoles_Min_Fields>
}

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<AuthUserRoles_Max_Order_By>
  min?: InputMaybe<AuthUserRoles_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  role?: InputMaybe<String_Comparison_Exp>
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key',
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  role?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  role?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  role?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  role?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>
}

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint
  update_columns?: Array<AuthUserRoles_Update_Column>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  role?: InputMaybe<Order_By>
  roleByRole?: InputMaybe<AuthRoles_Order_By>
  user?: InputMaybe<Users_Order_By>
  userId?: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp
}

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys'
  counter: Scalars['bigint']['output']
  credentialId: Scalars['String']['output']
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>
  id: Scalars['uuid']['output']
  nickname?: Maybe<Scalars['String']['output']>
  transports: Scalars['String']['output']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']['output']
}

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate'
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>
  nodes: Array<AuthUserSecurityKeys>
}

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>
}

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields'
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>
}

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>
}

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>
}

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>
  counter?: InputMaybe<Bigint_Comparison_Exp>
  credentialId?: InputMaybe<String_Comparison_Exp>
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  nickname?: InputMaybe<String_Comparison_Exp>
  transports?: InputMaybe<String_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  userId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey',
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>
}

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>
  credentialId?: InputMaybe<Scalars['String']['input']>
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  nickname?: InputMaybe<Scalars['String']['input']>
  transports?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields'
  counter?: Maybe<Scalars['bigint']['output']>
  credentialId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  nickname?: Maybe<Scalars['String']['output']>
  transports?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>
  credentialId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nickname?: InputMaybe<Order_By>
  transports?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields'
  counter?: Maybe<Scalars['bigint']['output']>
  credentialId?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  nickname?: Maybe<Scalars['String']['output']>
  transports?: Maybe<Scalars['String']['output']>
  userId?: Maybe<Scalars['uuid']['output']>
}

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>
  credentialId?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nickname?: InputMaybe<Order_By>
  transports?: InputMaybe<Order_By>
  userId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>
}

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>
  credentialId?: InputMaybe<Order_By>
  credentialPublicKey?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nickname?: InputMaybe<Order_By>
  transports?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  userId?: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>
  credentialId?: InputMaybe<Scalars['String']['input']>
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  nickname?: InputMaybe<Scalars['String']['input']>
  transports?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>
  credentialId?: InputMaybe<Scalars['String']['input']>
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  nickname?: InputMaybe<Scalars['String']['input']>
  transports?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields'
  counter?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId',
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp
}

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields'
  counter?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>
  _gt?: InputMaybe<Scalars['bigint']['input']>
  _gte?: InputMaybe<Scalars['bigint']['input']>
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['bigint']['input']>
  _lte?: InputMaybe<Scalars['bigint']['input']>
  _neq?: InputMaybe<Scalars['bigint']['input']>
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>
}

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets'
  cacheControl?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['timestamptz']['output']
  downloadExpiration: Scalars['Int']['output']
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  id: Scalars['String']['output']
  maxUploadFileSize: Scalars['Int']['output']
  minUploadFileSize: Scalars['Int']['output']
  presignedUrlsEnabled: Scalars['Boolean']['output']
  updatedAt: Scalars['timestamptz']['output']
}

/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Files_Order_By>>
  where?: InputMaybe<Files_Bool_Exp>
}

/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Files_Order_By>>
  where?: InputMaybe<Files_Bool_Exp>
}

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate'
  aggregate?: Maybe<Buckets_Aggregate_Fields>
  nodes: Array<Buckets>
}

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields'
  avg?: Maybe<Buckets_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Buckets_Max_Fields>
  min?: Maybe<Buckets_Min_Fields>
  stddev?: Maybe<Buckets_Stddev_Fields>
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>
  sum?: Maybe<Buckets_Sum_Fields>
  var_pop?: Maybe<Buckets_Var_Pop_Fields>
  var_samp?: Maybe<Buckets_Var_Samp_Fields>
  variance?: Maybe<Buckets_Variance_Fields>
}

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>
  _not?: InputMaybe<Buckets_Bool_Exp>
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>
  cacheControl?: InputMaybe<String_Comparison_Exp>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>
  files?: InputMaybe<Files_Bool_Exp>
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>
  id?: InputMaybe<String_Comparison_Exp>
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey',
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['String']['input']>
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields'
  cacheControl?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  downloadExpiration?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>
  minUploadFileSize?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields'
  cacheControl?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  downloadExpiration?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['String']['output']>
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>
  minUploadFileSize?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
}

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>
}

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>
}

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint
  update_columns?: Array<Buckets_Update_Column>
  where?: InputMaybe<Buckets_Bool_Exp>
}

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  downloadExpiration?: InputMaybe<Order_By>
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  maxUploadFileSize?: InputMaybe<Order_By>
  minUploadFileSize?: InputMaybe<Order_By>
  presignedUrlsEnabled?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input']
}

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields'
  downloadExpiration?: Maybe<Scalars['Int']['output']>
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>
  minUploadFileSize?: Maybe<Scalars['Int']['output']>
}

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp
}

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields'
  downloadExpiration?: Maybe<Scalars['Float']['output']>
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>
  minUploadFileSize?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>
  _gt?: InputMaybe<Scalars['bytea']['input']>
  _gte?: InputMaybe<Scalars['bytea']['input']>
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['bytea']['input']>
  _lte?: InputMaybe<Scalars['bytea']['input']>
  _neq?: InputMaybe<Scalars['bytea']['input']>
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>
  _gt?: InputMaybe<Scalars['citext']['input']>
  _gte?: InputMaybe<Scalars['citext']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>
  _in?: InputMaybe<Array<Scalars['citext']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>
  _lt?: InputMaybe<Scalars['citext']['input']>
  _lte?: InputMaybe<Scalars['citext']['input']>
  _neq?: InputMaybe<Scalars['citext']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Restaurants and shops placing orders */
export type Customer = {
  __typename?: 'customer'
  address: Scalars['String']['output']
  created_at: Scalars['timestamptz']['output']
  delivery_end_time?: Maybe<Scalars['time']['output']>
  delivery_start_time?: Maybe<Scalars['time']['output']>
  /** An object relationship */
  district?: Maybe<District>
  district_id?: Maybe<Scalars['uuid']['output']>
  id: Scalars['uuid']['output']
  is_active: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  /** An array relationship */
  orders: Array<Order>
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate
  updated_at: Scalars['timestamptz']['output']
}

/** Restaurants and shops placing orders */
export type CustomerOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** Restaurants and shops placing orders */
export type CustomerOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate'
  aggregate?: Maybe<Customer_Aggregate_Fields>
  nodes: Array<Customer>
}

export type Customer_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Customer_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Customer_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Customer_Aggregate_Bool_Exp_Count>
}

export type Customer_Aggregate_Bool_Exp_Bool_And = {
  arguments: Customer_Select_Column_Customer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Customer_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Customer_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Customer_Select_Column_Customer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Customer_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Customer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Customer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Customer_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Customer_Max_Fields>
  min?: Maybe<Customer_Min_Fields>
}

/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "customer" */
export type Customer_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Customer_Max_Order_By>
  min?: InputMaybe<Customer_Min_Order_By>
}

/** input type for inserting array relation for remote table "customer" */
export type Customer_Arr_Rel_Insert_Input = {
  data: Array<Customer_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_On_Conflict>
}

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>
  _not?: InputMaybe<Customer_Bool_Exp>
  _or?: InputMaybe<Array<Customer_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  delivery_end_time?: InputMaybe<Time_Comparison_Exp>
  delivery_start_time?: InputMaybe<Time_Comparison_Exp>
  district?: InputMaybe<District_Bool_Exp>
  district_id?: InputMaybe<Uuid_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  is_active?: InputMaybe<Boolean_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  orders?: InputMaybe<Order_Bool_Exp>
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomerPkey = 'customer_pkey',
}

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  delivery_end_time?: InputMaybe<Scalars['time']['input']>
  delivery_start_time?: InputMaybe<Scalars['time']['input']>
  district?: InputMaybe<District_Obj_Rel_Insert_Input>
  district_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields'
  address?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  district_id?: Maybe<Scalars['uuid']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by max() on columns of table "customer" */
export type Customer_Max_Order_By = {
  address?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  district_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields'
  address?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  district_id?: Maybe<Scalars['uuid']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by min() on columns of table "customer" */
export type Customer_Min_Order_By = {
  address?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  district_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Customer>
}

/** input type for inserting object relation for remote table "customer" */
export type Customer_Obj_Rel_Insert_Input = {
  data: Customer_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_On_Conflict>
}

/** on_conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint
  update_columns?: Array<Customer_Update_Column>
  where?: InputMaybe<Customer_Bool_Exp>
}

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  address?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  delivery_end_time?: InputMaybe<Order_By>
  delivery_start_time?: InputMaybe<Order_By>
  district?: InputMaybe<District_Order_By>
  district_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  is_active?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryEndTime = 'delivery_end_time',
  /** column name */
  DeliveryStartTime = 'delivery_start_time',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "customer_aggregate_bool_exp_bool_and_arguments_columns" columns of table "customer" */
export enum Customer_Select_Column_Customer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active',
}

/** select "customer_aggregate_bool_exp_bool_or_arguments_columns" columns of table "customer" */
export enum Customer_Select_Column_Customer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active',
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  delivery_end_time?: InputMaybe<Scalars['time']['input']>
  delivery_start_time?: InputMaybe<Scalars['time']['input']>
  district_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  delivery_end_time?: InputMaybe<Scalars['time']['input']>
  delivery_start_time?: InputMaybe<Scalars['time']['input']>
  district_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryEndTime = 'delivery_end_time',
  /** column name */
  DeliveryStartTime = 'delivery_start_time',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Customer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Set_Input>
  /** filter the rows which have to be updated */
  where: Customer_Bool_Exp
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>
  _gt?: InputMaybe<Scalars['date']['input']>
  _gte?: InputMaybe<Scalars['date']['input']>
  _in?: InputMaybe<Array<Scalars['date']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['date']['input']>
  _lte?: InputMaybe<Scalars['date']['input']>
  _neq?: InputMaybe<Scalars['date']['input']>
  _nin?: InputMaybe<Array<Scalars['date']['input']>>
}

/** columns and relationships of "delivery_method" */
export type Delivery_Method = {
  __typename?: 'delivery_method'
  created_at: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  name: Scalars['String']['output']
  /** An array relationship */
  orders: Array<Order>
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate
  updated_at: Scalars['timestamptz']['output']
}

/** columns and relationships of "delivery_method" */
export type Delivery_MethodOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** columns and relationships of "delivery_method" */
export type Delivery_MethodOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

/** aggregated selection of "delivery_method" */
export type Delivery_Method_Aggregate = {
  __typename?: 'delivery_method_aggregate'
  aggregate?: Maybe<Delivery_Method_Aggregate_Fields>
  nodes: Array<Delivery_Method>
}

/** aggregate fields of "delivery_method" */
export type Delivery_Method_Aggregate_Fields = {
  __typename?: 'delivery_method_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Delivery_Method_Max_Fields>
  min?: Maybe<Delivery_Method_Min_Fields>
}

/** aggregate fields of "delivery_method" */
export type Delivery_Method_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delivery_Method_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "delivery_method". All fields are combined with a logical 'AND'. */
export type Delivery_Method_Bool_Exp = {
  _and?: InputMaybe<Array<Delivery_Method_Bool_Exp>>
  _not?: InputMaybe<Delivery_Method_Bool_Exp>
  _or?: InputMaybe<Array<Delivery_Method_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  orders?: InputMaybe<Order_Bool_Exp>
  orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "delivery_method" */
export enum Delivery_Method_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveryMethodPkey = 'delivery_method_pkey',
}

/** input type for inserting data into table "delivery_method" */
export type Delivery_Method_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Delivery_Method_Max_Fields = {
  __typename?: 'delivery_method_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type Delivery_Method_Min_Fields = {
  __typename?: 'delivery_method_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** response of any mutation on the table "delivery_method" */
export type Delivery_Method_Mutation_Response = {
  __typename?: 'delivery_method_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Delivery_Method>
}

/** input type for inserting object relation for remote table "delivery_method" */
export type Delivery_Method_Obj_Rel_Insert_Input = {
  data: Delivery_Method_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Delivery_Method_On_Conflict>
}

/** on_conflict condition type for table "delivery_method" */
export type Delivery_Method_On_Conflict = {
  constraint: Delivery_Method_Constraint
  update_columns?: Array<Delivery_Method_Update_Column>
  where?: InputMaybe<Delivery_Method_Bool_Exp>
}

/** Ordering options when selecting data from "delivery_method". */
export type Delivery_Method_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: delivery_method */
export type Delivery_Method_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "delivery_method" */
export enum Delivery_Method_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "delivery_method" */
export type Delivery_Method_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** Streaming cursor of the table "delivery_method" */
export type Delivery_Method_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Delivery_Method_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Delivery_Method_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** update columns of table "delivery_method" */
export enum Delivery_Method_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Delivery_Method_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Delivery_Method_Set_Input>
  /** filter the rows which have to be updated */
  where: Delivery_Method_Bool_Exp
}

/** Production area or type */
export type Department = {
  __typename?: 'department'
  created_at: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  name: Scalars['String']['output']
  /** An array relationship */
  products: Array<Product>
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate
  updated_at: Scalars['timestamptz']['output']
}

/** Production area or type */
export type DepartmentProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

/** Production area or type */
export type DepartmentProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

/** aggregated selection of "department" */
export type Department_Aggregate = {
  __typename?: 'department_aggregate'
  aggregate?: Maybe<Department_Aggregate_Fields>
  nodes: Array<Department>
}

/** aggregate fields of "department" */
export type Department_Aggregate_Fields = {
  __typename?: 'department_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Department_Max_Fields>
  min?: Maybe<Department_Min_Fields>
}

/** aggregate fields of "department" */
export type Department_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Department_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "department". All fields are combined with a logical 'AND'. */
export type Department_Bool_Exp = {
  _and?: InputMaybe<Array<Department_Bool_Exp>>
  _not?: InputMaybe<Department_Bool_Exp>
  _or?: InputMaybe<Array<Department_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  products?: InputMaybe<Product_Bool_Exp>
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "department" */
export enum Department_Constraint {
  /** unique or primary key constraint on columns "id" */
  DepartmentPkey = 'department_pkey',
}

/** input type for inserting data into table "department" */
export type Department_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Department_Max_Fields = {
  __typename?: 'department_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type Department_Min_Fields = {
  __typename?: 'department_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** response of any mutation on the table "department" */
export type Department_Mutation_Response = {
  __typename?: 'department_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Department>
}

/** input type for inserting object relation for remote table "department" */
export type Department_Obj_Rel_Insert_Input = {
  data: Department_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Department_On_Conflict>
}

/** on_conflict condition type for table "department" */
export type Department_On_Conflict = {
  constraint: Department_Constraint
  update_columns?: Array<Department_Update_Column>
  where?: InputMaybe<Department_Bool_Exp>
}

/** Ordering options when selecting data from "department". */
export type Department_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: department */
export type Department_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "department" */
export enum Department_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "department" */
export type Department_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** Streaming cursor of the table "department" */
export type Department_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Department_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Department_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** update columns of table "department" */
export enum Department_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Department_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Department_Set_Input>
  /** filter the rows which have to be updated */
  where: Department_Bool_Exp
}

/** columns and relationships of "district" */
export type District = {
  __typename?: 'district'
  created_at: Scalars['timestamptz']['output']
  /** An array relationship */
  customers: Array<Customer>
  /** An aggregate relationship */
  customers_aggregate: Customer_Aggregate
  id: Scalars['uuid']['output']
  name: Scalars['String']['output']
  updated_at: Scalars['timestamptz']['output']
}

/** columns and relationships of "district" */
export type DistrictCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

/** columns and relationships of "district" */
export type DistrictCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

/** aggregated selection of "district" */
export type District_Aggregate = {
  __typename?: 'district_aggregate'
  aggregate?: Maybe<District_Aggregate_Fields>
  nodes: Array<District>
}

/** aggregate fields of "district" */
export type District_Aggregate_Fields = {
  __typename?: 'district_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<District_Max_Fields>
  min?: Maybe<District_Min_Fields>
}

/** aggregate fields of "district" */
export type District_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<District_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "district". All fields are combined with a logical 'AND'. */
export type District_Bool_Exp = {
  _and?: InputMaybe<Array<District_Bool_Exp>>
  _not?: InputMaybe<District_Bool_Exp>
  _or?: InputMaybe<Array<District_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  customers?: InputMaybe<Customer_Bool_Exp>
  customers_aggregate?: InputMaybe<Customer_Aggregate_Bool_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "district" */
export enum District_Constraint {
  /** unique or primary key constraint on columns "id" */
  DistrictPkey = 'district_pkey',
}

/** input type for inserting data into table "district" */
export type District_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  customers?: InputMaybe<Customer_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type District_Max_Fields = {
  __typename?: 'district_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type District_Min_Fields = {
  __typename?: 'district_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** response of any mutation on the table "district" */
export type District_Mutation_Response = {
  __typename?: 'district_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<District>
}

/** input type for inserting object relation for remote table "district" */
export type District_Obj_Rel_Insert_Input = {
  data: District_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<District_On_Conflict>
}

/** on_conflict condition type for table "district" */
export type District_On_Conflict = {
  constraint: District_Constraint
  update_columns?: Array<District_Update_Column>
  where?: InputMaybe<District_Bool_Exp>
}

/** Ordering options when selecting data from "district". */
export type District_Order_By = {
  created_at?: InputMaybe<Order_By>
  customers_aggregate?: InputMaybe<Customer_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: district */
export type District_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "district" */
export enum District_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "district" */
export type District_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** Streaming cursor of the table "district" */
export type District_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: District_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type District_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** update columns of table "district" */
export enum District_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type District_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<District_Set_Input>
  /** filter the rows which have to be updated */
  where: District_Bool_Exp
}

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files'
  /** An object relationship */
  bucket: Buckets
  bucketId: Scalars['String']['output']
  createdAt: Scalars['timestamptz']['output']
  etag?: Maybe<Scalars['String']['output']>
  id: Scalars['uuid']['output']
  isUploaded?: Maybe<Scalars['Boolean']['output']>
  metadata?: Maybe<Scalars['jsonb']['output']>
  mimeType?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  size?: Maybe<Scalars['Int']['output']>
  updatedAt: Scalars['timestamptz']['output']
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>
}

/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate'
  aggregate?: Maybe<Files_Aggregate_Fields>
  nodes: Array<Files>
}

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>
}

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Files_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Files_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Files_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields'
  avg?: Maybe<Files_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Files_Max_Fields>
  min?: Maybe<Files_Min_Fields>
  stddev?: Maybe<Files_Stddev_Fields>
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>
  sum?: Maybe<Files_Sum_Fields>
  var_pop?: Maybe<Files_Var_Pop_Fields>
  var_samp?: Maybe<Files_Var_Samp_Fields>
  variance?: Maybe<Files_Variance_Fields>
}

/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Files_Max_Order_By>
  min?: InputMaybe<Files_Min_Order_By>
  stddev?: InputMaybe<Files_Stddev_Order_By>
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>
  sum?: InputMaybe<Files_Sum_Order_By>
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>
  variance?: InputMaybe<Files_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>
}

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>
}

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>
  _not?: InputMaybe<Files_Bool_Exp>
  _or?: InputMaybe<Array<Files_Bool_Exp>>
  bucket?: InputMaybe<Buckets_Bool_Exp>
  bucketId?: InputMaybe<String_Comparison_Exp>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  etag?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>
  metadata?: InputMaybe<Jsonb_Comparison_Exp>
  mimeType?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  size?: InputMaybe<Int_Comparison_Exp>
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>
  bucketId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  etag?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields'
  bucketId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  etag?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  mimeType?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  size?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>
}

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  etag?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  mimeType?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  size?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  uploadedByUserId?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields'
  bucketId?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  etag?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  mimeType?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  size?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>
}

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  etag?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  mimeType?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  size?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  uploadedByUserId?: InputMaybe<Order_By>
}

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Files>
}

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>
}

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint
  update_columns?: Array<Files_Update_Column>
  where?: InputMaybe<Files_Bool_Exp>
}

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>
  bucketId?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  etag?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  isUploaded?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  mimeType?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  size?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  uploadedByUserId?: InputMaybe<Order_By>
}

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>
}

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId',
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded',
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded',
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  etag?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  etag?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>
}

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields'
  size?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>
}

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId',
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields'
  size?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>
  _eq?: InputMaybe<Scalars['jsonb']['input']>
  _gt?: InputMaybe<Scalars['jsonb']['input']>
  _gte?: InputMaybe<Scalars['jsonb']['input']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['jsonb']['input']>
  _lte?: InputMaybe<Scalars['jsonb']['input']>
  _neq?: InputMaybe<Scalars['jsonb']['input']>
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>
  /** delete data from the table: "customer" */
  delete_customer?: Maybe<Customer_Mutation_Response>
  /** delete single row from the table: "customer" */
  delete_customer_by_pk?: Maybe<Customer>
  /** delete data from the table: "delivery_method" */
  delete_delivery_method?: Maybe<Delivery_Method_Mutation_Response>
  /** delete single row from the table: "delivery_method" */
  delete_delivery_method_by_pk?: Maybe<Delivery_Method>
  /** delete data from the table: "department" */
  delete_department?: Maybe<Department_Mutation_Response>
  /** delete single row from the table: "department" */
  delete_department_by_pk?: Maybe<Department>
  /** delete data from the table: "district" */
  delete_district?: Maybe<District_Mutation_Response>
  /** delete single row from the table: "district" */
  delete_district_by_pk?: Maybe<District>
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>
  /** delete data from the table: "order_product" */
  delete_order_product?: Maybe<Order_Product_Mutation_Response>
  /** delete single row from the table: "order_product" */
  delete_order_product_by_pk?: Maybe<Order_Product>
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>
  /** insert data into the table: "customer" */
  insert_customer?: Maybe<Customer_Mutation_Response>
  /** insert a single row into the table: "customer" */
  insert_customer_one?: Maybe<Customer>
  /** insert data into the table: "delivery_method" */
  insert_delivery_method?: Maybe<Delivery_Method_Mutation_Response>
  /** insert a single row into the table: "delivery_method" */
  insert_delivery_method_one?: Maybe<Delivery_Method>
  /** insert data into the table: "department" */
  insert_department?: Maybe<Department_Mutation_Response>
  /** insert a single row into the table: "department" */
  insert_department_one?: Maybe<Department>
  /** insert data into the table: "district" */
  insert_district?: Maybe<District_Mutation_Response>
  /** insert a single row into the table: "district" */
  insert_district_one?: Maybe<District>
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>
  /** insert data into the table: "order_product" */
  insert_order_product?: Maybe<Order_Product_Mutation_Response>
  /** insert a single row into the table: "order_product" */
  insert_order_product_one?: Maybe<Order_Product>
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>
  /** update data of the table: "customer" */
  update_customer?: Maybe<Customer_Mutation_Response>
  /** update single row of the table: "customer" */
  update_customer_by_pk?: Maybe<Customer>
  /** update multiples rows of table: "customer" */
  update_customer_many?: Maybe<Array<Maybe<Customer_Mutation_Response>>>
  /** update data of the table: "delivery_method" */
  update_delivery_method?: Maybe<Delivery_Method_Mutation_Response>
  /** update single row of the table: "delivery_method" */
  update_delivery_method_by_pk?: Maybe<Delivery_Method>
  /** update multiples rows of table: "delivery_method" */
  update_delivery_method_many?: Maybe<Array<Maybe<Delivery_Method_Mutation_Response>>>
  /** update data of the table: "department" */
  update_department?: Maybe<Department_Mutation_Response>
  /** update single row of the table: "department" */
  update_department_by_pk?: Maybe<Department>
  /** update multiples rows of table: "department" */
  update_department_many?: Maybe<Array<Maybe<Department_Mutation_Response>>>
  /** update data of the table: "district" */
  update_district?: Maybe<District_Mutation_Response>
  /** update single row of the table: "district" */
  update_district_by_pk?: Maybe<District>
  /** update multiples rows of table: "district" */
  update_district_many?: Maybe<Array<Maybe<District_Mutation_Response>>>
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>
  /** update multiples rows of table: "order" */
  update_order_many?: Maybe<Array<Maybe<Order_Mutation_Response>>>
  /** update data of the table: "order_product" */
  update_order_product?: Maybe<Order_Product_Mutation_Response>
  /** update single row of the table: "order_product" */
  update_order_product_by_pk?: Maybe<Order_Product>
  /** update multiples rows of table: "order_product" */
  update_order_product_many?: Maybe<Array<Maybe<Order_Product_Mutation_Response>>>
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input']
}

/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDelete_Delivery_MethodArgs = {
  where: Delivery_Method_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Delivery_Method_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDelete_DepartmentArgs = {
  where: Department_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Department_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDelete_DistrictArgs = {
  where: District_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_District_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDelete_Order_ProductArgs = {
  where: Order_Product_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Order_Product_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input
  on_conflict?: InputMaybe<Buckets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>
  on_conflict?: InputMaybe<Buckets_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input
  on_conflict?: InputMaybe<Files_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>
  on_conflict?: InputMaybe<Files_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input
  on_conflict?: InputMaybe<Virus_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>
  on_conflict?: InputMaybe<Virus_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>
  on_conflict?: InputMaybe<Customer_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input
  on_conflict?: InputMaybe<Customer_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Delivery_MethodArgs = {
  objects: Array<Delivery_Method_Insert_Input>
  on_conflict?: InputMaybe<Delivery_Method_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Delivery_Method_OneArgs = {
  object: Delivery_Method_Insert_Input
  on_conflict?: InputMaybe<Delivery_Method_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DepartmentArgs = {
  objects: Array<Department_Insert_Input>
  on_conflict?: InputMaybe<Department_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Department_OneArgs = {
  object: Department_Insert_Input
  on_conflict?: InputMaybe<Department_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DistrictArgs = {
  objects: Array<District_Insert_Input>
  on_conflict?: InputMaybe<District_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_District_OneArgs = {
  object: District_Insert_Input
  on_conflict?: InputMaybe<District_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_ProductArgs = {
  objects: Array<Order_Product_Insert_Input>
  on_conflict?: InputMaybe<Order_Product_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_Product_OneArgs = {
  object: Order_Product_Insert_Input
  on_conflict?: InputMaybe<Order_Product_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>
  pk_columns: AuthProviders_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>
  _set?: InputMaybe<AuthProviderRequests_Set_Input>
  pk_columns: AuthProviderRequests_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>
  _set?: InputMaybe<AuthProviderRequests_Set_Input>
  where: AuthProviderRequests_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>
  where: AuthProviders_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>
  pk_columns: AuthRefreshTokens_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>
  where: AuthRefreshTokenTypes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>
  where: AuthRefreshTokens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>
  pk_columns: AuthRoles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>
  where: AuthRoles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>
  pk_columns: AuthUserProviders_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>
  where: AuthUserProviders_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>
  pk_columns: AuthUserRoles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>
  where: AuthUserRoles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>
  where: AuthUserSecurityKeys_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>
  _set?: InputMaybe<Buckets_Set_Input>
  pk_columns: Buckets_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>
  _set?: InputMaybe<Buckets_Set_Input>
  where: Buckets_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>
  _delete_key?: InputMaybe<Files_Delete_Key_Input>
  _inc?: InputMaybe<Files_Inc_Input>
  _prepend?: InputMaybe<Files_Prepend_Input>
  _set?: InputMaybe<Files_Set_Input>
  pk_columns: Files_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>
  _delete_key?: InputMaybe<Files_Delete_Key_Input>
  _inc?: InputMaybe<Files_Inc_Input>
  _prepend?: InputMaybe<Files_Prepend_Input>
  _set?: InputMaybe<Files_Set_Input>
  where: Files_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>
  _delete_key?: InputMaybe<Users_Delete_Key_Input>
  _prepend?: InputMaybe<Users_Prepend_Input>
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>
  _delete_key?: InputMaybe<Users_Delete_Key_Input>
  _prepend?: InputMaybe<Users_Prepend_Input>
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>
  _prepend?: InputMaybe<Virus_Prepend_Input>
  _set?: InputMaybe<Virus_Set_Input>
  pk_columns: Virus_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>
  _prepend?: InputMaybe<Virus_Prepend_Input>
  _set?: InputMaybe<Virus_Set_Input>
  where: Virus_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _set?: InputMaybe<Customer_Set_Input>
  where: Customer_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _set?: InputMaybe<Customer_Set_Input>
  pk_columns: Customer_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Customer_ManyArgs = {
  updates: Array<Customer_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Delivery_MethodArgs = {
  _set?: InputMaybe<Delivery_Method_Set_Input>
  where: Delivery_Method_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Delivery_Method_By_PkArgs = {
  _set?: InputMaybe<Delivery_Method_Set_Input>
  pk_columns: Delivery_Method_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Delivery_Method_ManyArgs = {
  updates: Array<Delivery_Method_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_DepartmentArgs = {
  _set?: InputMaybe<Department_Set_Input>
  where: Department_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Department_By_PkArgs = {
  _set?: InputMaybe<Department_Set_Input>
  pk_columns: Department_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Department_ManyArgs = {
  updates: Array<Department_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_DistrictArgs = {
  _set?: InputMaybe<District_Set_Input>
  where: District_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_District_By_PkArgs = {
  _set?: InputMaybe<District_Set_Input>
  pk_columns: District_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_District_ManyArgs = {
  updates: Array<District_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>
  _set?: InputMaybe<Order_Set_Input>
  where: Order_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>
  _set?: InputMaybe<Order_Set_Input>
  pk_columns: Order_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Order_ManyArgs = {
  updates: Array<Order_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Order_ProductArgs = {
  _inc?: InputMaybe<Order_Product_Inc_Input>
  _set?: InputMaybe<Order_Product_Set_Input>
  where: Order_Product_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Order_Product_By_PkArgs = {
  _inc?: InputMaybe<Order_Product_Inc_Input>
  _set?: InputMaybe<Order_Product_Set_Input>
  pk_columns: Order_Product_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Order_Product_ManyArgs = {
  updates: Array<Order_Product_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>
  _set?: InputMaybe<Product_Set_Input>
  where: Product_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>
  _set?: InputMaybe<Product_Set_Input>
  pk_columns: Product_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>
  _gt?: InputMaybe<Scalars['numeric']['input']>
  _gte?: InputMaybe<Scalars['numeric']['input']>
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['numeric']['input']>
  _lte?: InputMaybe<Scalars['numeric']['input']>
  _neq?: InputMaybe<Scalars['numeric']['input']>
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>
}

/** Customer orders */
export type Order = {
  __typename?: 'order'
  comment?: Maybe<Scalars['String']['output']>
  created_at: Scalars['timestamptz']['output']
  /** An object relationship */
  customer: Customer
  customer_id: Scalars['uuid']['output']
  delivery_date: Scalars['date']['output']
  /** An object relationship */
  delivery_method?: Maybe<Delivery_Method>
  delivery_method_id?: Maybe<Scalars['uuid']['output']>
  id: Scalars['uuid']['output']
  order_nr: Scalars['Int']['output']
  /** An array relationship */
  order_products: Array<Order_Product>
  /** An aggregate relationship */
  order_products_aggregate: Order_Product_Aggregate
  updated_at: Scalars['timestamptz']['output']
}

/** Customer orders */
export type OrderOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

/** Customer orders */
export type OrderOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate'
  aggregate?: Maybe<Order_Aggregate_Fields>
  nodes: Array<Order>
}

export type Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Aggregate_Bool_Exp_Count>
}

export type Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Order_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields'
  avg?: Maybe<Order_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Order_Max_Fields>
  min?: Maybe<Order_Min_Fields>
  stddev?: Maybe<Order_Stddev_Fields>
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>
  sum?: Maybe<Order_Sum_Fields>
  var_pop?: Maybe<Order_Var_Pop_Fields>
  var_samp?: Maybe<Order_Var_Samp_Fields>
  variance?: Maybe<Order_Variance_Fields>
}

/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Order_Max_Order_By>
  min?: InputMaybe<Order_Min_Order_By>
  stddev?: InputMaybe<Order_Stddev_Order_By>
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>
  sum?: InputMaybe<Order_Sum_Order_By>
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>
  variance?: InputMaybe<Order_Variance_Order_By>
}

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>
  _not?: InputMaybe<Order_Bool_Exp>
  _or?: InputMaybe<Array<Order_Bool_Exp>>
  comment?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  customer?: InputMaybe<Customer_Bool_Exp>
  customer_id?: InputMaybe<Uuid_Comparison_Exp>
  delivery_date?: InputMaybe<Date_Comparison_Exp>
  delivery_method?: InputMaybe<Delivery_Method_Bool_Exp>
  delivery_method_id?: InputMaybe<Uuid_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  order_nr?: InputMaybe<Int_Comparison_Exp>
  order_products?: InputMaybe<Order_Product_Bool_Exp>
  order_products_aggregate?: InputMaybe<Order_Product_Aggregate_Bool_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "order_nr" */
  OrderOrderNrKey = 'order_order_nr_key',
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey',
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  order_nr?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  customer?: InputMaybe<Customer_Obj_Rel_Insert_Input>
  customer_id?: InputMaybe<Scalars['uuid']['input']>
  delivery_date?: InputMaybe<Scalars['date']['input']>
  delivery_method?: InputMaybe<Delivery_Method_Obj_Rel_Insert_Input>
  delivery_method_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  order_nr?: InputMaybe<Scalars['Int']['input']>
  order_products?: InputMaybe<Order_Product_Arr_Rel_Insert_Input>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields'
  comment?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  customer_id?: Maybe<Scalars['uuid']['output']>
  delivery_date?: Maybe<Scalars['date']['output']>
  delivery_method_id?: Maybe<Scalars['uuid']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  order_nr?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  comment?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  customer_id?: InputMaybe<Order_By>
  delivery_date?: InputMaybe<Order_By>
  delivery_method_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_nr?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields'
  comment?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  customer_id?: Maybe<Scalars['uuid']['output']>
  delivery_date?: Maybe<Scalars['date']['output']>
  delivery_method_id?: Maybe<Scalars['uuid']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  order_nr?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  comment?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  customer_id?: InputMaybe<Order_By>
  delivery_date?: InputMaybe<Order_By>
  delivery_method_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_nr?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Order>
}

/** input type for inserting object relation for remote table "order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>
}

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint
  update_columns?: Array<Order_Update_Column>
  where?: InputMaybe<Order_Bool_Exp>
}

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  comment?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  customer?: InputMaybe<Customer_Order_By>
  customer_id?: InputMaybe<Order_By>
  delivery_date?: InputMaybe<Order_By>
  delivery_method?: InputMaybe<Delivery_Method_Order_By>
  delivery_method_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_nr?: InputMaybe<Order_By>
  order_products_aggregate?: InputMaybe<Order_Product_Aggregate_Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** Bridge table for orders and products many-to-many relationship */
export type Order_Product = {
  __typename?: 'order_product'
  created_at: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  /** An object relationship */
  order: Order
  order_id: Scalars['uuid']['output']
  /** An object relationship */
  product: Product
  product_id: Scalars['uuid']['output']
  quantity: Scalars['Int']['output']
  updated_at: Scalars['timestamptz']['output']
}

/** aggregated selection of "order_product" */
export type Order_Product_Aggregate = {
  __typename?: 'order_product_aggregate'
  aggregate?: Maybe<Order_Product_Aggregate_Fields>
  nodes: Array<Order_Product>
}

export type Order_Product_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Product_Aggregate_Bool_Exp_Count>
}

export type Order_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Product_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Order_Product_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "order_product" */
export type Order_Product_Aggregate_Fields = {
  __typename?: 'order_product_aggregate_fields'
  avg?: Maybe<Order_Product_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Order_Product_Max_Fields>
  min?: Maybe<Order_Product_Min_Fields>
  stddev?: Maybe<Order_Product_Stddev_Fields>
  stddev_pop?: Maybe<Order_Product_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Order_Product_Stddev_Samp_Fields>
  sum?: Maybe<Order_Product_Sum_Fields>
  var_pop?: Maybe<Order_Product_Var_Pop_Fields>
  var_samp?: Maybe<Order_Product_Var_Samp_Fields>
  variance?: Maybe<Order_Product_Variance_Fields>
}

/** aggregate fields of "order_product" */
export type Order_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Product_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "order_product" */
export type Order_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Product_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Order_Product_Max_Order_By>
  min?: InputMaybe<Order_Product_Min_Order_By>
  stddev?: InputMaybe<Order_Product_Stddev_Order_By>
  stddev_pop?: InputMaybe<Order_Product_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Order_Product_Stddev_Samp_Order_By>
  sum?: InputMaybe<Order_Product_Sum_Order_By>
  var_pop?: InputMaybe<Order_Product_Var_Pop_Order_By>
  var_samp?: InputMaybe<Order_Product_Var_Samp_Order_By>
  variance?: InputMaybe<Order_Product_Variance_Order_By>
}

/** input type for inserting array relation for remote table "order_product" */
export type Order_Product_Arr_Rel_Insert_Input = {
  data: Array<Order_Product_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Product_On_Conflict>
}

/** aggregate avg on columns */
export type Order_Product_Avg_Fields = {
  __typename?: 'order_product_avg_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "order_product" */
export type Order_Product_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "order_product". All fields are combined with a logical 'AND'. */
export type Order_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Product_Bool_Exp>>
  _not?: InputMaybe<Order_Product_Bool_Exp>
  _or?: InputMaybe<Array<Order_Product_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  order?: InputMaybe<Order_Bool_Exp>
  order_id?: InputMaybe<Uuid_Comparison_Exp>
  product?: InputMaybe<Product_Bool_Exp>
  product_id?: InputMaybe<Uuid_Comparison_Exp>
  quantity?: InputMaybe<Int_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "order_product" */
export enum Order_Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderProductPkey = 'order_product_pkey',
}

/** input type for incrementing numeric columns in table "order_product" */
export type Order_Product_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "order_product" */
export type Order_Product_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  order?: InputMaybe<Order_Obj_Rel_Insert_Input>
  order_id?: InputMaybe<Scalars['uuid']['input']>
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>
  product_id?: InputMaybe<Scalars['uuid']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate max on columns */
export type Order_Product_Max_Fields = {
  __typename?: 'order_product_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  order_id?: Maybe<Scalars['uuid']['output']>
  product_id?: Maybe<Scalars['uuid']['output']>
  quantity?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by max() on columns of table "order_product" */
export type Order_Product_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  product_id?: InputMaybe<Order_By>
  quantity?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Order_Product_Min_Fields = {
  __typename?: 'order_product_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  order_id?: Maybe<Scalars['uuid']['output']>
  product_id?: Maybe<Scalars['uuid']['output']>
  quantity?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by min() on columns of table "order_product" */
export type Order_Product_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  product_id?: InputMaybe<Order_By>
  quantity?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** response of any mutation on the table "order_product" */
export type Order_Product_Mutation_Response = {
  __typename?: 'order_product_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Order_Product>
}

/** on_conflict condition type for table "order_product" */
export type Order_Product_On_Conflict = {
  constraint: Order_Product_Constraint
  update_columns?: Array<Order_Product_Update_Column>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

/** Ordering options when selecting data from "order_product". */
export type Order_Product_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order?: InputMaybe<Order_Order_By>
  order_id?: InputMaybe<Order_By>
  product?: InputMaybe<Product_Order_By>
  product_id?: InputMaybe<Order_By>
  quantity?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: order_product */
export type Order_Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "order_product" */
export enum Order_Product_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "order_product" */
export type Order_Product_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  order_id?: InputMaybe<Scalars['uuid']['input']>
  product_id?: InputMaybe<Scalars['uuid']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate stddev on columns */
export type Order_Product_Stddev_Fields = {
  __typename?: 'order_product_stddev_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "order_product" */
export type Order_Product_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Order_Product_Stddev_Pop_Fields = {
  __typename?: 'order_product_stddev_pop_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "order_product" */
export type Order_Product_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Order_Product_Stddev_Samp_Fields = {
  __typename?: 'order_product_stddev_samp_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "order_product" */
export type Order_Product_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "order_product" */
export type Order_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Product_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Order_Product_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  order_id?: InputMaybe<Scalars['uuid']['input']>
  product_id?: InputMaybe<Scalars['uuid']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Order_Product_Sum_Fields = {
  __typename?: 'order_product_sum_fields'
  quantity?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "order_product" */
export type Order_Product_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** update columns of table "order_product" */
export enum Order_Product_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Order_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Product_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Product_Set_Input>
  /** filter the rows which have to be updated */
  where: Order_Product_Bool_Exp
}

/** aggregate var_pop on columns */
export type Order_Product_Var_Pop_Fields = {
  __typename?: 'order_product_var_pop_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "order_product" */
export type Order_Product_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Order_Product_Var_Samp_Fields = {
  __typename?: 'order_product_var_samp_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "order_product" */
export type Order_Product_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Order_Product_Variance_Fields = {
  __typename?: 'order_product_variance_fields'
  quantity?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "order_product" */
export type Order_Product_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>
}

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DeliveryDate = 'delivery_date',
  /** column name */
  DeliveryMethodId = 'delivery_method_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNr = 'order_nr',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  customer_id?: InputMaybe<Scalars['uuid']['input']>
  delivery_date?: InputMaybe<Scalars['date']['input']>
  delivery_method_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  order_nr?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  customer_id?: InputMaybe<Scalars['uuid']['input']>
  delivery_date?: InputMaybe<Scalars['date']['input']>
  delivery_method_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  order_nr?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields'
  order_nr?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DeliveryDate = 'delivery_date',
  /** column name */
  DeliveryMethodId = 'delivery_method_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNr = 'order_nr',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Set_Input>
  /** filter the rows which have to be updated */
  where: Order_Bool_Exp
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields'
  order_nr?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  order_nr?: InputMaybe<Order_By>
}

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product'
  created_at: Scalars['timestamptz']['output']
  /** An object relationship */
  department?: Maybe<Department>
  department_id?: Maybe<Scalars['uuid']['output']>
  id: Scalars['uuid']['output']
  is_active: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  /** An array relationship */
  order_products: Array<Order_Product>
  /** An aggregate relationship */
  order_products_aggregate: Order_Product_Aggregate
  updated_at: Scalars['timestamptz']['output']
  weight: Scalars['numeric']['output']
}

/** columns and relationships of "product" */
export type ProductOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

/** columns and relationships of "product" */
export type ProductOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate'
  aggregate?: Maybe<Product_Aggregate_Fields>
  nodes: Array<Product>
}

export type Product_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>
}

export type Product_Aggregate_Bool_Exp_Bool_And = {
  arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Product_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Product_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Product_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Product_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields'
  avg?: Maybe<Product_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Product_Max_Fields>
  min?: Maybe<Product_Min_Fields>
  stddev?: Maybe<Product_Stddev_Fields>
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>
  sum?: Maybe<Product_Sum_Fields>
  var_pop?: Maybe<Product_Var_Pop_Fields>
  var_samp?: Maybe<Product_Var_Samp_Fields>
  variance?: Maybe<Product_Variance_Fields>
}

/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Product_Max_Order_By>
  min?: InputMaybe<Product_Min_Order_By>
  stddev?: InputMaybe<Product_Stddev_Order_By>
  stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>
  sum?: InputMaybe<Product_Sum_Order_By>
  var_pop?: InputMaybe<Product_Var_Pop_Order_By>
  var_samp?: InputMaybe<Product_Var_Samp_Order_By>
  variance?: InputMaybe<Product_Variance_Order_By>
}

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>
  _not?: InputMaybe<Product_Bool_Exp>
  _or?: InputMaybe<Array<Product_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  department?: InputMaybe<Department_Bool_Exp>
  department_id?: InputMaybe<Uuid_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  is_active?: InputMaybe<Boolean_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  order_products?: InputMaybe<Order_Product_Bool_Exp>
  order_products_aggregate?: InputMaybe<Order_Product_Aggregate_Bool_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  weight?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey',
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  weight?: InputMaybe<Scalars['numeric']['input']>
}

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  department?: InputMaybe<Department_Obj_Rel_Insert_Input>
  department_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  order_products?: InputMaybe<Order_Product_Arr_Rel_Insert_Input>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
  weight?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  department_id?: Maybe<Scalars['uuid']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
  weight?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  department_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  weight?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  department_id?: Maybe<Scalars['uuid']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
  weight?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  department_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  weight?: InputMaybe<Order_By>
}

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Product>
}

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>
}

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint
  update_columns?: Array<Product_Update_Column>
  where?: InputMaybe<Product_Bool_Exp>
}

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  created_at?: InputMaybe<Order_By>
  department?: InputMaybe<Department_Order_By>
  department_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  is_active?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  order_products_aggregate?: InputMaybe<Order_Product_Aggregate_Order_By>
  updated_at?: InputMaybe<Order_By>
  weight?: InputMaybe<Order_By>
}

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight',
}

/** select "product_aggregate_bool_exp_bool_and_arguments_columns" columns of table "product" */
export enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active',
}

/** select "product_aggregate_bool_exp_bool_or_arguments_columns" columns of table "product" */
export enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active',
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  department_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
  weight?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  department_id?: InputMaybe<Scalars['uuid']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
  weight?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields'
  weight?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight',
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>
  /** filter the rows which have to be updated */
  where: Product_Bool_Exp
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  weight?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields'
  weight?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  weight?: InputMaybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate
  /** fetch data from the table: "customer" */
  customer: Array<Customer>
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>
  /** fetch data from the table: "delivery_method" */
  delivery_method: Array<Delivery_Method>
  /** fetch aggregated fields from the table: "delivery_method" */
  delivery_method_aggregate: Delivery_Method_Aggregate
  /** fetch data from the table: "delivery_method" using primary key columns */
  delivery_method_by_pk?: Maybe<Delivery_Method>
  /** fetch data from the table: "department" */
  department: Array<Department>
  /** fetch aggregated fields from the table: "department" */
  department_aggregate: Department_Aggregate
  /** fetch data from the table: "department" using primary key columns */
  department_by_pk?: Maybe<Department>
  /** fetch data from the table: "district" */
  district: Array<District>
  /** fetch aggregated fields from the table: "district" */
  district_aggregate: District_Aggregate
  /** fetch data from the table: "district" using primary key columns */
  district_by_pk?: Maybe<District>
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>
  /** An array relationship */
  files: Array<Files>
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate
  /** fetch data from the table: "order" */
  order: Array<Order>
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>
  /** fetch data from the table: "order_product" */
  order_product: Array<Order_Product>
  /** fetch aggregated fields from the table: "order_product" */
  order_product_aggregate: Order_Product_Aggregate
  /** fetch data from the table: "order_product" using primary key columns */
  order_product_by_pk?: Maybe<Order_Product>
  /** fetch data from the table: "product" */
  product: Array<Product>
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>
  /** fetch data from the table: "auth.users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate
}

export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input']
}

export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>
  where?: InputMaybe<AuthProviders_Bool_Exp>
}

export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>
  where?: InputMaybe<AuthProviders_Bool_Exp>
}

export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input']
}

export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
}

export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
}

export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input']
}

export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>
  where?: InputMaybe<AuthRoles_Bool_Exp>
}

export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>
  where?: InputMaybe<AuthRoles_Bool_Exp>
}

export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export type Query_RootBucketArgs = {
  id: Scalars['String']['input']
}

export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Buckets_Order_By>>
  where?: InputMaybe<Buckets_Bool_Exp>
}

export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Buckets_Order_By>>
  where?: InputMaybe<Buckets_Bool_Exp>
}

export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootDelivery_MethodArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Method_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Delivery_Method_Order_By>>
  where?: InputMaybe<Delivery_Method_Bool_Exp>
}

export type Query_RootDelivery_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Method_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Delivery_Method_Order_By>>
  where?: InputMaybe<Delivery_Method_Bool_Exp>
}

export type Query_RootDelivery_Method_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootDepartmentArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Department_Order_By>>
  where?: InputMaybe<Department_Bool_Exp>
}

export type Query_RootDepartment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Department_Order_By>>
  where?: InputMaybe<Department_Bool_Exp>
}

export type Query_RootDepartment_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootDistrictArgs = {
  distinct_on?: InputMaybe<Array<District_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<District_Order_By>>
  where?: InputMaybe<District_Bool_Exp>
}

export type Query_RootDistrict_AggregateArgs = {
  distinct_on?: InputMaybe<Array<District_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<District_Order_By>>
  where?: InputMaybe<District_Bool_Exp>
}

export type Query_RootDistrict_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootFileArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Files_Order_By>>
  where?: InputMaybe<Files_Bool_Exp>
}

export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Files_Order_By>>
  where?: InputMaybe<Files_Bool_Exp>
}

export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Query_RootOrder_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootOrder_ProductArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

export type Query_RootOrder_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

export type Query_RootOrder_Product_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootUserArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input']
}

export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Virus_Order_By>>
  where?: InputMaybe<Virus_Bool_Exp>
}

export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Virus_Order_By>>
  where?: InputMaybe<Virus_Bool_Exp>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>
  /** fetch data from the table: "customer" */
  customer: Array<Customer>
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>
  /** fetch data from the table: "delivery_method" */
  delivery_method: Array<Delivery_Method>
  /** fetch aggregated fields from the table: "delivery_method" */
  delivery_method_aggregate: Delivery_Method_Aggregate
  /** fetch data from the table: "delivery_method" using primary key columns */
  delivery_method_by_pk?: Maybe<Delivery_Method>
  /** fetch data from the table in a streaming manner: "delivery_method" */
  delivery_method_stream: Array<Delivery_Method>
  /** fetch data from the table: "department" */
  department: Array<Department>
  /** fetch aggregated fields from the table: "department" */
  department_aggregate: Department_Aggregate
  /** fetch data from the table: "department" using primary key columns */
  department_by_pk?: Maybe<Department>
  /** fetch data from the table in a streaming manner: "department" */
  department_stream: Array<Department>
  /** fetch data from the table: "district" */
  district: Array<District>
  /** fetch aggregated fields from the table: "district" */
  district_aggregate: District_Aggregate
  /** fetch data from the table: "district" using primary key columns */
  district_by_pk?: Maybe<District>
  /** fetch data from the table in a streaming manner: "district" */
  district_stream: Array<District>
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>
  /** An array relationship */
  files: Array<Files>
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>
  /** fetch data from the table: "order" */
  order: Array<Order>
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>
  /** fetch data from the table: "order_product" */
  order_product: Array<Order_Product>
  /** fetch aggregated fields from the table: "order_product" */
  order_product_aggregate: Order_Product_Aggregate
  /** fetch data from the table: "order_product" using primary key columns */
  order_product_by_pk?: Maybe<Order_Product>
  /** fetch data from the table in a streaming manner: "order_product" */
  order_product_stream: Array<Order_Product>
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>
  /** fetch data from the table: "product" */
  product: Array<Product>
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>
  /** fetch data from the table: "auth.users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate
}

export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>
  where?: InputMaybe<AuthProviders_Bool_Exp>
}

export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>
  where?: InputMaybe<AuthProviders_Bool_Exp>
}

export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>
  where?: InputMaybe<AuthProviders_Bool_Exp>
}

export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input']
}

export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
}

export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
}

export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>
}

export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input']
}

export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>
  where?: InputMaybe<AuthRoles_Bool_Exp>
}

export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>
  where?: InputMaybe<AuthRoles_Bool_Exp>
}

export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>
  where?: InputMaybe<AuthRoles_Bool_Exp>
}

export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input']
}

export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Buckets_Order_By>>
  where?: InputMaybe<Buckets_Bool_Exp>
}

export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Buckets_Order_By>>
  where?: InputMaybe<Buckets_Bool_Exp>
}

export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>
  where?: InputMaybe<Buckets_Bool_Exp>
}

export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Customer_Order_By>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>
  where?: InputMaybe<Customer_Bool_Exp>
}

export type Subscription_RootDelivery_MethodArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Method_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Delivery_Method_Order_By>>
  where?: InputMaybe<Delivery_Method_Bool_Exp>
}

export type Subscription_RootDelivery_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delivery_Method_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Delivery_Method_Order_By>>
  where?: InputMaybe<Delivery_Method_Bool_Exp>
}

export type Subscription_RootDelivery_Method_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootDelivery_Method_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Delivery_Method_Stream_Cursor_Input>>
  where?: InputMaybe<Delivery_Method_Bool_Exp>
}

export type Subscription_RootDepartmentArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Department_Order_By>>
  where?: InputMaybe<Department_Bool_Exp>
}

export type Subscription_RootDepartment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Department_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Department_Order_By>>
  where?: InputMaybe<Department_Bool_Exp>
}

export type Subscription_RootDepartment_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootDepartment_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Department_Stream_Cursor_Input>>
  where?: InputMaybe<Department_Bool_Exp>
}

export type Subscription_RootDistrictArgs = {
  distinct_on?: InputMaybe<Array<District_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<District_Order_By>>
  where?: InputMaybe<District_Bool_Exp>
}

export type Subscription_RootDistrict_AggregateArgs = {
  distinct_on?: InputMaybe<Array<District_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<District_Order_By>>
  where?: InputMaybe<District_Bool_Exp>
}

export type Subscription_RootDistrict_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootDistrict_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<District_Stream_Cursor_Input>>
  where?: InputMaybe<District_Bool_Exp>
}

export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Files_Order_By>>
  where?: InputMaybe<Files_Bool_Exp>
}

export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Files_Order_By>>
  where?: InputMaybe<Files_Bool_Exp>
}

export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>
  where?: InputMaybe<Files_Bool_Exp>
}

export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Order_By>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootOrder_ProductArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

export type Subscription_RootOrder_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Order_Product_Order_By>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

export type Subscription_RootOrder_Product_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootOrder_Product_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Order_Product_Stream_Cursor_Input>>
  where?: InputMaybe<Order_Product_Bool_Exp>
}

export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>
  where?: InputMaybe<Order_Bool_Exp>
}

export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Product_Order_By>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>
  where?: InputMaybe<Product_Bool_Exp>
}

export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>
  where?: InputMaybe<Virus_Bool_Exp>
}

export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Virus_Order_By>>
  where?: InputMaybe<Virus_Bool_Exp>
}

export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Virus_Order_By>>
  where?: InputMaybe<Virus_Bool_Exp>
}

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']['input']>
  _gt?: InputMaybe<Scalars['time']['input']>
  _gte?: InputMaybe<Scalars['time']['input']>
  _in?: InputMaybe<Array<Scalars['time']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['time']['input']>
  _lte?: InputMaybe<Scalars['time']['input']>
  _neq?: InputMaybe<Scalars['time']['input']>
  _nin?: InputMaybe<Array<Scalars['time']['input']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>
  _gt?: InputMaybe<Scalars['timestamptz']['input']>
  _gte?: InputMaybe<Scalars['timestamptz']['input']>
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timestamptz']['input']>
  _lte?: InputMaybe<Scalars['timestamptz']['input']>
  _neq?: InputMaybe<Scalars['timestamptz']['input']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users'
  activeMfaType?: Maybe<Scalars['String']['output']>
  avatarUrl: Scalars['String']['output']
  createdAt: Scalars['timestamptz']['output']
  currentChallenge?: Maybe<Scalars['String']['output']>
  defaultRole: Scalars['String']['output']
  /** An object relationship */
  defaultRoleByRole: AuthRoles
  disabled: Scalars['Boolean']['output']
  displayName: Scalars['String']['output']
  email?: Maybe<Scalars['citext']['output']>
  emailVerified: Scalars['Boolean']['output']
  id: Scalars['uuid']['output']
  isAnonymous: Scalars['Boolean']['output']
  lastSeen?: Maybe<Scalars['timestamptz']['output']>
  locale: Scalars['String']['output']
  metadata?: Maybe<Scalars['jsonb']['output']>
  newEmail?: Maybe<Scalars['citext']['output']>
  otpHash?: Maybe<Scalars['String']['output']>
  otpHashExpiresAt: Scalars['timestamptz']['output']
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>
  passwordHash?: Maybe<Scalars['String']['output']>
  phoneNumber?: Maybe<Scalars['String']['output']>
  phoneNumberVerified: Scalars['Boolean']['output']
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate
  /** An array relationship */
  roles: Array<AuthUserRoles>
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate
  ticket?: Maybe<Scalars['String']['output']>
  ticketExpiresAt: Scalars['timestamptz']['output']
  totpSecret?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['timestamptz']['output']
  /** An array relationship */
  userProviders: Array<AuthUserProviders>
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>
  where?: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>
  where?: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>
}

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Users_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Users_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Users_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Users_Max_Order_By>
  min?: InputMaybe<Users_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>
}

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  activeMfaType?: InputMaybe<String_Comparison_Exp>
  avatarUrl?: InputMaybe<String_Comparison_Exp>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  currentChallenge?: InputMaybe<String_Comparison_Exp>
  defaultRole?: InputMaybe<String_Comparison_Exp>
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>
  disabled?: InputMaybe<Boolean_Comparison_Exp>
  displayName?: InputMaybe<String_Comparison_Exp>
  email?: InputMaybe<Citext_Comparison_Exp>
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>
  locale?: InputMaybe<String_Comparison_Exp>
  metadata?: InputMaybe<Jsonb_Comparison_Exp>
  newEmail?: InputMaybe<Citext_Comparison_Exp>
  otpHash?: InputMaybe<String_Comparison_Exp>
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>
  passwordHash?: InputMaybe<String_Comparison_Exp>
  phoneNumber?: InputMaybe<String_Comparison_Exp>
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>
  ticket?: InputMaybe<String_Comparison_Exp>
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>
  totpSecret?: InputMaybe<String_Comparison_Exp>
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>
}

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>
  avatarUrl?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  currentChallenge?: InputMaybe<Scalars['String']['input']>
  defaultRole?: InputMaybe<Scalars['String']['input']>
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>
  disabled?: InputMaybe<Scalars['Boolean']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['citext']['input']>
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  newEmail?: InputMaybe<Scalars['citext']['input']>
  otpHash?: InputMaybe<Scalars['String']['input']>
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>
  passwordHash?: InputMaybe<Scalars['String']['input']>
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>
  ticket?: InputMaybe<Scalars['String']['input']>
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  totpSecret?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  activeMfaType?: Maybe<Scalars['String']['output']>
  avatarUrl?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  currentChallenge?: Maybe<Scalars['String']['output']>
  defaultRole?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['citext']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  lastSeen?: Maybe<Scalars['timestamptz']['output']>
  locale?: Maybe<Scalars['String']['output']>
  newEmail?: Maybe<Scalars['citext']['output']>
  otpHash?: Maybe<Scalars['String']['output']>
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>
  passwordHash?: Maybe<Scalars['String']['output']>
  phoneNumber?: Maybe<Scalars['String']['output']>
  ticket?: Maybe<Scalars['String']['output']>
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>
  totpSecret?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
}

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>
  avatarUrl?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  currentChallenge?: InputMaybe<Order_By>
  defaultRole?: InputMaybe<Order_By>
  displayName?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  lastSeen?: InputMaybe<Order_By>
  locale?: InputMaybe<Order_By>
  newEmail?: InputMaybe<Order_By>
  otpHash?: InputMaybe<Order_By>
  otpHashExpiresAt?: InputMaybe<Order_By>
  otpMethodLastUsed?: InputMaybe<Order_By>
  passwordHash?: InputMaybe<Order_By>
  phoneNumber?: InputMaybe<Order_By>
  ticket?: InputMaybe<Order_By>
  ticketExpiresAt?: InputMaybe<Order_By>
  totpSecret?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  activeMfaType?: Maybe<Scalars['String']['output']>
  avatarUrl?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  currentChallenge?: Maybe<Scalars['String']['output']>
  defaultRole?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['citext']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  lastSeen?: Maybe<Scalars['timestamptz']['output']>
  locale?: Maybe<Scalars['String']['output']>
  newEmail?: Maybe<Scalars['citext']['output']>
  otpHash?: Maybe<Scalars['String']['output']>
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>
  passwordHash?: Maybe<Scalars['String']['output']>
  phoneNumber?: Maybe<Scalars['String']['output']>
  ticket?: Maybe<Scalars['String']['output']>
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>
  totpSecret?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
}

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>
  avatarUrl?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  currentChallenge?: InputMaybe<Order_By>
  defaultRole?: InputMaybe<Order_By>
  displayName?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  lastSeen?: InputMaybe<Order_By>
  locale?: InputMaybe<Order_By>
  newEmail?: InputMaybe<Order_By>
  otpHash?: InputMaybe<Order_By>
  otpHashExpiresAt?: InputMaybe<Order_By>
  otpMethodLastUsed?: InputMaybe<Order_By>
  passwordHash?: InputMaybe<Order_By>
  phoneNumber?: InputMaybe<Order_By>
  ticket?: InputMaybe<Order_By>
  ticketExpiresAt?: InputMaybe<Order_By>
  totpSecret?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>
  avatarUrl?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  currentChallenge?: InputMaybe<Order_By>
  defaultRole?: InputMaybe<Order_By>
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>
  disabled?: InputMaybe<Order_By>
  displayName?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  emailVerified?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  isAnonymous?: InputMaybe<Order_By>
  lastSeen?: InputMaybe<Order_By>
  locale?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  newEmail?: InputMaybe<Order_By>
  otpHash?: InputMaybe<Order_By>
  otpHashExpiresAt?: InputMaybe<Order_By>
  otpMethodLastUsed?: InputMaybe<Order_By>
  passwordHash?: InputMaybe<Order_By>
  phoneNumber?: InputMaybe<Order_By>
  phoneNumberVerified?: InputMaybe<Order_By>
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>
  ticket?: InputMaybe<Order_By>
  ticketExpiresAt?: InputMaybe<Order_By>
  totpSecret?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>
}

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>
}

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>
  avatarUrl?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  currentChallenge?: InputMaybe<Scalars['String']['input']>
  defaultRole?: InputMaybe<Scalars['String']['input']>
  disabled?: InputMaybe<Scalars['Boolean']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['citext']['input']>
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  newEmail?: InputMaybe<Scalars['citext']['input']>
  otpHash?: InputMaybe<Scalars['String']['input']>
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>
  passwordHash?: InputMaybe<Scalars['String']['input']>
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>
  ticket?: InputMaybe<Scalars['String']['input']>
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  totpSecret?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>
  avatarUrl?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  currentChallenge?: InputMaybe<Scalars['String']['input']>
  defaultRole?: InputMaybe<Scalars['String']['input']>
  disabled?: InputMaybe<Scalars['Boolean']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['citext']['input']>
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  newEmail?: InputMaybe<Scalars['citext']['input']>
  otpHash?: InputMaybe<Scalars['String']['input']>
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>
  passwordHash?: InputMaybe<Scalars['String']['input']>
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>
  ticket?: InputMaybe<Scalars['String']['input']>
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>
  totpSecret?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
}

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>
  _gt?: InputMaybe<Scalars['uuid']['input']>
  _gte?: InputMaybe<Scalars['uuid']['input']>
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['uuid']['input']>
  _lte?: InputMaybe<Scalars['uuid']['input']>
  _neq?: InputMaybe<Scalars['uuid']['input']>
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>
}

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus'
  createdAt: Scalars['timestamptz']['output']
  /** An object relationship */
  file: Files
  fileId: Scalars['uuid']['output']
  filename: Scalars['String']['output']
  id: Scalars['uuid']['output']
  updatedAt: Scalars['timestamptz']['output']
  userSession: Scalars['jsonb']['output']
  virus: Scalars['String']['output']
}

/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate'
  aggregate?: Maybe<Virus_Aggregate_Fields>
  nodes: Array<Virus>
}

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Virus_Max_Fields>
  min?: Maybe<Virus_Min_Fields>
}

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>
}

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>
  _not?: InputMaybe<Virus_Bool_Exp>
  _or?: InputMaybe<Array<Virus_Bool_Exp>>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  file?: InputMaybe<Files_Bool_Exp>
  fileId?: InputMaybe<Uuid_Comparison_Exp>
  filename?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
  userSession?: InputMaybe<Jsonb_Comparison_Exp>
  virus?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>
}

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>
  fileId?: InputMaybe<Scalars['uuid']['input']>
  filename?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  userSession?: InputMaybe<Scalars['jsonb']['input']>
  virus?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  fileId?: Maybe<Scalars['uuid']['output']>
  filename?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
  virus?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']['output']>
  fileId?: Maybe<Scalars['uuid']['output']>
  filename?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  updatedAt?: Maybe<Scalars['timestamptz']['output']>
  virus?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Virus>
}

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint
  update_columns?: Array<Virus_Update_Column>
  where?: InputMaybe<Virus_Bool_Exp>
}

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>
  file?: InputMaybe<Files_Order_By>
  fileId?: InputMaybe<Order_By>
  filename?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
  userSession?: InputMaybe<Order_By>
  virus?: InputMaybe<Order_By>
}

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>
}

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus',
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  fileId?: InputMaybe<Scalars['uuid']['input']>
  filename?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  userSession?: InputMaybe<Scalars['jsonb']['input']>
  virus?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>
  fileId?: InputMaybe<Scalars['uuid']['input']>
  filename?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>
  userSession?: InputMaybe<Scalars['jsonb']['input']>
  virus?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus',
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp
}

export type CustomersByDistrictQueryVariables = Exact<{
  onlyActive?: InputMaybe<Array<Scalars['Boolean']['input']> | Scalars['Boolean']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}>

export type CustomersByDistrictQuery = {
  __typename?: 'query_root'
  district: Array<{
    __typename?: 'district'
    id: any
    name: string
    customers: Array<{ __typename?: 'customer'; id: any; name: string; address: string }>
  }>
}

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['uuid']['input']
}>

export type DeleteOrderMutation = {
  __typename?: 'mutation_root'
  delete_order_by_pk?: { __typename?: 'order'; id: any } | null
}

export type DepartmentsQueryVariables = Exact<{ [key: string]: never }>

export type DepartmentsQuery = {
  __typename?: 'query_root'
  department: Array<{ __typename?: 'department'; id: any; name: string }>
}

export type DistrictsQueryVariables = Exact<{ [key: string]: never }>

export type DistrictsQuery = {
  __typename?: 'query_root'
  district: Array<{ __typename?: 'district'; id: any; name: string }>
}

export type ProductsByDepartmentQueryVariables = Exact<{
  onlyActive?: InputMaybe<Array<Scalars['Boolean']['input']> | Scalars['Boolean']['input']>
}>

export type ProductsByDepartmentQuery = {
  __typename?: 'query_root'
  department: Array<{
    __typename?: 'department'
    id: any
    name: string
    products: Array<{ __typename?: 'product'; id: any; name: string; weight: any }>
  }>
}

export type FullCustomer_On_CustomerFragment = {
  __typename?: 'customer'
  id: any
  is_active: boolean
  name: string
  address: string
  delivery_start_time?: any | null
  delivery_end_time?: any | null
  district?: { __typename?: 'district'; id: any; name: string } | null
}

export type CustomerQueryVariables = Exact<{
  id: Scalars['uuid']['input']
}>

export type CustomerQuery = {
  __typename?: 'query_root'
  customer_by_pk?: {
    __typename?: 'customer'
    id: any
    is_active: boolean
    name: string
    address: string
    delivery_start_time?: any | null
    delivery_end_time?: any | null
    district?: { __typename?: 'district'; id: any; name: string } | null
  } | null
}

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['uuid']['input']
  input: Customer_Set_Input
}>

export type UpdateCustomerMutation = {
  __typename?: 'mutation_root'
  update_customer_by_pk?: {
    __typename?: 'customer'
    id: any
    is_active: boolean
    name: string
    address: string
    delivery_start_time?: any | null
    delivery_end_time?: any | null
    district?: { __typename?: 'district'; id: any; name: string } | null
  } | null
}

export type AddCustomerMutationVariables = Exact<{
  name: Scalars['String']['input']
  address: Scalars['String']['input']
  district_id: Scalars['uuid']['input']
}>

export type AddCustomerMutation = {
  __typename?: 'mutation_root'
  insert_customer_one?: { __typename?: 'customer'; id: any } | null
}

export type FullDistrict_On_DistrictFragment = { __typename?: 'district'; id: any; name: string }

export type DistrictQueryVariables = Exact<{
  id: Scalars['uuid']['input']
}>

export type DistrictQuery = {
  __typename?: 'query_root'
  district_by_pk?: { __typename?: 'district'; id: any; name: string } | null
}

export type UpdateDistrictMutationVariables = Exact<{
  id: Scalars['uuid']['input']
  input: District_Set_Input
}>

export type UpdateDistrictMutation = {
  __typename?: 'mutation_root'
  update_district_by_pk?: { __typename?: 'district'; id: any; name: string } | null
}

export type AddDistrictMutationVariables = Exact<{
  name: Scalars['String']['input']
}>

export type AddDistrictMutation = {
  __typename?: 'mutation_root'
  insert_district_one?: { __typename?: 'district'; id: any } | null
}

export type OrderProduct_On_OrderProductFragment = {
  __typename?: 'order_product'
  id: any
  quantity: number
  product: {
    __typename?: 'product'
    id: any
    name: string
    weight: any
    department?: { __typename?: 'department'; id: any; name: string } | null
  }
}

export type FullOrder_On_OrderFragment = {
  __typename?: 'order'
  id: any
  created_at: any
  updated_at: any
  order_nr: number
  comment?: string | null
  delivery_date: any
  delivery_method?: { __typename?: 'delivery_method'; id: any; name: string } | null
  customer: {
    __typename?: 'customer'
    id: any
    name: string
    district?: { __typename?: 'district'; id: any; name: string } | null
  }
  order_products: Array<{
    __typename?: 'order_product'
    id: any
    quantity: number
    product: {
      __typename?: 'product'
      id: any
      name: string
      weight: any
      department?: { __typename?: 'department'; id: any; name: string } | null
    }
  }>
}

export type OrderQueryVariables = Exact<{
  id: Scalars['uuid']['input']
}>

export type OrderQuery = {
  __typename?: 'query_root'
  order_by_pk?: {
    __typename?: 'order'
    id: any
    created_at: any
    updated_at: any
    order_nr: number
    comment?: string | null
    delivery_date: any
    delivery_method?: { __typename?: 'delivery_method'; id: any; name: string } | null
    customer: {
      __typename?: 'customer'
      id: any
      name: string
      district?: { __typename?: 'district'; id: any; name: string } | null
    }
    order_products: Array<{
      __typename?: 'order_product'
      id: any
      quantity: number
      product: {
        __typename?: 'product'
        id: any
        name: string
        weight: any
        department?: { __typename?: 'department'; id: any; name: string } | null
      }
    }>
  } | null
}

export type DeliveryMethodsQueryVariables = Exact<{ [key: string]: never }>

export type DeliveryMethodsQuery = {
  __typename?: 'query_root'
  delivery_method: Array<{ __typename?: 'delivery_method'; id: any; name: string }>
}

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['uuid']['input']
  input: Order_Set_Input
}>

export type UpdateOrderMutation = {
  __typename?: 'mutation_root'
  update_order_by_pk?: {
    __typename?: 'order'
    id: any
    created_at: any
    updated_at: any
    order_nr: number
    comment?: string | null
    delivery_date: any
    delivery_method?: { __typename?: 'delivery_method'; id: any; name: string } | null
    customer: {
      __typename?: 'customer'
      id: any
      name: string
      district?: { __typename?: 'district'; id: any; name: string } | null
    }
    order_products: Array<{
      __typename?: 'order_product'
      id: any
      quantity: number
      product: {
        __typename?: 'product'
        id: any
        name: string
        weight: any
        department?: { __typename?: 'department'; id: any; name: string } | null
      }
    }>
  } | null
}

export type UpdateOrderProductMutationVariables = Exact<{
  id: Scalars['uuid']['input']
  quantity: Scalars['Int']['input']
}>

export type UpdateOrderProductMutation = {
  __typename?: 'mutation_root'
  update_order_product_by_pk?: {
    __typename?: 'order_product'
    id: any
    quantity: number
    product: {
      __typename?: 'product'
      id: any
      name: string
      weight: any
      department?: { __typename?: 'department'; id: any; name: string } | null
    }
  } | null
}

export type AddOrderProductMutationVariables = Exact<{
  order_id: Scalars['uuid']['input']
  quantity: Scalars['Int']['input']
  product_id: Scalars['uuid']['input']
}>

export type AddOrderProductMutation = {
  __typename?: 'mutation_root'
  insert_order_product_one?: {
    __typename?: 'order_product'
    id: any
    quantity: number
    product: {
      __typename?: 'product'
      id: any
      name: string
      weight: any
      department?: { __typename?: 'department'; id: any; name: string } | null
    }
  } | null
}

export type DeleteOrderProductMutationVariables = Exact<{
  id: Scalars['uuid']['input']
}>

export type DeleteOrderProductMutation = {
  __typename?: 'mutation_root'
  delete_order_product_by_pk?: { __typename?: 'order_product'; id: any } | null
}

export type ListOrder_On_OrderFragment = {
  __typename?: 'order'
  id: any
  created_at: any
  order_nr: number
  delivery_date: any
  comment?: string | null
  customer: {
    __typename?: 'customer'
    id: any
    name: string
    district?: { __typename?: 'district'; id: any; name: string } | null
  }
  order_products: Array<{
    __typename?: 'order_product'
    id: any
    quantity: number
    product: {
      __typename?: 'product'
      id: any
      name: string
      weight: any
      department?: { __typename?: 'department'; id: any; name: string } | null
    }
  }>
}

export type OrdersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  filters?: InputMaybe<Order_Bool_Exp>
}>

export type OrdersQuery = {
  __typename?: 'query_root'
  order_aggregate: {
    __typename?: 'order_aggregate'
    aggregate?: { __typename?: 'order_aggregate_fields'; count: number } | null
  }
  order: Array<{
    __typename?: 'order'
    id: any
    created_at: any
    order_nr: number
    delivery_date: any
    comment?: string | null
    customer: {
      __typename?: 'customer'
      id: any
      name: string
      district?: { __typename?: 'district'; id: any; name: string } | null
    }
    order_products: Array<{
      __typename?: 'order_product'
      id: any
      quantity: number
      product: {
        __typename?: 'product'
        id: any
        name: string
        weight: any
        department?: { __typename?: 'department'; id: any; name: string } | null
      }
    }>
  }>
}

export type AddOrderMutationVariables = Exact<{
  customer_id?: InputMaybe<Scalars['uuid']['input']>
  delivery_date?: InputMaybe<Scalars['date']['input']>
}>

export type AddOrderMutation = {
  __typename?: 'mutation_root'
  insert_order_one?: {
    __typename?: 'order'
    id: any
    created_at: any
    order_nr: number
    delivery_date: any
    comment?: string | null
    customer: {
      __typename?: 'customer'
      id: any
      name: string
      district?: { __typename?: 'district'; id: any; name: string } | null
    }
    order_products: Array<{
      __typename?: 'order_product'
      id: any
      quantity: number
      product: {
        __typename?: 'product'
        id: any
        name: string
        weight: any
        department?: { __typename?: 'department'; id: any; name: string } | null
      }
    }>
  } | null
}

export type FullProduct_On_ProductFragment = {
  __typename?: 'product'
  id: any
  is_active: boolean
  name: string
  weight: any
  department?: { __typename?: 'department'; id: any; name: string } | null
}

export type ProductQueryVariables = Exact<{
  id: Scalars['uuid']['input']
}>

export type ProductQuery = {
  __typename?: 'query_root'
  product_by_pk?: {
    __typename?: 'product'
    id: any
    is_active: boolean
    name: string
    weight: any
    department?: { __typename?: 'department'; id: any; name: string } | null
  } | null
}

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['uuid']['input']
  input: Product_Set_Input
}>

export type UpdateProductMutation = {
  __typename?: 'mutation_root'
  update_product_by_pk?: {
    __typename?: 'product'
    id: any
    is_active: boolean
    name: string
    weight: any
    department?: { __typename?: 'department'; id: any; name: string } | null
  } | null
}

export type ProdusctsByOrderDateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  filters?: InputMaybe<Order_Product_Bool_Exp>
}>

export type ProdusctsByOrderDateQuery = {
  __typename?: 'query_root'
  order_product: Array<{
    __typename?: 'order_product'
    id: any
    quantity: number
    order: { __typename?: 'order'; id: any; delivery_date: any }
    product: {
      __typename?: 'product'
      id: any
      name: string
      weight: any
      department?: { __typename?: 'department'; id: any; name: string } | null
    }
  }>
}

export type OrdersByDateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  filters?: InputMaybe<Order_Bool_Exp>
}>

export type OrdersByDateQuery = {
  __typename?: 'query_root'
  order_aggregate: {
    __typename?: 'order_aggregate'
    aggregate?: { __typename?: 'order_aggregate_fields'; count: number } | null
  }
  order: Array<{
    __typename?: 'order'
    id: any
    created_at: any
    delivery_date: any
    order_products: Array<{
      __typename?: 'order_product'
      id: any
      quantity: number
      product: {
        __typename?: 'product'
        id: any
        name: string
        weight: any
        department?: { __typename?: 'department'; id: any; name: string } | null
      }
    }>
  }>
}

export type AddProductMutationVariables = Exact<{
  name: Scalars['String']['input']
  weight: Scalars['numeric']['input']
  department_id: Scalars['uuid']['input']
}>

export type AddProductMutation = {
  __typename?: 'mutation_root'
  insert_product_one?: { __typename?: 'product'; id: any } | null
}

export type User_On_UsersFragment = {
  __typename?: 'users'
  id: any
  email?: any | null
  displayName: string
  defaultRole: string
  disabled: boolean
  emailVerified: boolean
  roles: Array<{ __typename?: 'authUserRoles'; id: any; role: string }>
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'query_root'
  users: Array<{
    __typename?: 'users'
    id: any
    email?: any | null
    displayName: string
    defaultRole: string
    disabled: boolean
    emailVerified: boolean
    roles: Array<{ __typename?: 'authUserRoles'; id: any; role: string }>
  }>
}

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input']
  input?: InputMaybe<Users_Set_Input>
}>

export type UpdateUserMutation = {
  __typename?: 'mutation_root'
  updateUser?: {
    __typename?: 'users'
    id: any
    email?: any | null
    displayName: string
    defaultRole: string
    disabled: boolean
    emailVerified: boolean
    roles: Array<{ __typename?: 'authUserRoles'; id: any; role: string }>
  } | null
}

export const FullCustomer_On_CustomerFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullCustomer_on_Customer' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_start_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_end_time' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'district' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullCustomer_On_CustomerFragment, unknown>
export const FullDistrict_On_DistrictFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullDistrict_on_District' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'district' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullDistrict_On_DistrictFragment, unknown>
export const OrderProduct_On_OrderProductFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrderProduct_On_OrderProductFragment, unknown>
export const FullOrder_On_OrderFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullOrder_on_Order' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_nr' } },
          { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delivery_method' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'district' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullOrder_On_OrderFragment, unknown>
export const ListOrder_On_OrderFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'listOrder_on_Order' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_nr' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'district' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'department' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListOrder_On_OrderFragment, unknown>
export const FullProduct_On_ProductFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullProduct_on_Product' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullProduct_On_ProductFragment, unknown>
export const User_On_UsersFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'user_on_Users' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'users' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'defaultRole' } },
          { kind: 'Field', name: { kind: 'Name', value: 'disabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailVerified' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<User_On_UsersFragment, unknown>
export const CustomersByDistrictDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CustomersByDistrict' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'onlyActive' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
            },
          },
          defaultValue: { kind: 'ListValue', values: [{ kind: 'BooleanValue', value: true }] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'search' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '%%', block: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'district' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customers' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_and' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'is_active' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_in' },
                                            value: {
                                              kind: 'Variable',
                                              name: { kind: 'Name', value: 'onlyActive' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: '_or' },
                                      value: {
                                        kind: 'ListValue',
                                        values: [
                                          {
                                            kind: 'ObjectValue',
                                            fields: [
                                              {
                                                kind: 'ObjectField',
                                                name: { kind: 'Name', value: 'name' },
                                                value: {
                                                  kind: 'ObjectValue',
                                                  fields: [
                                                    {
                                                      kind: 'ObjectField',
                                                      name: { kind: 'Name', value: '_ilike' },
                                                      value: {
                                                        kind: 'Variable',
                                                        name: { kind: 'Name', value: 'search' },
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                          {
                                            kind: 'ObjectValue',
                                            fields: [
                                              {
                                                kind: 'ObjectField',
                                                name: { kind: 'Name', value: 'address' },
                                                value: {
                                                  kind: 'ObjectValue',
                                                  fields: [
                                                    {
                                                      kind: 'ObjectField',
                                                      name: { kind: 'Name', value: '_ilike' },
                                                      value: {
                                                        kind: 'Variable',
                                                        name: { kind: 'Name', value: 'search' },
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'name' },
                            value: { kind: 'EnumValue', value: 'asc' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomersByDistrictQuery, CustomersByDistrictQueryVariables>
export const DeleteOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_order_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteOrderMutation, DeleteOrderMutationVariables>
export const DepartmentsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Departments' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DepartmentsQuery, DepartmentsQueryVariables>
export const DistrictsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Districts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'district' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DistrictsQuery, DistrictsQueryVariables>
export const ProductsByDepartmentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProductsByDepartment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'onlyActive' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
            },
          },
          defaultValue: { kind: 'ListValue', values: [{ kind: 'BooleanValue', value: true }] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'department' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'products' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_active' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_in' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'onlyActive' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'name' },
                            value: { kind: 'EnumValue', value: 'asc' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductsByDepartmentQuery, ProductsByDepartmentQueryVariables>
export const CustomerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Customer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'fullCustomer_on_Customer' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullCustomer_on_Customer' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_start_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_end_time' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'district' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomerQuery, CustomerQueryVariables>
export const UpdateCustomerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'customer_set_input' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_customer_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'fullCustomer_on_Customer' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullCustomer_on_Customer' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_start_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_end_time' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'district' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateCustomerMutation, UpdateCustomerMutationVariables>
export const AddCustomerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'district_id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_customer_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'address' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'district_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'district_id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddCustomerMutation, AddCustomerMutationVariables>
export const DistrictDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'District' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'district_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'fullDistrict_on_District' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullDistrict_on_District' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'district' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DistrictQuery, DistrictQueryVariables>
export const UpdateDistrictDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateDistrict' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'district_set_input' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_district_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'fullDistrict_on_District' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullDistrict_on_District' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'district' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateDistrictMutation, UpdateDistrictMutationVariables>
export const AddDistrictDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddDistrict' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_district_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddDistrictMutation, AddDistrictMutationVariables>
export const OrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Order' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'fullOrder_on_Order' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullOrder_on_Order' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_nr' } },
          { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delivery_method' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'district' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrderQuery, OrderQueryVariables>
export const DeliveryMethodsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'DeliveryMethods' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delivery_method' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeliveryMethodsQuery, DeliveryMethodsQueryVariables>
export const UpdateOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'order_set_input' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_order_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'fullOrder_on_Order' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullOrder_on_Order' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_nr' } },
          { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delivery_method' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'district' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateOrderMutation, UpdateOrderMutationVariables>
export const UpdateOrderProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateOrderProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_order_product_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'quantity' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateOrderProductMutation, UpdateOrderProductMutationVariables>
export const AddOrderProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddOrderProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'order_id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'product_id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_order_product_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'order_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'order_id' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'quantity' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'product_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'product_id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'orderProduct_on_OrderProduct' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'department' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddOrderProductMutation, AddOrderProductMutationVariables>
export const DeleteOrderProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteOrderProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_order_product_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteOrderProductMutation, DeleteOrderProductMutationVariables>
export const OrdersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Orders' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'order_bool_exp' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'created_at' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'listOrder_on_Order' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'listOrder_on_Order' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_nr' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'district' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'department' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>
export const AddOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'customer_id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'delivery_date' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_order_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'customer_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'customer_id' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'delivery_date' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'delivery_date' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'listOrder_on_Order' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'listOrder_on_Order' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'order' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'order_nr' } },
          { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'district' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'department' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddOrderMutation, AddOrderMutationVariables>
export const ProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Product' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'fullProduct_on_Product' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullProduct_on_Product' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>
export const UpdateProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'product_set_input' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_product_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'fullProduct_on_Product' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'fullProduct_on_Product' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>
export const ProdusctsByOrderDateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProdusctsByOrderDate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '100' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'order_product_bool_exp' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'order' },
                          value: {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'delivery_date' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'order' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'department' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProdusctsByOrderDateQuery, ProdusctsByOrderDateQueryVariables>
export const OrdersByDateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'OrdersByDate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '100' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'order_bool_exp' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'order' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'delivery_date' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'delivery_date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'order_products' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'product' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'department' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrdersByDateQuery, OrdersByDateQueryVariables>
export const AddProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'weight' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'numeric' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'department_id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_product_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'weight' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'weight' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'department_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'department_id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddProductMutation, AddProductMutationVariables>
export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Users' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'createdAt' },
                      value: { kind: 'EnumValue', value: 'asc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'user_on_Users' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'user_on_Users' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'users' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'defaultRole' } },
          { kind: 'Field', name: { kind: 'Name', value: 'disabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailVerified' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
export const UpdateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'users_set_input' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pk_columns' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_set' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'user_on_Users' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'user_on_Users' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'users' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'defaultRole' } },
          { kind: 'Field', name: { kind: 'Name', value: 'disabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'emailVerified' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>
