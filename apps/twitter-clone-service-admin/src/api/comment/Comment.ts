import { Tweet } from "../tweet/Tweet";

export type Comment = {
  author: string | null;
  createdAt: Date;
  id: string;
  text: string | null;
  tweet?: Tweet | null;
  updatedAt: Date;
};
