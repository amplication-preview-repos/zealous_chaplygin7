import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
