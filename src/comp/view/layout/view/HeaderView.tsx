import React from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const HeaderView = () => {

  const navigate = useNavigate();
  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Box>HEADER</Box>
        <Box>
          <Button onClick={() => navigate('/')}>HOME</Button>
        </Box>
        <Button onClick={() => navigate('/profile')}>Profile</Button>
      </Box>
    </>
  );
}

export default HeaderView;
