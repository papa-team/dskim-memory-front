import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import HeaderView from "~/comp/view/layout/view/HeaderView";

const AppLayout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem('login') !== "true") {
      navigate('/login')
    }
  }, [sessionStorage.getItem('login')])
  return (
    <>
      <HeaderView />
      <div>{props.children}</div>
    </>
  )
}
export default AppLayout;
