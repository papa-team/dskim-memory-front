import {axiosInstance, BookmarkCdo} from "~/comp";
import {AxiosResponse} from "axios";
import {RegisterBookmarkCommand} from "~/comp/api/user";

const BASE_URL = '/user';

const registerBookmark = (bookmarkCdo: BookmarkCdo): Promise<AxiosResponse<any>> => {
  const command: RegisterBookmarkCommand  = {
    bookmarkCdo
  }
  return axiosInstance().post(
    `${BASE_URL}/register/bookmark/command`,
    command
  )
}

export default {
  registerBookmark
}
