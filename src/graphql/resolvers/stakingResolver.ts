// graphql/stakingResolvers.js - GraphQL resolvers
import  Staking  from '../../models/stake.model.js';

export const stakingResolvers = {
  Query: {
    getStakingProperties: async (_: any, { input = {} }: { input: { page?: number; limit?: number; category?: string; search?: string; sortBy?: string; sortOrder?: string } }) => {
      try {
        const {
          page = 1,
          limit = 10,
          category,
          search,
          sortBy = 'createdAt',
          sortOrder = 'desc'
        } = input;

        // Build query conditions
        const query: { isActive: boolean; [key: string]: any } = { isActive: true };

        // Category filter
        if (category) {
          query.category = new RegExp(category, 'i');
        }

        // Search filter (searches in title, category, and tags)
        if (search) {
          query.$or = [
            { title: new RegExp(search, 'i') },
            { category: new RegExp(search, 'i') },
            { tags: { $in: [new RegExp(search, 'i')] } }
          ];
        }

        // Calculate pagination
        const skip = (page - 1) * limit;
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

        // Execute queries
        const [properties, totalCount] = await Promise.all([
          Staking.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit)
            .lean(),
          Staking.countDocuments(query)
        ]);

        // Calculate pagination info
        const totalPages = Math.ceil(totalCount / limit);
        const hasNextPage = page < totalPages;
        const hasPreviousPage = page > 1;

        return {
          properties,
          pagination: {
            currentPage: page,
            totalPages,
            totalCount,
            hasNextPage,
            hasPreviousPage,
            limit
          }
        };

      } catch (error) {
        throw new Error(`Error fetching staking properties: ${error.message}`);
      }
    },

    getStakingProperty: async (_, { id }) => {
      try {
        const property = await Staking.findOne({ 
          $or: [{ id: parseInt(id) }, { _id: id }],
          isActive: true 
        });
        
        if (!property) {
          throw new Error('Staking property not found');
        }
        
        return property;
      } catch (error) {
        throw new Error(`Error fetching staking property: ${error.message}`);
      }
    },

    getStakingCategories: async () => {
      try {
        const categories = await Staking.distinct('category', { isActive: true });
        return categories.map(category => ({ name: category }));
      } catch (error) {
        throw new Error(`Error fetching categories: ${error.message}`);
      }
    }
  }
};
