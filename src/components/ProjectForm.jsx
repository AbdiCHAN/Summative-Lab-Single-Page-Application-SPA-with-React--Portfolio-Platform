import { useState } from "react";
import "../styles/ProjectForm.css";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addProject({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;
