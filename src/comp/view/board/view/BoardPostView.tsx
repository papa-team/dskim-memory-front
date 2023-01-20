import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useBoards} from "~/comp";

const BoardListView = () => {
  //
  const {boards} = useBoards();

  return (
    <>
      <div>새 글 작성</div>
      <input placeholder={"제목"}/>
      <textarea placeholder={"내용을 입력하세요"}/>

      {/*<button onClick={}>등록</button>*/}
    </>
  );
}

export default BoardListView;
