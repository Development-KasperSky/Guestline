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

      // [bdTheme.breakpoints.down(1640)]: {
      //   width: "100%",
      //   height: "14rem",
      // },

      // [bdTheme.breakpoints.down(1536)]: {
      //   width: "100%",
      //   height: "13rem",
      // },

      // [bdTheme.breakpoints.down(1440)]: {
      //   width: "100%",
      //   height: "12rem",
      // },

      // [bdTheme.breakpoints.down(1366)]: {
      //   width: "100%",
      //   height: "11rem",
      // },

      // [bdTheme.breakpoints.down(1280)]: {
      //   width: "100%",
      //   height: "10rem",
      // },

      // [bdTheme.breakpoints.down(1100)]: {
      //   width: "100%",
      //   height: "9rem",
      // },

      // [bdTheme.breakpoints.down(1024)]: {
      //   width: "100%",
      //   height: "8rem",
      // },

      // [bdTheme.breakpoints.down(980)]: {
      //   width: "100%",
      //   height: "7rem",
      // },

      // [bdTheme.breakpoints.down(768)]: {
      //   width: "100%",
      //   height: "6rem",
      // },
    };
  }
);
