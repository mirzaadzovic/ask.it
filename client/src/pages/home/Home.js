import React from "react";
import MostAnswers from "../../components/most_answers/MostAnswers";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";
import TopQuestions from "../../components/top_questions/TopQuestions";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <MostAnswers />
        <TopQuestions />
      </div>
      <div className="home__right">
        <QuestionsContainer />
      </div>
    </div>
  );
};

export default Home;
