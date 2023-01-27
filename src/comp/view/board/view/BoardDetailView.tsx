import React, {useCallback, useEffect, useState} from 'react';
import {boardIdAtom, editableAtom, useBoard, useUser} from "~/comp";
import {useNavigate, useParams} from "react-router-dom";
import UserFlowApiStub from "~/comp/api/user/command/rest/UserFlowApiStub";
import MDEditor from "@uiw/react-md-editor";
import {Button} from "@mui/material";
import {useAtom} from "jotai";
import {useLogin} from "~/comp/view/user/view/login/Login.hook";

const BoardDetailView = () => {
  //
  const [, setEditable] = useAtom(editableAtom);
  const [, _setBoardId] = useAtom(boardIdAtom);
  const {userData, userRefetch} = useUser(sessionStorage.getItem("USER_ID") as any);
  const navigate = useNavigate();
  const {id} = useParams();
  const {board} = useBoard(id ? id : '');
  const {registerBookmark} = UserFlowApiStub;

  const [alreadyExistedBookmark, setAlreadyExistedBookmark] = useState(userData && userData.bookmarks.findIndex((bookmarkId) => bookmarkId === id) !== -1);

  useEffect(() => {
    userRefetch()
      .then((res) => {
        setAlreadyExistedBookmark(res.data.bookmarks.findIndex((bookmarkId) => bookmarkId === id) !== -1);
      });
  }, [])

  const handleClickBookmark = useCallback(async () => {
    if (userData) {
      await registerBookmark({
        userId: userData.userId,
        boardId: id as string,
      }).then(() => {
        userRefetch().then((res) => {
          setAlreadyExistedBookmark(res.data.bookmarks.findIndex((bookmarkId) => bookmarkId === id) !== -1);
        });
      });
    }
  }, [userData, alreadyExistedBookmark]);

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
      <Button onClick={handleClickBookmark}>{alreadyExistedBookmark ? "좋아요 취소" : "좋아요"}</Button>
      <Button onClick={handleClickModifyBtn}>수정</Button>
    </>
  );
}

export default BoardDetailView;
