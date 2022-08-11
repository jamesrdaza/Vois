import Project from "../../../components/Project";

export default function project({ project }) {
    return (
        <Project project={project} />
    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`api/projects/${context.params.contractAddress}`);
    const project = await res.json();

    return ({
        props: {
            project: project
        }
    })
}

