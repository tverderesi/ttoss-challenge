/**
 * @generated SignedSource<<de4b0cced5e344ad5dac3bfed78818e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EqualityType = "eq" | "gt" | "gte" | "lt" | "lte" | "ne" | "%future added value";
export type VideoEqualityType = {
  createdAt?: EqualityType | null | undefined;
  rating?: EqualityType | null | undefined;
  title?: EqualityType | null | undefined;
  updatedAt?: EqualityType | null | undefined;
};
export type VideoFilters = {
  createdAt?: string | null | undefined;
  rating?: string | null | undefined;
  title?: string | null | undefined;
  updatedAt?: string | null | undefined;
};
export type VideoSort = {
  field?: string | null | undefined;
  order?: string | null | undefined;
};
export type VideosRefetchQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  equalityType?: VideoEqualityType | null | undefined;
  filters?: VideoFilters | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
  sort?: VideoSort | null | undefined;
};
export type VideosRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Videos_videos">;
};
export type VideosRefetchQuery = {
  response: VideosRefetchQuery$data;
  variables: VideosRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "equalityType"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filters"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "last"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sort"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "equalityType",
    "variableName": "equalityType"
  },
  {
    "kind": "Variable",
    "name": "filters",
    "variableName": "filters"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  },
  {
    "kind": "Variable",
    "name": "sort",
    "variableName": "sort"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VideosRefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Videos_videos"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VideosRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VideoConnection",
        "kind": "LinkedField",
        "name": "videos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "VideoEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Video",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "src",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "rating",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "filters",
          "sort",
          "equalityType"
        ],
        "handle": "connection",
        "key": "Videos_videos",
        "kind": "LinkedHandle",
        "name": "videos"
      }
    ]
  },
  "params": {
    "cacheID": "1c3d58ea91d94ba91462c5f2ad444154",
    "id": null,
    "metadata": {},
    "name": "VideosRefetchQuery",
    "operationKind": "query",
    "text": "query VideosRefetchQuery(\n  $after: String\n  $before: String\n  $equalityType: VideoEqualityType\n  $filters: VideoFilters\n  $first: Int\n  $last: Int\n  $sort: VideoSort\n) {\n  ...Videos_videos\n}\n\nfragment Videos_videos on Query {\n  videos(filters: $filters, sort: $sort, equalityType: $equalityType, first: $first, last: $last, before: $before, after: $after) {\n    edges {\n      node {\n        id\n        title\n        src\n        rating\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3b17f7aa67adf3b47d5b0068cab087b6";

export default node;
