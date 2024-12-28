import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import StartPage from "../pages/StartPage";
import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;