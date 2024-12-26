import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import StartPage from "../pages/StartPage";
import GamePage from "../pages/GamePage";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;