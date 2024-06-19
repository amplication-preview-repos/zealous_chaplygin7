import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  tweet?: TweetWhereUniqueInput;
};
