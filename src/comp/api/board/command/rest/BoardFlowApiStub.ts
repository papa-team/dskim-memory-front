import {ModifyBoardCommand, RegisterBoardCommand} from "~/comp/api/board/command";
import {axiosInstance, BoardCdo, BoardUdo} from "~/comp";
import {AxiosResponse} from "axios";

const BASE_URL = '/board';

const registerBoard = (boardCdo: BoardCdo): Promise<AxiosResponse<any>> => {
  const command: RegisterBoardCommand  = {
    boardCdo
  }
  return axiosInstance().post(
    `${BASE_URL}/register/command`,
    command
  )
}

const modifyBoard = (boardUdo: BoardUdo): Promise<AxiosResponse<any>> => {
  const command: ModifyBoardCommand = {
    boardUdo
  }
  return axiosInstance().post(
    `${BASE_URL}/modify/command`,
    command
  )
}

export default {
  registerBoard,
  modifyBoard
}
