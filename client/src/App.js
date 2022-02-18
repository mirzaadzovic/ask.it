import "./App.css";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__header">
          <Navbar />
        </div>
        <div className="app__body">
          <Routes></Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
