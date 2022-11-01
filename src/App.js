import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./views/MainPage";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/cryptocurrencies" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
