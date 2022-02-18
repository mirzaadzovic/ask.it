import React from "react";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <QuestionsContainer />
      </div>
      <div className="home__right"></div>
    </div>
  );
};

export default Home;
