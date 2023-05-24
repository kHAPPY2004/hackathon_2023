import React from "react";
import Carousel from "./carousel";

const MyPage = () => {
  const imagePaths = [
    "/coursel/coursel_01.png",
    "/coursel/coursel_02.png",
    "/coursel/coursel_01.png",
  ];

  return <Carousel imagePaths={imagePaths} />;
};

export default MyPage;
