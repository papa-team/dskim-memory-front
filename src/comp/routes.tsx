import React from 'react';
import {Route, Routes} from "react-router-dom";
import BoardPostView from "~/comp/view/board/view/BoardPostView";
import BoardDetailView from "~/comp/view/board/view/BoardDetailView";
import {BoardContainer, BookmarkListView, LoginView, ProfileSettingView, ProfileView, SignUpView} from "~/comp/view";

const routes = () => (
  <Routes>
    <Route path="/" element={<BoardContainer/>}/>
    <Route path="/login" element={<LoginView/>}/>
    <Route path="/post-new" element={<BoardPostView/>}/>
    <Route path="/board/:id" element={<BoardDetailView/>}/>
    <Route path="/signup" element={<SignUpView/>}/>
    <Route path="/profile" element={<ProfileView/>}/>
    <Route path="/my-bookmarks" element={<BookmarkListView/>}/>
    <Route path="/profile-setting" element={<ProfileSettingView/>}/>
  </Routes>
);
export default routes;
