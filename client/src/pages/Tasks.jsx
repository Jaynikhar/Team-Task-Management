import { useState, useEffect } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="tasks">
        <h2>Tasks</h2>

        <div className="create-box">
          <input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={createTask}>Add</button>
        </div>

        <div className="list">
          {tasks.map((t) => (
            <div key={t._id} className="card">
              <p>{t.title}</p>

              <select
                value={t.status}
                onChange={(e) => updateStatus(t._id, e.target.value)}
              >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;