import { createTheme } from "@mui/material/styles";

import { defaultColors } from "styles/default";
import { ImageURLs, LogoSize, ThemeColors } from "styles/types";

const themeColors: ThemeColors = {
  colors: {
    ...defaultColors,
  },

  textFont: {
    defaultFont: "Times New Roman",
  },

  textWeight: {
    light: "300",
    regular: "500",
    semibold: "700",
  },
};

const imageURLs: ImageURLs = {
  primaryLogoImg: "",
};

const logoSize: LogoSize = {
  primaryWidth: "10%",
  primaryHeight: "",
};

export const defaultTheme = createTheme({
  ...themeColors,
  ...imageURLs,
  ...logoSize,
  palette: {
    mode: "light",
  },
});
