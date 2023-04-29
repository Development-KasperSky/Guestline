import React from "react";
import Carousel from "react-material-ui-carousel";

import { Box } from "@mui/material";

import { CarouselComponentStyle } from "./index.style";

type CarouselComponentProps = {};

export const CarouselComponent: React.FC = () => {
  const items = [
    {
      src: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/london-hotels-with-a-view-1614348818.jpeg",
    },
    {
      src: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/Hotel1.JPG",
    },
    {
      src: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG4/BHP_Exterior-et-back.jpeg",
    },
  ];
  return (
    <CarouselComponentStyle>
      <Carousel duration={1}>
        {items.map((item, i) => (
          <img className="carousel-img" key={i} src={item.src} />
        ))}
      </Carousel>
    </CarouselComponentStyle>
  );
};
