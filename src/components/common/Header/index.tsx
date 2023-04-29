import React from "react";

import { Box } from "@mui/material";

import { HeaderComponentStyle } from "./index.style";

import { CarouselComponent } from "components/common";

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderComponentStyle>
      <Box className="logo-container">
        <img className="logo" src="/image/logo.png" alt="" />
      </Box>
      <CarouselComponent />
    </HeaderComponentStyle>
  );
};
