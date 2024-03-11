/**
 * @generated SignedSource<<67d30e66b2c895ffbca478d6dc7b14e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RateVideosInput = {
  clientMutationId?: string | null | undefined;
  videoAGlobalId: string;
  videoBGlobalId: string;
  winner: string;
};
export type VideosRateMutation$variables = {
  input: RateVideosInput;
};
export type VideosRateMutation$data = {
  readonly rateVideosMutation: {
    readonly clientMutationId: string | null | undefined;
    readonly videoA: {
      readonly rating: string | null | undefined;
    } | null | undefined;
    readonly videoB: {
      readonly rating: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type VideosRateMutation = {
  response: VideosRateMutation$data;
  variables: VideosRateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rating",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VideosRateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RateVideosPayload",
        "kind": "LinkedField",
        "name": "rateVideosMutation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Video",
            "kind": "LinkedField",
            "name": "videoA",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Video",
            "kind": "LinkedField",
            "name": "videoB",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VideosRateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RateVideosPayload",
        "kind": "LinkedField",
        "name": "rateVideosMutation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Video",
            "kind": "LinkedField",
            "name": "videoA",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Video",
            "kind": "LinkedField",
            "name": "videoB",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "43cb7db2321dcad6eb952f7c81ac52b1",
    "id": null,
    "metadata": {},
    "name": "VideosRateMutation",
    "operationKind": "mutation",
    "text": "mutation VideosRateMutation(\n  $input: RateVideosInput!\n) {\n  rateVideosMutation(input: $input) {\n    clientMutationId\n    videoA {\n      rating\n      id\n    }\n    videoB {\n      rating\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f4105dfe550968c07440472d518e5c5a";

export default node;
