import { UserModel } from "@/model/user";
import { VideoModel } from "@/model/video";
import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { userType } from "./userType";
import { videoType } from "./videoType";

export const { nodeInterface, nodesField, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "User") {
      return await UserModel.findById(id);
    }
    if (type === "Video") {
      return await VideoModel.findById(id);
    }
    return null;
  },
  (obj) => {
    if (obj instanceof UserModel) {
      return userType.name;
    }
    if (obj instanceof VideoModel) {
      return videoType.name;
    }
    return undefined;
  }
);
