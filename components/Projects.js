import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
    return (
        <>
            {
                projects.map((project) => (
                    <ProjectCard project={project} />
                ))
            }
        </>
    );
}

export default Projects;