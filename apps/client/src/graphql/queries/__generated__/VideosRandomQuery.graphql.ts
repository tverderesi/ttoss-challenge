/**
 * @generated SignedSource<<6ac793f198776b2e3ee0bd47dc580ce9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type VideosRandomQuery$variables = Record<PropertyKey, never>;
export type VideosRandomQuery$data = {
  readonly twoRandomVideos: {
    readonly videoA: {
      readonly id: string;
      readonly rating: string | null | undefined;
      readonly src: string | null | undefined;
      readonly title: string | null | undefined;
    } | null | undefined;
    readonly videoB: {
      readonly id: string;
      readonly rating: string | null | undefined;
      readonly src: string | null | undefined;
      readonly title: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type VideosRandomQuery = {
  response: VideosRandomQuery$data;
  variables: VideosRandomQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TwoRandomVideos",
    "kind": "LinkedField",
    "name": "twoRandomVideos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Video",
        "kind": "LinkedField",
        "name": "videoA",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Video",
        "kind": "LinkedField",
        "name": "videoB",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "VideosRandomQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "VideosRandomQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a2650132f4ab11bd94141ce8aab45435",
    "id": null,
    "metadata": {},
    "name": "VideosRandomQuery",
    "operationKind": "query",
    "text": "query VideosRandomQuery {\n  twoRandomVideos {\n    videoA {\n      id\n      title\n      rating\n      src\n    }\n    videoB {\n      id\n      title\n      rating\n      src\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "10968d6dcce78b7c9629b29e72efa31c";

export default node;
