import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
// import {useUserRdo} from "~/comp/view/user/view/profile/Profile.hook";
import {useLogin} from "~/comp/view/user/view/login/Login.hook";

const ProfileView = () => {
  //
  const {userLogin} = useLogin()
  const navigate = useNavigate();
  // const {userRdo} = useUserRdo(id);

  return (
    <>
      <div>profile page</div>
      <div>{userLogin ? userLogin.userId : ""}</div>
      <div>userName</div>
      <div>가입일자 : </div>
      <Button onClick={() => navigate("/profile-setting")}>프로필 설정</Button>
      <Button variant={"outlined"} onClick={() => navigate("/my-bookmarks")}>나의 bookmark 목록</Button>
    </>
  )
}
export default ProfileView;
