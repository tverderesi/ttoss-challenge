import { userConnection, userType } from "@/graphql/schema/userType";
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInputObjectType, GraphQLString, GraphQLInt } from "graphql";
import { User, UserModel } from "@/model/user";
import { fromGlobalId, connectionFromArray } from "graphql-relay";
import { QueryFilterType, createQueryFilters } from "../../util/createQueryFilters";
import { graphQLEqualityInputType } from "./videoQueries";

export const userQueries = {
  user: {
    type: userType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (_: any, args: { id: string }) => {
      const { id } = fromGlobalId(args.id);
      return await UserModel.findById(id);
    },
  },
  users: {
    type: new GraphQLNonNull(userConnection.connectionType),
    args: {
      filters: {
        type: new GraphQLInputObjectType({
          name: "UserFilters",
          fields: {
            username: { type: GraphQLString },
            role: { type: GraphQLString },
            createdAt: { type: GraphQLString },
            updatedAt: { type: GraphQLString },
          },
        }),
      },
      sort: {
        type: new GraphQLInputObjectType({
          name: "UserSort",
          fields: {
            field: { type: GraphQLString },
            order: { type: GraphQLString },
          },
        }),
      },
      equalityType: {
        type: new GraphQLInputObjectType({
          name: "UserEqualityType",
          fields: {
            field: { type: GraphQLString },
            order: graphQLEqualityInputType,
          },
        }),
      },
      pagination: {
        type: new GraphQLInputObjectType({
          name: "UserPagination",
          fields: {
            first: { type: GraphQLInt },
            last: { type: GraphQLInt },
            before: { type: GraphQLString },
            after: { type: GraphQLString },
          },
        }),
      },
    },
    resolve: async (_: any, { filters, sort, pagination, equalityType }: QueryFilterType<User>) => {
      let queryFilters = {};
      const querySort = {} as any;
      const defaultPagination = pagination ?? { first: 10, last: null, before: "", after: "" };
      const fieldTypes = {
        username: "regex",
        role: "regex",
        createdAt: "date",
        updatedAt: "date",
      };
      if (filters) {
        queryFilters = createQueryFilters(fieldTypes, filters, equalityType);
      }
      if (sort && sort.field) {
        querySort[sort.field] = sort.order === "asc" ? 1 : -1;
      }
      const users = await UserModel.find(queryFilters).sort(querySort);
      const connection: any = connectionFromArray(users, defaultPagination);
      return connection;
    },
  },
};
