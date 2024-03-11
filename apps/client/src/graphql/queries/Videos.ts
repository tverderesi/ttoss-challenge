import { graphql } from "react-relay";
export const twoRandomVideosQuery = graphql`
  query VideosRandomQuery {
    twoRandomVideos {
      videoA {
        id
        title
        rating
        src
      }
      videoB {
        id
        title
        rating
        src
      }
    }
  }
`;

export const videosQuery = graphql`
  query VideosRankingQuery(
    $filters: VideoFilters
    $sort: VideoSort
    $equalityType: VideoEqualityType
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    videos(
      filters: $filters
      sort: $sort
      equalityType: $equalityType
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      edges {
        cursor
        node {
          id
          title
          rating
          url
          src
          createdAt
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const videoCountQuery = graphql`
  query VideosCountQuery {
    videoCount
  }
`;
