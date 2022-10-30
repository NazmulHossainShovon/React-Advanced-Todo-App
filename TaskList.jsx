import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditContext } from "./context/EditContext.jsx";
import { VoiceContext } from "./context/VoiceContext.jsx";
import { tasks } from "./DataStore.js";
import "./TaskList.scss";

export default function TaskList() {
  const [deleted, setDeleted] = useState(false);
  const [query, setQuery] = useState("");
  const { setEditIndex } = useContext(EditContext);

  const navigate = useNavigate();
  const { transcript, listening, resetTranscript, SpeechRecognition } =
    useContext(VoiceContext);

  function handleDelete(e) {
    const id = e.target.value;
    tasks.splice(id, 1);
    navigate("/add-task");
    navigate("/");
  }

  function searchTasks(e) {
    const newQuery = e.target.value.toLocaleLowerCase();
    setQuery(newQuery);
  }

  function editTask(e) {
    setEditIndex(e.target.value);
    navigate("/edit");
  }

  useEffect(() => {
    setQuery(transcript);
  }, [transcript]);

  const filteredTasks = tasks.filter((task) => {
    return task.taskName.toLocaleLowerCase().includes(query);
  });

  return (
    <div className="container">
      <div className="search-container">
        <input onChange={searchTasks} type="text" placeholder="Search Tasks" />
        <button onClick={SpeechRecognition.startListening}>Voice Search</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Speak</button>
        <button onClick={resetTranscript}>Reset Voice</button>
      </div>

      <div className="tasks-container">
        {filteredTasks.map((item, index) => {
          return (
            <div className="item-container" key={index}>
              <div className="top-row">
                <input value={index} onChange={handleDelete} type="checkbox" />
                <h3> {item.taskName} </h3>
              </div>
              <div className="bottom-row">
                <p>{item.dueDate}</p>
                <button value={index} onClick={editTask}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/add-task">
        <button>Add New</button>
      </Link>
    </div>
  );
}
