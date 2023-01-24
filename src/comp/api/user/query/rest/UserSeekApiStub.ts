import {axiosInstance, FindUserQuery} from "~/comp";

const loginUser = () => {
  const query: FindUserQuery = {
    //
  }
  return (
    axiosInstance().post(
      "",
      query
    )
  )
}

export default {
  loginUser,

}
