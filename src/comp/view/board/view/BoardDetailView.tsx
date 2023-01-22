import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useBoard} from "~/comp";
import {useParams} from "react-router-dom";

const BoardDetailView = () => {
  //
  const {id} = useParams();
  const {board} = useBoard(id ? id : '');

  return (
    <>
      <div>조회수 : {board?.viewCount}</div>
      <div>{board?.title}</div>
      <div>{board?.content}</div>
      <div>{board?.registrationTime}</div>
    </>
  );
}

export default BoardDetailView;
