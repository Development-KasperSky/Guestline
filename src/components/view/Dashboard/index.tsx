import React from "react";

import { Box } from "@mui/material";

import { DashboardViewStyle } from "./index.style";

import { HeaderComponent, HotelShowComponent } from "components/common";

export const DashboardView: React.FC = () => {
  return (
    <DashboardViewStyle>
      <HeaderComponent />
      <Box className="main-container">
        <HotelShowComponent />
      </Box>
    </DashboardViewStyle>
  );
};
