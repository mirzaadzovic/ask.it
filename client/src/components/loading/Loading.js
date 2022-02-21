import React from "react";
import loading from "../../assets/loading.gif";
import "./Loading.css";

const LoadingSpinner = () => {
  return <img src={loading} className="loading" />;
};

export default LoadingSpinner;
