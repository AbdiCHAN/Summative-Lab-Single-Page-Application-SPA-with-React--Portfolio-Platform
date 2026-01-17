import ProjectCard from "./ProjectCard";
import "../styles/ProjectList.css";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="no-projects">No projects found.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
