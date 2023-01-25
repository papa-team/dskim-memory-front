import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import UserSeekApiStub from "~/comp/api/user/query/rest/UserSeekApiStub";
import {useNavigate} from "react-router-dom";

const LoginView = () => {
  //
  const navigate = useNavigate();
  const {loginUser} = UserSeekApiStub;
  // @ts-ignore
  const [loginUserInfo, setLoginUserInfo] = useState<any>({userId:"", password:""});
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
    await loginUser(loginUserInfo.userId, loginUserInfo.password)
      .then((res) => {
        sessionStorage.setItem('userId', res.data.userId);
        sessionStorage.setItem('userName', res.data.userName);
        sessionStorage.setItem('login', String(true));
        setLoginUserInfo({userId:"", password:""})
      });
  }, [loginUserInfo]);

  useEffect(() => {
    if (sessionStorage.getItem('login') === "true") {
      navigate('/');
    }
  }, [sessionStorage.getItem('login')]);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <TextField label={"아이디"} name={"userId"} onChange={handleChangeInput} value={loginUserInfo.userId}/>
        <TextField label={"비밀번호"} name={"password"} onChange={handleChangeInput} value={loginUserInfo.password}/>
      </Box>
      <Box>
        <Button onClick={handleClickLogin}>로그인</Button>
        <Button onClick={() => navigate("/signup")}>회원가입</Button>
      </Box>
    </>
  )
};

export default LoginView;
