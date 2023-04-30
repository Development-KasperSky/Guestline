import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type RoomShowComponentStyleProps = StyledComponentProps & {};

export const RoomShowComponentStyle = styled(
  "div"
)<RoomShowComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",

    borderBottom: "solid 1px black",

    ".room-title": {
      flex: "15%",
      padding: "10px",

      ".room-name": {
        fontSize: "17px",
        fontWeight: "bold",
      },
    },

    ".room-desc": {
      flex: "85%",
      padding: "10px",
    },
  };
});
