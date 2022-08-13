import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", margin: "auto" }}>
            {
                projects.map((project) => (
                    <ProjectCard project={project} />
                ))
            }
        </div>
    );
}

export default Projects;