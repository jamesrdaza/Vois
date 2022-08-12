import styles from "../styles/Projects.module.css"
import Link from "next/dist/client/link";

function ProjectCard({ project }) {

    return (
        <Link href={`http://localhost:3000/projects/${project.contractAddress}`}>
            <div className={styles.card}>
                <div className={styles.cardPicture}>

                </div>
                <div className={styles.projectName}>
                    {project.projectName}
                </div>
                <div className={styles.cardSocials}>

                </div>
                <div className={styles.address}>

                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;