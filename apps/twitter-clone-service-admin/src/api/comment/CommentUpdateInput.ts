import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  text?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
