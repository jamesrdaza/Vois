import Project from "./Project";

function Projects({ projects }) {
    return (
        <div>
            {
                projects.map((project) => (
                    <Project project={project} />
                ))
            }
        </div>
    );
}

export default Projects;