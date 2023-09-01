import React from "react";
import { Desktop, Mobile, Tablet } from "../../responsive/responsive";
import CarouselDesktop from "./CarouselDesktop";
import CarouselTablet from "./CarouselTablet";
import CarouselMobile from "./CarouselMobile";
export default function Carousel() {
  return (
    <div>
      <Desktop>
        <CarouselDesktop />
      </Desktop>
      <Tablet>
        <CarouselTablet />
      </Tablet>
      <Mobile>
        <CarouselMobile />
      </Mobile>
    </div>
  );
}
