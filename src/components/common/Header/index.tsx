import React from "react";

import { Box } from "@mui/material";

import { HeaderComponentStyle } from "./index.style";

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderComponentStyle>
      <Box className="logo-container">
        <img className="logo" src="/image/logo.png" alt="" />
      </Box>
    </HeaderComponentStyle>
  );
};
