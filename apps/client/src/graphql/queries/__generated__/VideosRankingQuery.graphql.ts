/**
 * @generated SignedSource<<c8b626bfa9bec70839a65049a0d44fc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EqualityType = "eq" | "gt" | "gte" | "lt" | "lte" | "ne" | "%future added value";
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
export type VideoEqualityType = {
  createdAt?: EqualityType | null | undefined;
  rating?: EqualityType | null | undefined;
  title?: EqualityType | null | undefined;
  updatedAt?: EqualityType | null | undefined;
};
export type VideosRankingQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  equalityType?: VideoEqualityType | null | undefined;
  filters?: VideoFilters | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
  sort?: VideoSort | null | undefined;
};
export type VideosRankingQuery$data = {
  readonly videos: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly createdAt: string | null | undefined;
        readonly id: string;
        readonly rating: string | null | undefined;
        readonly src: string | null | undefined;
        readonly title: string | null | undefined;
        readonly updatedAt: string | null | undefined;
        readonly url: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
      readonly hasPreviousPage: boolean;
      readonly startCursor: string | null | undefined;
    };
  };
};
export type VideosRankingQuery = {
  response: VideosRankingQuery$data;
  variables: VideosRankingQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "equalityType"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "filters"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sort"
},
v7 = [
  {
    "alias": null,
    "args": [
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
    ],
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
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
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
                "name": "rating",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
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
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endCursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "VideosRankingQuery",
    "selections": (v7/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v6/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "VideosRankingQuery",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "d4260787bc295d223040a5efb21ba1dc",
    "id": null,
    "metadata": {},
    "name": "VideosRankingQuery",
    "operationKind": "query",
    "text": "query VideosRankingQuery(\n  $filters: VideoFilters\n  $sort: VideoSort\n  $equalityType: VideoEqualityType\n  $first: Int\n  $last: Int\n  $before: String\n  $after: String\n) {\n  videos(filters: $filters, sort: $sort, equalityType: $equalityType, first: $first, last: $last, before: $before, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        rating\n        url\n        src\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3f0c1b3e7c7d6db50e0a2abbad05ddd9";

export default node;
