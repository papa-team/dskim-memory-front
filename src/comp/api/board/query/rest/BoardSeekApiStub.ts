import axiosInstance from "~/comp/api/ApiInstance";
import {FindBoardsQuery} from "~/comp/api/board/query/query";
import {AxiosResponse} from "axios";
import {Board} from "~/comp";

const BASE_URL = '/board';

const findBoards = (): Promise<AxiosResponse<Board[]>> => {
  const query: FindBoardsQuery = {
    //
  };
  return axiosInstance().post(
    `${BASE_URL}/find-all/query`,
    query
  )
}

export default {
  findBoards: {
    genQueryKey: () => ['BoardSeek', 'findBoards'],
    queryFn: findBoards
  }
}
