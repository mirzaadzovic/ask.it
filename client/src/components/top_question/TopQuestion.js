import { Link } from "react-router-dom";
import "./TopQuestion.css";
const TopQuestion = ({ question }) => {
  return (
    <Link to={`/question/${question?.questionId}`} className="topQuestion">
      {question?.questionText}
    </Link>
  );
};

export default TopQuestion;
