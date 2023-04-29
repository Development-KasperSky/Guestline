import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type CounterComponentStyleProps = StyledComponentProps & {};

export const CounterComponentStyle = styled("div")<CounterComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      width: "15%",

      ".container": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3px",
        gap: 10,
        backgroundColor: bdTheme.colors.purple,
        color: "white",
      },
    };
  }
);
