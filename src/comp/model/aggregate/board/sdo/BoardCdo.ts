import {User} from "~/comp/model/aggregate/board/vo";

export interface BoardCdo {
  user: User;
  title: string;
  content: string;
}
