import React, { useState } from "react";

import { Box, Card, Typography } from "@mui/material";

import { HotelShowComponentStyle } from "./index.style";

import {
  CarouselComponent,
  RatingComponent,
  RoomShowComponent,
} from "components/common";

type HotelShowComponentProps = {};

export const HotelShowComponent: React.FC = ({}) => {
  return (
    <HotelShowComponentStyle>
      <Card className="card-container">
        <Box className="header">
          <Box className="image-show">
            <CarouselComponent />
          </Box>
          <Box className="title">
            <Typography className="hotel-name">Hotel 1 Name</Typography>
            <Typography>Address 1</Typography>
            <Typography>Address 2</Typography>
          </Box>
          <Box className="rating">
            <RatingComponent />
          </Box>
        </Box>
        <Box className="content">
          <RoomShowComponent />
          <RoomShowComponent />
          <RoomShowComponent />
        </Box>
      </Card>
    </HotelShowComponentStyle>
  );
};
