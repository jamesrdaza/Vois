import Projects from "../components/Projects";
import styles from "../styles/Projects.module.css"
import NavBar from "../components/NavBar"

export default function projects({ projects }) {
    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div className={styles.projectsContainer}>
                <Projects projects={projects} />
            </div>
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
