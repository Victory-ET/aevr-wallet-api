import apiKeyTypeDefs from "./apiKey.js";
import googleAuthTypeDefs from "./google.auth.js";
import otpTypeDefs from "./otp.js";
import passwordResetTypeDefs from "./passwordReset.js";
import ratesTypeDefs from "./rates.js";
import roleTypeDefs from "./role.js";
import { transferTypeDefs } from "./transfer.js";
import userTypeDefs from "./user.js";
import userWalletTypeDefs from "./userWallet.js";
import { stakingTypeDefs } from "./stakingTypeDefs.js";

const globalTypeDefs = `#graphql
  scalar JSON

  input Pagination {
    page: Int
    limit: Int
  }

  type Meta {
    page: Int
    limit: Int
    pages: Int
    total: Int
    hasNextPage: Boolean
    hasPrevPage: Boolean
  }

  input SortInput {
    by: String
    direction: SortDirection
  }

  enum SortDirection {
    asc
    desc
  }

`;

const typeDefs = `
  ${globalTypeDefs}
  ${userTypeDefs}
  ${roleTypeDefs}
  ${otpTypeDefs}
  ${apiKeyTypeDefs}
  ${googleAuthTypeDefs}
  ${passwordResetTypeDefs}
  ${userWalletTypeDefs}
  ${transferTypeDefs}
  ${ratesTypeDefs}
  ${stakingTypeDefs}
`;

export default typeDefs;
