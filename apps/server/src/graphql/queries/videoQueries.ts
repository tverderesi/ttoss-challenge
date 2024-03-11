import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLObjectType,
} from "graphql";
import { videoConnection, videoType } from "@/graphql/schema/videoType";
import { VideoModel } from "@/model/video";
import { connectionFromArray, fromGlobalId, toGlobalId } from "graphql-relay";
import { createQueryFilters } from "@/util/createQueryFilters";
import { Video } from "@/model/video";
import { QueryFilterType } from "@/util/createQueryFilters";

export const graphQLEqualityInputType = {
  type: new GraphQLEnumType({
    name: "EqualityType",
    values: {
      gte: { value: "gte" },
      lte: { value: "lte" },
      gt: { value: "gt" },
      lt: { value: "lt" },
      eq: { value: "eq" },
      ne: { value: "ne" },
    },
  }),
};

export const videoQueries = {
  video: {
    type: videoType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (_, args: { id: string }) => {
      const { id } = fromGlobalId(args.id);
      return await VideoModel.findById(id);
    },
  },
  videos: {
    type: new GraphQLNonNull(videoConnection.connectionType),
    args: {
      filters: {
        type: new GraphQLInputObjectType({
          name: "VideoFilters",
          fields: {
            title: { type: GraphQLString },
            rating: { type: GraphQLString },
            createdAt: { type: GraphQLString },
            updatedAt: { type: GraphQLString },
          },
        }),
      },
      sort: {
        type: new GraphQLInputObjectType({
          name: "VideoSort",
          fields: {
            field: { type: GraphQLString },
            order: { type: GraphQLString },
          },
        }),
      },
      equalityType: {
        type: new GraphQLInputObjectType({
          name: "VideoEqualityType",
          fields: {
            title: graphQLEqualityInputType,
            rating: graphQLEqualityInputType,
            createdAt: graphQLEqualityInputType,
            updatedAt: graphQLEqualityInputType,
          },
        }),
      },
      first: { type: GraphQLInt },
      last: { type: GraphQLInt },
      before: { type: GraphQLString },
      after: { type: GraphQLString },
    },
    resolve: async (_, { filters, sort, equalityType, ...pagination }: QueryFilterType<Video>) => {
      let queryFilters = {};
      const querySort = {};
      const defaultPagination = pagination ?? { first: 10, last: null, before: "", after: "" };
      const fieldTypes = {
        title: "regex",
        rating: "number",
        createdAt: "date",
        updatedAt: "date",
      };

      if (filters) {
        queryFilters = createQueryFilters(fieldTypes, filters, equalityType);
      }

      if (sort && sort.field) {
        querySort[sort.field] = sort.order === "asc" ? 1 : -1;
      }

      const videos = await VideoModel.find(queryFilters).sort(querySort);

      const connection = connectionFromArray(videos, defaultPagination);
      return connection;
    },
  },
  twoRandomVideos: {
    type: new GraphQLObjectType({
      name: "TwoRandomVideos",
      fields: {
        videoA: { type: videoType },
        videoB: { type: videoType },
      },
    }),
    resolve: async () => {
      const videos = await VideoModel.aggregate([{ $sample: { size: 2 } }]);
      const [videoA, videoB] = videos;
      return { videoA, videoB };
    },
  },
  videoCount: {
    type: GraphQLInt,
    resolve: async () => {
      return await VideoModel.countDocuments();
    },
  },
};
