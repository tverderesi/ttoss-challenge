import { GraphQLObjectType } from "graphql";
import { userMutations } from "./userMutations";
import { videoMutations } from "./videoMutations";

export const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...userMutations,
    ...videoMutations,
  },
});
