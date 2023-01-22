import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useBoards} from "~/comp";
import {useNavigate} from "react-router-dom";

const BoardListView = () => {
  //
  const navigate = useNavigate();
  const {boards} = useBoards();

  const handleClickBoardItem = (boardId: string) => {
    navigate(`/board/${boardId}`)
  }

  return (
    <>
      <div>Main Board List Page</div>
      <div>게시글 총 개수 : {boards ? boards.length : "0"}</div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell>내용</TableCell>
            <TableCell>날짜</TableCell>
            <TableCell>조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {boards?.map((board, index) => {
            return (
              <TableRow key={`boards_${index}`} onClick={() => handleClickBoardItem(board.id)}>
                <TableCell>{board.title}</TableCell>
                <TableCell>{board.content}</TableCell>
                <TableCell>{board.registrationTime}</TableCell>
                <TableCell>{board.viewCount}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default BoardListView;
