import React from "react";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<TasksPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
