import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route,
} from "react-router-dom";
import {BoardContainer, LoginView} from "~/comp/view";
import BoardPostView from "~/comp/view/board/view/BoardPostView";
import BoardDetailView from "~/comp/view/board/view/BoardDetailView";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BoardContainer/>} />
      <Route path="/post-new" element={<BoardPostView/>} />
      <Route path="/board/:id" element={<BoardDetailView/>} />
      <Route path="/login" element={<LoginView/>} />
    </>
  )
);

export default routes;
