import React from "react";
import { Desktop, Mobile, Tablet } from "../../../responsive/responsive";
import NumberDesktop from "./NumberDesktop";
import NumberTablet from "./NumberTablet";
import NumberMobile from "./NumberMobile";
export default function Number() {
  return (
    <div>
      <Desktop>
        <NumberDesktop />
      </Desktop>
      <Tablet>
        <NumberTablet />
      </Tablet>
      <Mobile>
        <NumberMobile />
      </Mobile>
    </div>
  );
}
