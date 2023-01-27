import {axiosInstance, Board, FindBookmarksQuery, FindLoginUserQuery, FindUserQuery} from "~/comp";
import {AxiosResponse} from "axios";

const BASE_URL = '/user';

const loginUser = (userId: string, password: string): Promise<AxiosResponse<any>> => {
  const query: FindLoginUserQuery = {
    userId,
    password
  }
  return (
    axiosInstance().post(
      `${BASE_URL}/find/login/query`,
      query
    )
  )
}

const findBookmarks = (userId: string): Promise<AxiosResponse<Board[]>> => {
  const query: FindBookmarksQuery = {
    userId
  }
  return (
    axiosInstance().post(
      `${BASE_URL}/find/bookmarks/query`,
      query
    )
  );
}

const findUser = (id: string): Promise<AxiosResponse<any>> => {
  const query: FindUserQuery = {
    id
  }
  return (
    axiosInstance().post(
      `${BASE_URL}/find/user/query`,
      query
    )
  )
}

export default {
  loginUser: {
    genQueryKey: (userId: string, password: string) => ['UserSeek', 'loginUser'],
    queryFn: loginUser,
  },
  // loginUser,
  findBookmarks: {
    genQueryKey: (userId: string) => ['UserSeek', 'findBookmarks', userId],
    queryFn: findBookmarks
  },
  findUser: {
    genQueryKey: (id: string) => ['UserSeek', 'findUser'],
    queryFn: findUser,
  }
}
