import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { tasks } from "./DataStore";

export default function Overdue() {
  const [deleted, setDeleted] = useState(false);

  const navigate = useNavigate();

  function handleDelete(e) {
    const id = e.target.value;
    tasks.splice(id, 1);
    navigate("/");
  }

  return (
    <div>
      {tasks.map((item, index) => {
        const nowDate = new Date();
        const taskDate = new Date(item.dueDate);
        if (taskDate.getTime() < nowDate.getTime()) {
          return (
            <div key={index}>
              <input value={item.id} onChange={handleDelete} type="checkbox" />
              <h3> {item.taskName} </h3>
              <p>{item.dueDate}</p>
            </div>
          );
        }
      })}
      <Link to="/add-task">
        <button>Add New</button>
      </Link>
    </div>
  );
}
