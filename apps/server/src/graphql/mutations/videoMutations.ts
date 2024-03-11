import { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLEnumType, GraphQLObjectType } from "graphql";
import { videoType } from "@/graphql/schema/videoType";
import { fromGlobalId, mutationWithClientMutationId } from "graphql-relay";
import { VideoModel } from "@/model/video";
import { updateEloRating } from "@/util/updateEloRating";
const createVideoMutation = mutationWithClientMutationId({
  name: "CreateVideo",
  description: "A mutation to create a new video.",
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The title of the video.",
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The URL of the video.",
    },
    src: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The source of the video.",
    },
    rating: {
      type: GraphQLString,
      description: "The rating of the video.",
    },
  },
  outputFields: {
    video: {
      type: videoType,
      resolve: (video) => video,
    },
  },
  mutateAndGetPayload: async (input) => {
    const { title, url, src, rating } = input;
    if (!title || !url || !src) {
      throw new Error("The title, url and src are required.");
    }
    const doesExist = await VideoModel.exists({ url });
    if (doesExist) {
      throw new Error("The video already exists.");
    }
    const video = new VideoModel({ title, url, src, rating });
    return await video.save();
  },
});

const rateVideosMutation = mutationWithClientMutationId({
  name: "RateVideos",
  description: "A mutation to rate a video.",
  inputFields: {
    videoAGlobalId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the first video.",
    },
    videoBGlobalId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the second video.",
    },
    winner: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The winner of the comparison.",
    },
  },
  outputFields: {
    videoA: {
      type: videoType,
    },
    videoB: {
      type: videoType,
    },
  },
  mutateAndGetPayload: async (input) => {
    const { videoAGlobalId, videoBGlobalId, winner } = input;
    const { id: videoAId } = fromGlobalId(videoAGlobalId);
    const { id: videoBId } = fromGlobalId(videoBGlobalId);
    const outcome = winner === "DRAW" ? "DRAW" : winner === videoAId ? "WIN" : "LOSE";
    const videoA = await VideoModel.findById(videoAId);
    const videoB = await VideoModel.findById(videoBId);
    if (!videoA || !videoB) {
      throw new Error("The videos do not exist.");
    }

    if (videoAId === videoBId) {
      throw new Error("The videos cannot be the same.");
    }

    if (videoA.rating === undefined || videoB.rating === undefined) {
      throw new Error("The videos must have a rating.");
    }
    const { newRatingA, newRatingB } = updateEloRating(videoA.rating, videoB.rating, outcome);
    try {
      const [updatedVideoA, updatedVideoB] = await Promise.all([
        VideoModel.findOneAndUpdate({ _id: videoA._id }, { rating: newRatingA }, { new: true }),
        VideoModel.findOneAndUpdate({ _id: videoB._id }, { rating: newRatingB }, { new: true }),
      ]);

      if (!updatedVideoA || !updatedVideoB) {
        throw new Error("Error updating the videos.");
      }

      const updatedVideos = { videoA: updatedVideoA, videoB: updatedVideoB };

      return updatedVideos;
    } catch (error) {
      console.error(error);
      throw new Error("Error updating the videos.");
    }
  },
});

const deleteVideoMutation = mutationWithClientMutationId({
  name: "DeleteVideo",
  description: "A mutation to delete a video.",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the video.",
    },
  },
  outputFields: {
    success: {
      type: GraphQLBoolean,
    },
  },
  mutateAndGetPayload: async (input) => {
    const { id } = input;
    const video = await VideoModel.findById(id);
    if (!video) {
      throw new Error("The video does not exist.");
    }
    try {
      await VideoModel.findByIdAndDelete(id);
    } catch (e) {
      return { success: false };
    }

    return { success: true };
  },
});

export const videoMutations = {
  createVideoMutation,
  rateVideosMutation,
  deleteVideoMutation,
};
