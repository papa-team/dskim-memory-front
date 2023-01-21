import {RegisterBoardCommand} from "~/comp/api/board/command";
import {axiosInstance, BoardCdo} from "~/comp";
import {AxiosResponse} from "axios";

const BASE_URL = '/board';

const registerBoard = (boardCdo: BoardCdo): Promise<AxiosResponse<any>> => {
  const command: RegisterBoardCommand  = {
    boardCdo
  }
  return axiosInstance().post(
    `${BASE_URL}/register/command`,
    command.boardCdo
  )
}

export default {
  registerBoard
}
