import React from "react";

import { Box } from "@mui/material";

import { HeaderComponentStyle } from "./index.style";

import { CounterComponent, RatingComponent } from "components/common";

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderComponentStyle>
      <Box className="logo-container">
        <img className="logo" src="/image/logo.png" alt="" />
      </Box>
      <Box className="controlbar-container">
        <Box className="controlbar">
          <Box className="rating">
            <RatingComponent />
          </Box>
          <Box className="adult-counter">
            <CounterComponent title="Adult" />
          </Box>
          <Box className="children-counter">
            <CounterComponent title="Children" />
          </Box>
        </Box>
      </Box>
    </HeaderComponentStyle>
  );
};
