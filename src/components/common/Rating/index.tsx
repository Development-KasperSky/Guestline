import React, { useState } from "react";

import { Rating } from "@mui/material";

import { RatingComponentStyle } from "./index.style";

type RatingComponentProps = {};

export const RatingComponent: React.FC = () => {
  const [value, setValue] = useState<number | null>(3);

  return (
    <RatingComponentStyle>
      <Rating
        name="rating"
        value={value}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </RatingComponentStyle>
  );
};
