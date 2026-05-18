import { useState, useEffect } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const createProject = async () => {
    await API.post("/projects", { name });
    setName("");
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="projects">
        <h2>Projects</h2>

        <div className="create-box">
          <input
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={createProject}>Add</button>
        </div>

        <div className="list">
          {projects.map((p) => (
            <div key={p._id} className="card">
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;