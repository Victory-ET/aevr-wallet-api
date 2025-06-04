const userTypeDefs = `#graphql
  type User {
    id: ID
    firstName: String
    lastName: String
    picture: String
    email: String
    emailVerified: Boolean
    phone: String
    phoneVerified: Boolean
    roles: [Role]
    country: String
    currency: String
    wallets(pagination: Pagination, filters: UserWalletFilter): UserWalletsData
    createdAt: String
    updatedAt: String
  }

  type UserData {
    data: [User]
    meta: Meta
  }

  type AuthData {
    accessToken: String
    refreshToken: String
    user: User
  }

  type RegisterData {
    user: User
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    picture: String
    firstName: String
    lastName: String
    email: String
    phone: String
    country: String
    currency: String
  }

  type RefreshPayload {
    accessToken: String!
  }

  input UserFiltersInput {
    search: String
    role: ID
    emailVerified: Boolean
  }



  type Query {
    users(pagination: Pagination, filters: UserFiltersInput, sort: SortInput): UserData
    user(id: ID!): User
    me: User
  }

  type Mutation {
    register(input: RegisterInput!): RegisterData
    login(input: LoginInput!): AuthData
    refreshToken(token: String!): RefreshPayload!
    updateUser(id: ID, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }
`;

export default userTypeDefs;
