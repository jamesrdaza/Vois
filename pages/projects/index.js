import Projects from "../../components/ProjectComponents/Projects";
import styles from "../../styles/ProjectStyles/Projects.module.css"
import NavBar from "../../components/NavBar"
import { FaRegPlusSquare } from "react-icons/fa"
import { useSession } from "next-auth/react"

export default function projects({ projects }) {
    const { data: session, status } = useSession()
    return (
        <div className={styles.pageContainer}>
            <NavBar address={status == "authenticated" ? session.userData.address : ""} />
            <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "9%", bottom: "10%", display: "flex", alignItems: "center", marginBottom: "-0.6%", width: "70vw" }} >
                    <FaRegPlusSquare fill="#028a68b4" size={30} />
                    <p > Add Project</p>
                </div>
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
    return ({
        props: {
            projects
        }
    })
}
