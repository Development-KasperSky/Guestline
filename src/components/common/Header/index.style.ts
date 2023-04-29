import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type HeaderComponentStyleProps = StyledComponentProps & {};

export const HeaderComponentStyle = styled("div")<HeaderComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      display: "flex",
      flexDirection: "column",

      width: "100%",
      height: "9rem",

      backgroundColor: bdTheme.colors.purple,
      boxSizing: "border-box",
      boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.77)",

      ".logo": {
        width: theme.primaryWidth,
        margin: "3rem 0 0 2rem",
      },

      ".controlbar-container": {
        display: "flex",
        justifyContent: "center",

        ".controlbar": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          position: "absolute",
          top: "120px",

          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.77)",

          width: "40%",
          borderRadius: "7px",
          backgroundColor: bdTheme.colors.grey,

          ".rating": {
            flex: "30%",
            justifyContent: "center",
          },

          ".adult-counter": {
            flex: "35%",
            justifyContent: "center",
          },

          ".children-counter": {
            flex: "35%",
            justifyContent: "center",
          },
        },
      },
    };
  }
);
