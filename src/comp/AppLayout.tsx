import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import HeaderView from "~/comp/view/layout/view/HeaderView";
import {useLogin} from "~/comp/view/user/view/login/Login.hook";
import {Box, styled} from "@mui/material";

const AppLayout = (props) => {
  const navigate = useNavigate();
  const {userLogin} = useLogin()

  useEffect(() => {
    if (userLogin === undefined) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [userLogin]);

  return (
    <>
      {userLogin && <HeaderView />}
      <StyledAppLayout>
        <div>{props.children}</div>
      </StyledAppLayout>
    </>
  )
}
export default AppLayout;

const StyledAppLayout = styled(Box)<any>((): any => ({
  maxWidth: '1280px',
  margin: '0 auto',
  marginTop: `calc(70px + 30px)`,
}));
