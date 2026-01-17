import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addProject = (project) => {
    setProjects([project, ...projects]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Personal Project Showcase App</h1>
      <ProjectForm addProject={addProject} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
