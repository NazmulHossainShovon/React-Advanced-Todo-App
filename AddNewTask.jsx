import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./components/input";
import { tasks } from "./DataStore";
import "./AddNewTask.scss";

export default function AddNewTask() {
  const [inputData, setInputData] = useState("");
  const [inputDate, setInputDate] = useState("");
  const navigate = useNavigate();

  function handleInput(event) {
    const task = event.target.value;
    setInputData(task);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { taskName: inputData, dueDate: inputDate };
    tasks.push(newTask);
    navigate("/");
  }

  function handleDate(event) {
    const dateValue = event.target.value;
    setInputDate(dateValue);
  }

  return (
    <div class="add-new-container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputData}
          onChange={handleInput}
          label="What is to be done?"
        />
        <Input
          onChange={handleDate}
          type="date"
          label="Due date (Click on Calendar Icon)"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
