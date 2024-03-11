import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from "graphql";
import { VideoModel } from "@/model/video";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { nodeInterface } from "./nodeType";
export const videoType = new GraphQLObjectType<VideoModel, any>({
  name: "Video",
  description: "A video that can be watched and rated by users.",
  interfaces: () => [nodeInterface],
  fields: () => ({
    id: globalIdField("Video", (video) => video._id),
    title: {
      type: GraphQLString,
      description: "The title of the video.",
      resolve: (video) => video.title,
    },
    rating: {
      type: GraphQLString,
      description: "The rating of the video.",
      resolve: (video) => video.rating,
    },
    url: {
      type: GraphQLString,
      description: "The URL of the video.",
      resolve: (video) => video.url,
    },
    src: {
      type: GraphQLString,
      description: "The source of the video.",
      resolve: (video) => video.src,
    },
    createdAt: {
      type: GraphQLString,
      description: "The date when the video was created.",
    },
    updatedAt: {
      type: GraphQLString,
      description: "The date when the video was last updated.",
    },
  }),
});

export const videoConnection = connectionDefinitions({
  nodeType: videoType,
  name: "Video",
});
