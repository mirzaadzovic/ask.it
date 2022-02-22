import { useEffect, useState } from "react";
import APIService from "../../services/APIService";
import topHOC from "../top_hoc/TopHoc";
import TopQuestion from "../top_question/TopQuestion";

const TopQuestions = () => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await APIService.getAll(
        "/reactions/top-questions"
      ).catch((err) => null);

      setQuestions(
        response.map((q) => ({
          questionId: q.question.questionid,
          questionText: q.question.questiontext,
          total: q.likes,
        }))
      );
    }, 1000);
  }, [setQuestions]);

  const Component = topHOC(TopQuestion, "Top 3 liked questions", questions);
  return <Component />;
};

export default TopQuestions;
