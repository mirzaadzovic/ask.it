import React from "react";
import LoadingSpinner from "../../components/loading/Loading";
import Logo from "../../components/logo/Logo";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingPage">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
