import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdown from "./components/dropdown/Dropdown";
import { connect } from "react-redux";
import { selectOpenDropdown } from "./redux/reducers/dropdownReducer";
import { closeDropdown } from "./redux/actions/dropdownActions";
import Home from "./pages/home/Home";
import MyQuestions from "./pages/my_questions/MyQuestions";
import Question from "./pages/question/Question";
import Login from "./pages/login/Login";

function App({ displayDropdown, close }) {
  return (
    <BrowserRouter>
      <div className="app" onClick={(e) => close(e)}>
        <div className="app__header">
          <Navbar />
          {displayDropdown && <Dropdown />}
        </div>
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="my-questions" element={<MyQuestions />} />
            <Route path="/question/*" element={<Question />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    displayDropdown: selectOpenDropdown(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: (e) => {
      dispatch(closeDropdown());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
