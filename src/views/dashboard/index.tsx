import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container";

export default function Dashboard() {
  const navigate = useNavigate();

  const navigateToTodo = () => navigate("todo");

  return (
    <Container alignCenter>
      <div className="h-25 mt-5">
        <p className="h3">This Project includes</p>
        <ol>
          <li>React Router</li>
          <li>Bootstrap 5</li>
          <li>Redux</li>
          <li>Axios</li>
        </ol>
      </div>
      <button className="btn btn-primary" onClick={navigateToTodo}>
        View Todo List
      </button>
    </Container>
  );
}
