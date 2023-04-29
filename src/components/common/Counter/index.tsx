import React, { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

import { CounterComponentStyle } from "./index.style";

type CounterComponentProps = {
  title: string;
};

export const CounterComponent: React.FC<CounterComponentProps> = ({
  title,
}) => {
  const [count, setCount] = useState<number>(0);

  const decreaseCount = () => {
    if (count - 1 < 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <CounterComponentStyle>
      <Box className="container">
        <Box className="label-container">
          <label>{title}: </label>
        </Box>
        <Box className="decreasement-container">
          <Button color="secondary" variant="outlined" onClick={decreaseCount}>
            -
          </Button>
        </Box>
        <Box className="count-show-container">
          <Typography>{count}</Typography>
        </Box>
        <Box className="increasement-container">
          <Button color="secondary" variant="outlined" onClick={increaseCount}>
            +
          </Button>
        </Box>
      </Box>
    </CounterComponentStyle>
  );
};
