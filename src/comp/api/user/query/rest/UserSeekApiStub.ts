import {axiosInstance, FindUserQuery} from "~/comp";

const BASE_URL = '/user';

const loginUser = (userId: string, password: string) => {
  const query: FindUserQuery = {
    userId,
    password
  }
  return (
    axiosInstance().post(
      `${BASE_URL}/find/query`,
      query
    )
  )
}

export default {
  loginUser,

}
