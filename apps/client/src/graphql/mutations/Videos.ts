import { graphql } from "react-relay";

export const rateVideosMutation = graphql`
  mutation VideosRateMutation($input: RateVideosInput!) {
    rateVideosMutation(input: $input) {
      clientMutationId
      videoA {
        rating
      }
      videoB {
        rating
      }
    }
  }
`;

export const createVideoMutation = graphql`
  mutation VideosCreateMutation($input: CreateVideoInput!) {
    createVideoMutation(input: $input) {
      clientMutationId
      video {
        id
        title
        rating
        src
      }
    }
  }
`;
