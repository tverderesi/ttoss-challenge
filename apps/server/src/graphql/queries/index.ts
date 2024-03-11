import { userQueries } from "@/graphql/queries/userQueries";
import { videoQueries } from "@/graphql/queries/videoQueries";
import { GraphQLObjectType } from "graphql";
import { nodeField, nodesField } from "../schema/nodeType";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userQueries,
    ...videoQueries,
    node: nodeField,
    nodes: nodesField,
  },
});
