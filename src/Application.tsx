import {BrowserRouter as Router} from "react-router-dom";
import PageRoutes from "~/comp/routes";
import React from "react";
import AppLayout from "~/comp/AppLayout";
import {darkTheme, lightTheme} from "~/ThemeConfig";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useAtom} from "jotai";
import {themeAtom} from "~/comp";

const Application = () => {
  //
  const [dark] = useAtom(themeAtom);

  return (
    <Router>
      {/*<RouterProvider router={routes} />*/}
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <CssBaseline/>
        <AppLayout>
          <PageRoutes/>
        </AppLayout>
      </ThemeProvider>
    </Router>
  )
}

export default Application;
