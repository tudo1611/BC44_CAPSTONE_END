import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import ListCourse from "./ListCourse/ListCourse";
import Number from "./Number/Number";
import SliderTeacher from "./SliderTeacher/SliderTeacher";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <ListCourse />
      <Number />
      <SliderTeacher />
    </div>
  );
}
