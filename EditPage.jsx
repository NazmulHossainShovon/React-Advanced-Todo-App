import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditContext } from "./context/EditContext";
import { tasks } from "./DataStore";

export default function EditPage() {
  const { editIndex } = useContext(EditContext);
  const [text, setText] = useState(tasks[editIndex].taskName);
  const navigate = useNavigate();

  function confirmEdit() {
    tasks[editIndex].taskName = text;
    navigate("/");
  }

  return (
    <div>
      <input
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <input type="date" />
      <button onClick={confirmEdit}>Save</button>
    </div>
  );
}
