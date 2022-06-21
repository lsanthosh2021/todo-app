import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { goback } from "./utils/const";
import "./utils/scss/index.scss";
import { RootState } from "./utils/store";
import Dashboard from "./views/dashboard";
import Todo from "./views/todo";

function App() {
  return (
    <div className="container-fluid vw-100 vh-100 d-flex flex-column pt-3 pb-3">
      <h1>React Todo</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
