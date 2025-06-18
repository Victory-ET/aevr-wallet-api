const userTypeDefs = `#graphql
  type UserStake {
    _id: ID!
    id: Int!
    title: String!
    apr: String!
    sold: Int!
    minStake: String!
    image: String!
    gallery: [String!]!
    description: String!
    category: String!
    tags: [String!]!
    aprEarned: String
    amountStaked: String
    isActive: Boolean!
    createdAt: String!
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    picture: String
    email: String
    emailVerified: Boolean
    phone: String
    phoneVerified: Boolean
    hasConnectedPayAccount: Boolean
    businessId: String
    appId: String
    accountId: String
    transactionPin: String
    token: String
    roles: [Role]
    currentStakes: [UserStake]
    wallets(pagination: Pagination, filters: UserWalletFilter): UserWalletsData
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
    country: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UserStakeInput {
    _id: ID!
    id: Int!
    title: String!
    apr: String!
    sold: Int!
    minStake: String!
    image: String!
    gallery: [String!]!
    description: String!
    category: String!
    tags: [String!]!
    aprEarned: String!
    amountStaked: String!
    isActive: Boolean!
    createdAt: String!
  }

  input UpdateUserInput {
    picture: String
    firstName: String
    lastName: String
    email: String
    phone: String
    hasConnectedPayAccount: Boolean
    businessId: String
    appId: String
    accountId: String
    transactionPin: String
    token: String
    currentStakes: [UserStakeInput]
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
