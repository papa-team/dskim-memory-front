import React from 'react';
import {
  Card,
  CardContent,
  Grid, Typography,
} from "@mui/material";
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
      <Grid gap={1} container>
      {boards?.map((board, index) => {
        return (
          <Grid item>
          <Card
            key={`boards_${index}`}
            onClick={() => handleClickBoardItem(board.id)}
            sx={{ maxWidth: 345 }}
          >
            <CardContent>
              <Typography>{board.title}</Typography>
              <Typography>{board.content}</Typography>
              <Typography>{board.registrationTime}</Typography>
              <Typography>{board.viewCount}</Typography>
            </CardContent>
          </Card>
          </Grid>
        )
      })}
      </Grid>
    </>
  );
}

export default BoardListView;
