import React from "react";

import { Box, Typography } from "@mui/material";

import { RoomShowComponentStyle } from "./index.style";

export const RoomShowComponent: React.FC = () => {
  return (
    <RoomShowComponentStyle>
      <Box className="room-title">
        <Typography className="room-name">Room 1 Name</Typography>
        <Typography>Adults</Typography>
        <Typography>Room 1 Name</Typography>
      </Box>
      <Box className="room-desc">
        <Typography>
          Hello, Welcome to Guestline Hotel. We serve warm and comfortable
          service.
        </Typography>
      </Box>
    </RoomShowComponentStyle>
  );
};
