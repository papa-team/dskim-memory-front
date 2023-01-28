import React, {useCallback} from 'react';
import {Avatar, Box, Button, styled} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ThemeToggleView from "~/comp/view/layout/view/ThemeToggleView";
import {useAtom} from "jotai";
import {editableAtom} from "~/comp";
import FaceIcon from '@mui/icons-material/Face';

const HeaderView = () => {

  const navigate = useNavigate();
  const [, setEditable] = useAtom(editableAtom);
  const handleClickNewPost = useCallback(() => {
    navigate("/post-new");
    setEditable(false);
  }, []);
  return (
    <>
      <StyledHeaderLayout
        display={"flex"}
        alignItems={"center"}
        position={"fixed"}
        zIndex={99}
      >
        <StyledHeaderInner>
          <Box flex={1}>
            <StyledLogo
              src="/public/vite.svg" alt="profile"
              onClick={() => navigate('/')}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
            <ThemeToggleView/>
            <Button onClick={handleClickNewPost}>새 글 작성하기</Button>
            <StyledProfile
              onClick={() => navigate('/profile')}
              // src="/public/vite.svg" alt="profile"
            >
              <FaceIcon/>
            </StyledProfile>
          </Box>
        </StyledHeaderInner>
      </StyledHeaderLayout>
    </>
  );
}

const StyledHeaderLayout = styled(Box)<any>(({theme}): any => ({
  backgroundColor: theme.palette.grey["50"],
  width: '100%',
  height: '70px',
  top: 0,
  display: 'flex',
  alignItems:'center',
  position: 'fixed',
  zIndex: 99,
  boxShadow: '1px 5px 5px 1px rgba(0,0,0,0.1)'
}));


const StyledHeaderInner = styled(Box)<any>((): any => ({
  width: '1280px',
  height: 'inherit',
  display: 'flex',
  alignItems:'center',
  margin: '0 auto',
}));
const StyledProfile = styled(Avatar)<any>((): any => ({
  cursor: 'pointer'
}))

const StyledLogo = styled("img")<any>((): any => ({
  cursor: 'pointer',
  width: '200px',
  height: '50px'
}))
export default HeaderView;
