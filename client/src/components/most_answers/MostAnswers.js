import React from "react";
import UserTop3 from "../user_top3/UserTop3";
import "./MostAnswers.css";

const MostAnswers = () => {
  const users = [1, 2, 3];
  return (
    <div className="mostAnswers app__card">
      <p className="app__title">Top 3 responders</p>
      {users.map((u, idx) => {
        return <UserTop3 key={idx} rating={idx + 1} />;
      })}
    </div>
  );
};

export default MostAnswers;
