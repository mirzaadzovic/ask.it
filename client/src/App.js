import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import Dropdown from "./components/dropdown/Dropdown";
import { connect } from "react-redux";
import { selectOpenDropdown } from "./redux/reducers/dropdownReducer";
import { closeDropdown } from "./redux/actions/dropdownActions";

function App({ displayDropdown, close }) {
  return (
    <BrowserRouter>
      <div className="app" onClick={(e) => close(e)}>
        <div className="app__header">
          <Navbar />
          {displayDropdown && <Dropdown />}
        </div>
        <div className="app__body">
          <Routes></Routes>
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
