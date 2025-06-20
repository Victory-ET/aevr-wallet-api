import ApiKeyResolvers from "./apiKey.resolvers.js";
import googleAuthResolvers from "./google.auth.resolvers.js";
import OTPResolvers from "./otp.resolvers.js";
import passwordResetResolvers from "./passwordReset.resolvers.js";
import ratesResolvers from "./rates.resolvers.js";
import roleResolvers from "./role.resolvers.js";
import { transferResolvers } from "./transfer.resolvers.js";
import userResolvers from "./user.resolvers.js";
import { userWalletResolvers } from "./userWallet.resolvers.js";
import { stakingResolvers } from "./stakingResolver.js";

export interface PaginationInput {
  page?: number;
  limit?: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const resolvers = {
  User: {
    ...userResolvers.User,
  },
  UserWallet: {
    ...userWalletResolvers.UserWallet,
  },
  SupportedWallet: {
    ...userWalletResolvers.SupportedWallet,
  },
  TransferHistoryItem: {
    ...transferResolvers.TransferHistoryItem,
  },
  Query: {
    ...userResolvers.Query,
    ...roleResolvers.Query,
    ...OTPResolvers.Query,
    ...ApiKeyResolvers.Query,
    ...userWalletResolvers.Query,
    ...transferResolvers.Query,
    ...ratesResolvers.Query,
    ...stakingResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...roleResolvers.Mutation,
    ...OTPResolvers.Mutation,
    ...ApiKeyResolvers.Mutation,
    ...googleAuthResolvers.Mutation,
    ...passwordResetResolvers.Mutation,
    ...userWalletResolvers.Mutation,
    ...transferResolvers.Mutation,
  },
};

export default resolvers;
