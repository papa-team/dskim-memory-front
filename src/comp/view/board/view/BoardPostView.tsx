import React, {useCallback, useState} from 'react';
import BoardFlowApiStub from "~/comp/api/board/command/rest/BoardFlowApiStub";
import {BoardCdo, boardIdAtom, BoardUdo, editableAtom, useBoard} from "~/comp";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';
import {Button, TextField} from "@mui/material";
import { useAtom } from 'jotai'

const BoardPostView = () => {
  //
  const navigate = useNavigate();
  const {registerBoard, modifyBoard} = BoardFlowApiStub;
  const [_boardId] = useAtom(boardIdAtom);
  const {board} = useBoard(_boardId);
  const [editable] = useAtom(editableAtom);
  const [boardCdo, setBoardCdo] = useState<BoardCdo>({
    userId: sessionStorage.getItem("userId")!,
    title: editable ? board!.title : "",
    content: editable ? board!.content : ""
  });
  // const [boardUdo, setBoardUdo] = useState<BoardUdo>({
  //   boardId: '',
  //   userId: '',
  //   title: '',
  //   content: '',
  // })

  const handleClickRegister = async () => {
    if (boardCdo === null) {
      toast("비어있는 칸이 있어요", {type: "warning"})
      return;
    }
    await registerBoard(boardCdo);
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.currentTarget.name;
    console.log(name);
    setBoardCdo(
      {
        ...boardCdo,
        [name] : e.currentTarget.value
      }
    )
  }

  const handleClickModify = useCallback(async () => {
    await modifyBoard({
      boardId: _boardId,
      userId: boardCdo.userId,
      title: boardCdo.title,
      content: boardCdo.content
    })
  }, [boardCdo]);


  return (
    <>
      <div>{editable ? "글 수정" : "새 글 작성"}</div>
      <TextField
        placeholder={"제목"}
        onChange={handleChangeInput}
        name={"title"}
        defaultValue={boardCdo.title}
      />
      <MDEditor
        value={boardCdo.content}
        onChange={(e) => setBoardCdo({...boardCdo, content: e as string})}
      />
      <MDEditor.Markdown
        source={boardCdo.content}
        style={{ whiteSpace: 'pre-wrap' }}
      />
      {editable
        ? <Button variant={"contained"} onClick={handleClickModify}>수정사항저장</Button>
        : <Button variant={"contained"} onClick={handleClickRegister}>등록</Button>
      }
      <Button variant={"outlined"} onClick={() => navigate("/")}>목록으로 돌아가기</Button>
    </>
  );
}

export default BoardPostView;
