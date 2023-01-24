import {Follow, UserMetadata} from "~/comp";

export interface User {
  //
   userMetadata: UserMetadata;
   followers: Follow[];
   following: Follow[];
   signUpTime: string;
   bookmarks: string[];
}
