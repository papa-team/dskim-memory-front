import React from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {useBookmarks} from "~/comp/view/user/view/profile/BookmarkList.hook";
import {useAtom} from "jotai";
import {userAtom} from "~/comp";

const BookmarkListView = () => {
  //
  const [_user] = useAtom(userAtom)
  const {bookmarks} = useBookmarks(_user.userId);

  return (
    <Box>
      {bookmarks?.map((bookmark, index) => (
        <Grid key={`bookmark-${index}`}>
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
