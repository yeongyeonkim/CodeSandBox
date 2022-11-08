import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainCalenderPage from "./pages/MainCalenderPage";
//import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainCalenderPage />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <MainPage />
    // </div>
  );
}

export default App;
