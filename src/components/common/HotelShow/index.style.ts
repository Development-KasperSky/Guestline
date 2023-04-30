import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type HotelShowComponentStyleProps = StyledComponentProps & {};

export const HotelShowComponentStyle = styled(
  "div"
)<HotelShowComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    width: "70%",

    ".card-container": {
      width: "100%",

      ".header": {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderBottom: "solid 1px black",

        ".image-show": {
          flex: "25%",
          padding: "20px",
        },

        ".title": {
          flex: "40%",
          padding: "20px",

          ".hotel-name": {
            fontSize: "30px",
          },
        },

        ".rating": {
          flex: "30%",
          padding: "20px",
          textAlign: "left",
        },
      },

      ".content": {
        display: "flex",
        flexDirection: "column",
      },

      ".css-1b3h77j": {
        justifyContent: "end",
      },
    },
  };
});
