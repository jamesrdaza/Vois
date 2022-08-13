import Projects from "../../components/ProjectComponents/Projects";
import styles from "../../styles/ProjectStyles/Projects.module.css"
import NavBar from "../../components/NavBar"
import { FaRegPlusSquare } from "react-icons/fa"

export default function projects({ projects }) {
    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div style={{ position: "relative" }}>
                <FaRegPlusSquare style={{ position: "absolute", right: "4%", bottom: "2%", }} size={30} fill="#028a68b4" />
            </div>
            <div className={styles.projectsContainer}>

                <Projects projects={projects} />
            </div>
        </div >
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/projects");

    const projects = await res.json();
    /*     console.log(projects); */
    return ({
        props: {
            projects
        }
    })
}
