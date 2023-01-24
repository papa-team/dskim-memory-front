import React, {useCallback, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {UserCdo} from "~/comp";
import UserFlowApiStub from "~/comp/api/user/command/rest/UserFlowApiStub";

const LoginView = () => {
  //
  const {registerUser} = UserFlowApiStub;
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

  const handleClickRegister = useCallback(async () => {
    await registerUser(userCdo);
  }, [userCdo]);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <TextField label={"아이디"} name={"userId"} onChange={handleChangeInput}/>
        <TextField label={"사용자 이름"} name={"userName"} onChange={handleChangeInput}/>
        <TextField label={"비밀번호"} name={"password"} onChange={handleChangeInput}/>
      </Box>
      <Box>
        <Button onClick={handleClickRegister}>가입</Button>
      </Box>
    </>
  )
};

export default LoginView;
