

export const stakingTypeDefs = `#graphql
  type StakingProperty {
    _id: ID!
    id: Int!
    title: String!
    apr: String!
    sold: Int!
    minStake: String!
    image: String!
    gallery: [String!]!
    category: String!
    tags: [String!]!
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type PaginationInfo {
    currentPage: Int!
    totalPages: Int!
    totalCount: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    limit: Int!
  }

  type StakingPropertiesResponse {
    properties: [StakingProperty!]!
    pagination: PaginationInfo!
  }

  type Category {
    name: String!
  }

  input StakingPropertiesInput {
    page: Int
    limit: Int
    category: String
    search: String
    sortBy: String
    sortOrder: String
  }

  extend type Query {
    getStakingProperties(input: StakingPropertiesInput): StakingPropertiesResponse!
    getStakingProperty(id: String!): StakingProperty!
    getStakingCategories: [Category!]!
  }
`;
