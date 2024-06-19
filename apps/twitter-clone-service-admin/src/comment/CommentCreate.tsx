import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TweetTitle } from "../tweet/TweetTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="text" multiline source="text" />
        <ReferenceInput source="tweet.id" reference="Tweet" label="tweet">
          <SelectInput optionText={TweetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
