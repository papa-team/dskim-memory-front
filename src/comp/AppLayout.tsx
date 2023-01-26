import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import HeaderView from "~/comp/view/layout/view/HeaderView";
import {useAtom} from "jotai";
import {userAtom} from "~/comp/store";

const AppLayout = (props) => {
  const navigate = useNavigate();
  const [, _setUser] = useAtom<typeof userAtom>(userAtom);
  useEffect(() => {
    if (sessionStorage.getItem('login') !== "true") {
      navigate('/login')
    } else {
      _setUser({
        userId: sessionStorage.getItem("userId") as string,
        userName: sessionStorage.getItem("userName") as string,
      })
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
