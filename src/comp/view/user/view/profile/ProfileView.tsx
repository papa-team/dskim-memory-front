import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const ProfileView = () => {
  //
  const navigate = useNavigate();
  return (
    <>
      <div>profile page</div>
      <div>userId</div>
      <div>userName</div>
      <div>가입일자 : </div>
      <Button onClick={() => navigate("/profile-setting")}>프로필 설정</Button>
      <Button variant={"outlined"} onClick={() => navigate("/my-bookmarks")}>나의 bookmark 목록</Button>
    </>
  )
}
export default ProfileView;
