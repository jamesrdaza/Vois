import Projects from "../components/Projects";

export default function projects({ projects }) {
    return (
        <div className="pageContainer">
            <Projects projects={projects} />
        </div >
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/projects");

    const projects = await res.json();
    console.log(projects);
    return ({
        props: {
            projects
        }
    })
}
