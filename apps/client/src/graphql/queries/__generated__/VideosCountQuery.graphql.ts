/**
 * @generated SignedSource<<0b1c2414d1a34bbcdf4df668d71722f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type VideosCountQuery$variables = Record<PropertyKey, never>;
export type VideosCountQuery$data = {
  readonly videoCount: number | null | undefined;
};
export type VideosCountQuery = {
  response: VideosCountQuery$data;
  variables: VideosCountQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "videoCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "VideosCountQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "VideosCountQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "864ddd589bcae2be26ef7c1a2c016134",
    "id": null,
    "metadata": {},
    "name": "VideosCountQuery",
    "operationKind": "query",
    "text": "query VideosCountQuery {\n  videoCount\n}\n"
  }
};
})();

(node as any).hash = "878a5def7b8f933e91b5e7de2b6c384d";

export default node;
