import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route,
} from "react-router-dom";
import {BoardContainer} from "~/comp/view";
import BoardPostView from "~/comp/view/board/view/BoardPostView";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BoardContainer/>} />
      <Route path="/post-new" element={<BoardPostView/>} />
    </>
  )
);

export default routes;
