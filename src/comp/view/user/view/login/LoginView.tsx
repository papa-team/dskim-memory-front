import React, {useCallback, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {UserCdo} from "~/comp";
import UserSeekApiStub from "~/comp/api/user/query/rest/UserSeekApiStub";

const LoginView = () => {
  //
  const {loginUser} = UserSeekApiStub;
  // @ts-ignore
  const [userCdo, setUserCdo] = useState<UserCdo>(null);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.currentTarget.name;
    setUserCdo(
      {
        ...userCdo,
        [name]: e.currentTarget.value
      }
    )
  }

  const handleClickLogin = useCallback(async () => {
    // await registerUser(userCdo);
  }, [userCdo]);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <TextField label={"아이디"} name={"userId"} onChange={handleChangeInput}/>
        <TextField label={"사용자 이름"} name={"userName"} onChange={handleChangeInput}/>
        <TextField label={"비밀번호"} name={"password"} onChange={handleChangeInput}/>
      </Box>
      <Box>
        <Button onClick={handleClickLogin}>로그인</Button>
      </Box>
    </>
  )
};

export default LoginView;
