import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useBoards} from "~/comp";

const BoardListView = () => {
  //
  const {boards} = useBoards();

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
          </TableRow>
        </TableHead>
        <TableBody>
          {boards?.map((board, index) => {
            return (
              <TableRow key={`boards_${index}`}>
                <TableCell>{board.title}</TableCell>
                <TableCell>{board.content}</TableCell>
                <TableCell>{board.registrationTime}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default BoardListView;
