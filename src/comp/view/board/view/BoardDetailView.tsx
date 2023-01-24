import React from 'react';
import {useBoard} from "~/comp";
import {useParams} from "react-router-dom";
import UserFlowApiStub from "~/comp/api/user/command/rest/UserFlowApiStub";

const BoardDetailView = () => {
  //
  const {id} = useParams();
  const {board} = useBoard(id ? id : '');
  const {registerBookmark} = UserFlowApiStub;

  const handleClickBookmark = async () => {
    await registerBookmark({
      userId: "",
      userName: "",
      boardId: "",
    });
  }

  return (
    <>
      <div>조회수 : {board?.viewCount}</div>
      <div>{board?.title}</div>
      <div>{board?.content}</div>
      <div>{board?.registrationTime}</div>
      <button onClick={handleClickBookmark}>즐겨찾기</button>
    </>
  );
}

export default BoardDetailView;
