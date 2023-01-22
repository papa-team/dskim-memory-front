import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useBoard} from "~/comp";
import {useParams} from "react-router-dom";

const BoardDetailView = () => {
  //
  const {id} = useParams();
  console.log(id);
  const {board} = useBoard(id ? id : '');

  console.log("board >>>: ", board)

  return (
    <>
      <div>{board?.title}</div>
    </>
  );
}

export default BoardDetailView;
