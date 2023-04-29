import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type CarouselComponentStyleProps = StyledComponentProps & {};

export const CarouselComponentStyle = styled(
  "div"
)<CarouselComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    ".MuiButtonBase-root": {
      width: "30px",
      height: "30px",
    },

    ".carousel-img": {
      borderRadius: "7px",
      width: "100%",
      height: "130px",
    },

    ".css-1m9128y": {
      position: "relative",
      top: "-20px",
    },
  };
});
