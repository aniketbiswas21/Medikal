import React, { Fragment } from "react";
import animation from "./doctorAnimation.json";
import Lottie from "react-lottie";

const FormAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ display: "block" }}
      />
    </Fragment>
  );
};

export default FormAnimation;
