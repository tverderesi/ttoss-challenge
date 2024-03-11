/**
 * @generated SignedSource<<9f63c3217cc77e9a9fcbc9a70bef17c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateVideoInput = {
  clientMutationId?: string | null | undefined;
  rating?: string | null | undefined;
  src: string;
  title: string;
  url: string;
};
export type VideosCreateMutation$variables = {
  input: CreateVideoInput;
};
export type VideosCreateMutation$data = {
  readonly createVideoMutation: {
    readonly clientMutationId: string | null | undefined;
    readonly video: {
      readonly id: string;
      readonly rating: string | null | undefined;
      readonly src: string | null | undefined;
      readonly title: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type VideosCreateMutation = {
  response: VideosCreateMutation$data;
  variables: VideosCreateMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateVideoPayload",
    "kind": "LinkedField",
    "name": "createVideoMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Video",
        "kind": "LinkedField",
        "name": "video",
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
            "name": "src",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VideosCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VideosCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "66c8c6c787830de5dbcf72fe67ee4892",
    "id": null,
    "metadata": {},
    "name": "VideosCreateMutation",
    "operationKind": "mutation",
    "text": "mutation VideosCreateMutation(\n  $input: CreateVideoInput!\n) {\n  createVideoMutation(input: $input) {\n    clientMutationId\n    video {\n      id\n      title\n      rating\n      src\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a0ad0fba936842c403ef94a34aec9220";

export default node;
