import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import HeaderView from "~/comp/view/layout/view/HeaderView";
import {useLogin} from "~/comp/view/user/view/login/Login.hook";

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
      <div>{props.children}</div>
    </>
  )
}
export default AppLayout;
