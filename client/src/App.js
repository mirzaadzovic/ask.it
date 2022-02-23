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
import Loading from "./pages/loading/Loading.js";
import { selectIsLoading, selectUser } from "./redux/reducers/authReducer";
import Register from "./pages/register/Register";
import MyProfile from "./pages/my_profile/MyProfile";

function App({ user, displayDropdown, close, isLoading }) {
  return (
    <BrowserRouter>
      <div className="app" onClick={(e) => close(e)}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="app__header">
              <Navbar />
              {displayDropdown && <Dropdown />}
            </div>
            <div className="app__body">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/user/*"
                  element={<MyQuestions userId={user?.userId} />}
                />
                <Route path="/question/*" element={<Question />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-profile" element={<MyProfile />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    displayDropdown: selectOpenDropdown(state),
    isLoading: selectIsLoading(state),
    user: selectUser(state),
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
