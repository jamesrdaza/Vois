import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", margin: "auto" }}>
            {
                projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
        </div>
    );
}

export default ProjectList;