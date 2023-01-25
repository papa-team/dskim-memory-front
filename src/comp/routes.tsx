import React from 'react';
import {Route, Routes} from "react-router-dom";
import BoardPostView from "~/comp/view/board/view/BoardPostView";
import BoardDetailView from "~/comp/view/board/view/BoardDetailView";
import {BoardContainer, LoginView, ProfileView, SignUpView} from "~/comp/view";

const routes = () => (
  <Routes>
    <Route path="/" element={<BoardContainer/>}/>
    <Route path="/login" element={<LoginView/>}/>
    <Route path="/post-new" element={<BoardPostView/>}/>
    <Route path="/board/:id" element={<BoardDetailView/>}/>
    <Route path="/signup" element={<SignUpView/>}/>
    <Route path="/profile" element={<ProfileView/>}/>
  </Routes>
);
export default routes;
