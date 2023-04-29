import React from "react";

import { DashboardViewStyle } from "./index.style";

import { HeaderComponent } from "components/common";

export const DashboardView: React.FC = () => {
  return (
    <DashboardViewStyle>
      <HeaderComponent />
    </DashboardViewStyle>
  );
};
