import { Theme } from "@mui/material";

export type ThemeColors = {
  colors: Record<string, string>;

  textFont: {
    defaultFont: string;
  };

  textWeight: {
    light: string;
    regular: string;
    semibold: string;
  };
};

export type ImageURLs = {
  primaryLogoImg: string;
};

export type LogoSize = {
  primaryWidth: string;
  primaryHeight: string;
  primaryCarouselWidth: string;
  primaryCarouselHeight: string;
};

export interface BDTheme extends Theme, ThemeColors, ImageURLs, LogoSize {}
