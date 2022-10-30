import { Route, Routes } from "react-router-dom";
import AddNewTask from "./AddNewTask";
import EditPage from "./EditPage";
import Navbar from "./Navbar";
import Overdue from "./Overdue";
import TaskList from "./TaskList";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<TaskList />} />
          <Route path="overdues" element={<Overdue />} />
          <Route path="add-task" element={<AddNewTask />} />
          <Route path="edit" element={<EditPage />} />
        </Route>
      </Routes>
    </div>
  );
}
