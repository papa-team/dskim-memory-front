import {axiosInstance, BookmarkCdo, RegisterUserCommand, UserCdo} from "~/comp";
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

const registerUser = (userCdo: UserCdo): Promise<AxiosResponse<any>> => {
  const command: RegisterUserCommand = {
    userCdo
  }
  return axiosInstance().post(
    `${BASE_URL}/register/command`,
    command
  )
}

export default {
  registerBookmark,
  registerUser
}
