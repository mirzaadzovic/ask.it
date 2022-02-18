import React from "react";
import MostAnswers from "../../components/most_answers/MostAnswers";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <MostAnswers />
        <MostAnswers />
      </div>
      <div className="home__right">
        <QuestionsContainer />
      </div>
    </div>
  );
};

export default Home;
