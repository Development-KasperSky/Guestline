import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type RatingComponentStyleProps = StyledComponentProps & {};

export const RatingComponentStyle = styled("div")<RatingComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",

      ".MuiRating-root": {
        fontSize: "2rem",
      },
    };
  }
);
