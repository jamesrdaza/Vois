import HotProject from "./HotProject";

function HotProjectList({ hotProjects }) {
    return (
        <>
            {
                hotProjects.map((hotProject) => (
                    <HotProject hotProject={hotProject} />
                ))
            }
        </>
    );
}

export default HotProjectList;