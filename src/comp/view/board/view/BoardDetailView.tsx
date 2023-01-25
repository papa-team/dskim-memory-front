import React, {useCallback} from 'react';
import {boardIdAtom, editableAtom, useBoard} from "~/comp";
import {useNavigate, useParams} from "react-router-dom";
import UserFlowApiStub from "~/comp/api/user/command/rest/UserFlowApiStub";
import MDEditor from "@uiw/react-md-editor";
import {Button} from "@mui/material";
import {useAtom} from "jotai";

const BoardDetailView = () => {
  //
  const [,setEditable] = useAtom(editableAtom);
  const [, _setBoardId] = useAtom(boardIdAtom);
  const navigate = useNavigate();
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

  const handleClickModifyBtn = useCallback(() => {
    setEditable(true);
    _setBoardId(id as string);
    navigate('/post-new');
  }, []);

  return (
    <>
      <div>조회수 : {board?.viewCount}</div>
      <div>{board?.title}</div>
      <MDEditor.Markdown source={board?.content} style={{whiteSpace: 'pre-wrap'}}/>
      <div>{board?.registrationTime}</div>
      <Button onClick={handleClickBookmark}>즐겨찾기</Button>
      <Button onClick={handleClickModifyBtn}>수정</Button>
    </>
  );
}

export default BoardDetailView;
