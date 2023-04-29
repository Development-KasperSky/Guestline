import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type DashboardViewStyleProps = StyledComponentProps & {};

export const DashboardViewStyle = styled("div")<DashboardViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {};
  }
);
