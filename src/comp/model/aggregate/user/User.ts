import {Follow} from "~/comp";

export interface User {
  //
  //  userMetadata: UserMetadata;
   userId: string;
   userName: string;
   password: string;
   signUpTime: string;
   followers: Follow[];
   following: Follow[];
   bookmarks: string[];
}
