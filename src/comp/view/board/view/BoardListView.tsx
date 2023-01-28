import React from 'react';
import {
  Box,
  Card,
  CardContent,
  styled, Typography,
} from "@mui/material";
import {useBoards} from "~/comp";
import {useNavigate} from "react-router-dom";
import {fonts} from "~/ThemeConfig";

const BoardListView = () => {
  //
  const navigate = useNavigate();
  const {boards} = useBoards();

  const handleClickBoardItem = (boardId: string) => {
    navigate(`/board/${boardId}`)
  }

  return (
    <>
      {/*<div>게시글 총 개수 : {boards ? boards.length : "0"}</div>*/}
      <StyledCardWrapper>
      {boards?.map((board, index) => {
        return (
            <StyledCard
              key={`board-${index}`}
              onClick={() => handleClickBoardItem(board.id)}
            >
              <StyledCardContent>
                <div style={{backgroundColor: '#ddd', height: '150px', display: 'flex', alignItems:'center', justifyContent: 'center'}}>IMAGE</div>
                <StyledContentWrapper>
                  <Typography className={"nx card-title"}>{board.title}</Typography>
                  <Typography className={"nx card-content"}>{board.content}</Typography>
                </StyledContentWrapper>
                <Typography>{board.registrationTime}</Typography>
                <Typography>{board.viewCount}</Typography>
              </StyledCardContent>
            </StyledCard>
        )
      })}
      </StyledCardWrapper>
    </>
  );
}

const StyledCardWrapper = styled(Box)<any>((): any => ({
  display: 'flex',
  alignItems:'center',
  gap: '8px',
  flexWrap: "wrap",
}));

const StyledCard = styled(Card)<any>(({theme}): any => ({
  boxShadow: 'none',
  minWidth: 'calc(25% - 32px)',
  maxWidth: 'calc(25% - 32px)',
  height: '300px',
  backgroundColor: theme.palette.card.main,
}));

const StyledCardContent = styled(CardContent)<any>((): any => ({
  padding: 0,
}));

const StyledContentWrapper = styled(Box)<any>(({theme}): any => ({
  padding: '1rem',
  '.MuiTypography-root': {
    '&.card-title' : {
      fontSize: fonts.fontSize.font18,
      fontWeight: theme.typography.fontWeightBold
    },
    '&.card-content' : {
      wordBreak: 'break-all',
      whiteSpace: 'pre-wrap',
    }
  }
}));
export default BoardListView;
