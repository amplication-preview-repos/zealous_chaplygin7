import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  text?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
