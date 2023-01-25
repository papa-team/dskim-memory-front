import {BrowserRouter as Router} from "react-router-dom";
import PageRoutes from "~/comp/routes";
import React from "react";
import AppLayout from "~/comp/AppLayout";

const Application = () => (
  <Router>
    {/*<RouterProvider router={routes} />*/}
    {/*<RouterProvider router={routes} />*/}
    <AppLayout>
      <PageRoutes />
    </AppLayout>
  </Router>
)

export default Application;
