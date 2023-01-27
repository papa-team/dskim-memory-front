import React from 'react';
import {Box, TextField} from "@mui/material";

const ProfileSettingView = () => {
  //

  return (
    <>
      <Box>SETTING PAGE</Box>
      <TextField label={"닉네임"}/>
      <TextField multiline rows={5} label={"자기소개"}/>
    </>
  )
}
export default ProfileSettingView;
