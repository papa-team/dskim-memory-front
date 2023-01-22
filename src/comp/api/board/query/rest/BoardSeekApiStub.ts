import axiosInstance from "~/comp/api/ApiInstance";
import {FindBoardQuery, FindBoardsQuery} from "~/comp/api/board/query/query";
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

const findBoard = (boardId: string): Promise<AxiosResponse<Board>> => {
  const query: FindBoardQuery = {
    boardId
  };
  return axiosInstance().post(
    `${BASE_URL}/find/query`,
    query
  )
}

export default {
  findBoards: {
    genQueryKey: () => ['BoardSeek', 'findBoards'],
    queryFn: findBoards
  },
  findBoard: {
    genQueryKey: (boardId: string) => ['BoardSeek', 'findBoard', boardId],
    queryFn: findBoard
  }
}
