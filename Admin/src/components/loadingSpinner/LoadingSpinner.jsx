import React from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  let { isLoading } = useSelector((state) => state.loadingSpinnerSlice);

  return isLoading ? (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.5)",
        position: "fixed",
        zIndex: "20",
        height: "100vh",
        width: "100%",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="spinner "
    >
      <FadeLoader color="#331D2C" size={20} speedMultiplier={2} />
    </div>
  ) : (
    <></>
  );
};

export default LoadingSpinner;
