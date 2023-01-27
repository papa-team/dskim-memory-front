import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useLogin} from "~/comp/view/user/view/login/Login.hook";

const LoginView = () => {
  //
  const navigate = useNavigate();
  const [loginUserInfo, setLoginUserInfo] = useState<any>({userId:"", password:""});
  const {userLogin, refetch} = useLogin(loginUserInfo.userId, loginUserInfo.password);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.currentTarget.name;
    setLoginUserInfo(
      {
        ...loginUserInfo,
        [name]: e.currentTarget.value,
      }
    )
  }

  const handleClickLogin = useCallback(async () => {
    await refetch()
      .then((res) => {
        setLoginUserInfo({userId:"", password:""})
      });
  }, [loginUserInfo]);

  useEffect(() => {
    if (userLogin !== undefined) {
      sessionStorage.setItem("USER_ID", userLogin.id);
    }
  }, [userLogin]);

  // useEffect(() => {
  //   if (sessionStorage.getItem('login') === "true") {
  //     navigate('/');
  //   }
  // }, [sessionStorage.getItem('login')]);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <TextField label={"아이디"} name={"userId"} onChange={handleChangeInput} value={loginUserInfo.userId}/>
        <TextField label={"비밀번호"} name={"password"} onChange={handleChangeInput} value={loginUserInfo.password}/>
      </Box>
      <div>{userLogin ? userLogin.id : ""}</div>
      <Box>
        <Button onClick={handleClickLogin}>로그인</Button>
        <Button onClick={() => navigate("/signup")}>회원가입</Button>
      </Box>
    </>
  )
};

export default LoginView;
