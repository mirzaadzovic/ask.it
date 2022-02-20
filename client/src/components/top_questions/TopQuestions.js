import topHOC from "../top_hoc/TopHoc";
import TopQuestion from "../top_question/TopQuestion";

const TopQuestions = () => {
  const questions = [
    {
      questionId: 1,
      text: "Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? Ko me zove svaku noć majka mi poluđe? ",
    },
    { questionId: 2, text: "Će izađemo neđe na piće???" },
    { questionId: 3, text: "Kakav si mi ti vako ko insan??" },
  ];
  const Component = topHOC(
    TopQuestion,
    [28, 11, 8],
    "Top 3 liked questions",
    questions
  );
  return <Component />;
};

export default TopQuestions;
