import Project from "../../components/Project";


export default function project({ project }) {
    return (
        <>
            <Project project={project} />
        </>

    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/projects/${context.params.contractAddress}`);
    console.log(res);
    const project = await res.json();

    return ({
        props: {
            project
        }
    })
}

