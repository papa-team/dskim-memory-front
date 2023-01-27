import {Follow} from "~/comp";

export interface UserRdo{
  id: string;
  userId: string;
  userName: string;
  signUpTime: string;
  description: string;
  followers: Follow[];
  following: Follow[];
  bookmarks: string[];
}
