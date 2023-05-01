import React from "react";
import { useSelector } from "react-redux";

import { DashboardView } from "components/view";
import { RootState } from "redux/store";

export const DashboardContainter: React.FC = () => {
  const hotelData = useSelector((state: RootState) => state.data);

  console.log("here -> ", hotelData);
  return <DashboardView />;
};
