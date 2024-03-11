import { UserModel } from "@/model/user";
import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { nodeInterface } from "./nodeType";
export const userType = new GraphQLObjectType<UserModel, any>({
  name: "User",
  description:
    "A user of the appplication. It can be an admin, which can manage the videos, or a regular user, which can only watch the videos.",
  interfaces: () => [nodeInterface],
  fields: () => ({
    id: globalIdField("User"),
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email of the user.",
      resolve: (user) => user.username,
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The role of the user.",
      resolve: (user) => user.role,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The password of the user.",
      resolve: (user) => user.password,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The date when the user was created.",
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The date when the user was last updated.",
    },
  }),
});

export const userConnection = connectionDefinitions({
  name: "User",
  nodeType: userType,
});
