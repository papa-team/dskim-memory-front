import React, {useState} from 'react';
import BoardFlowApiStub from "~/comp/api/board/command/rest/BoardFlowApiStub";
import {BoardCdo} from "~/comp";

const BoardListView = () => {
  //
  const {registerBoard} = BoardFlowApiStub;
  const [boardCdo, setBoardCdo] = useState<BoardCdo>(null);
  const handleClickRegister = async () => {
    if (boardCdo === null) {
      alert("wow~")
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

  return (
    <>
      <div>새 글 작성</div>
      <input placeholder={"제목"} onChange={handleChangeInput} name={"title"}/>
      <textarea placeholder={"내용을 입력하세요"} onChange={handleChangeInput} name={"content"}/>

      <button onClick={handleClickRegister}>등록</button>
    </>
  );
}

export default BoardListView;
