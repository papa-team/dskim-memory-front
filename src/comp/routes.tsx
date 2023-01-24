import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route,
} from "react-router-dom";
import BoardPostView from "~/comp/view/board/view/BoardPostView";
import BoardDetailView from "~/comp/view/board/view/BoardDetailView";
import {BoardContainer, LoginView, SignUpView} from "~/comp/view";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BoardContainer/>} />
      <Route path="/post-new" element={<BoardPostView/>} />
      <Route path="/board/:id" element={<BoardDetailView/>} />
      <Route path="/signup" element={<SignUpView/>} />
      <Route path="/login" element={<LoginView/>} />
    </>
  )
);

export default routes;
