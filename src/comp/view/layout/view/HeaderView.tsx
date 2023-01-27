import React, {useCallback} from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ThemeToggleView from "~/comp/view/layout/view/ThemeToggleView";
import {useAtom} from "jotai";
import {editableAtom} from "~/comp";

const HeaderView = () => {

  const navigate = useNavigate();
  const [,setEditable] = useAtom(editableAtom);
  const handleClickNewPost = useCallback(() => {
    navigate("/post-new");
    setEditable(false);
  }, []);
  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Box>HEADER</Box>
        <Box>
          <Button onClick={() => navigate('/')}>HOME</Button>
        </Box>
        <Button onClick={() => navigate('/profile')}>Profile</Button>
        <ThemeToggleView />
        <Button onClick={handleClickNewPost}>새 글 작성하기</Button>
      </Box>
    </>
  );
}

export default HeaderView;
