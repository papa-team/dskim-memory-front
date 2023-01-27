import React from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {useBookmarks} from "~/comp/view/user/view/profile/BookmarkList.hook";
import {useAtom} from "jotai";
import {userAtom} from "~/comp";
import {useNavigate} from "react-router-dom";

const BookmarkListView = () => {
  //
  const navigate = useNavigate();
  const [_user] = useAtom(userAtom)
  const {bookmarks} = useBookmarks(_user.userId);

  const handleClickBoardItem = (boardId: string) => {
    navigate(`/board/${boardId}`)
  }
  return (
    <Box>
      {bookmarks?.map((bookmark, index) => (
        <Grid key={`bookmark-${index}`} onClick={() => handleClickBoardItem(bookmark.id)}>
          <Card>
            <CardContent>
              <Typography>{bookmark.title}</Typography>
              <Typography>{bookmark.content}</Typography>
              <Typography>{bookmark.bookmarkCount}</Typography>
              <Typography>{bookmark.viewCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Box>
  )
}

export default BookmarkListView;
