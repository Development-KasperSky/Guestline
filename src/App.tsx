import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { PATH } from "consts";

import "styles/global.css";
import { defaultTheme } from "styles";

import { DashboardPage } from "pages";

export const App: React.FC = () => {
  const theme: Theme = defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
      </Routes>
    </ThemeProvider>
  );
};
