import styles from "../../styles/ProjectStyles/ProjectCard.module.css"
import Link from "next/dist/client/link";

function ProjectCard({ project }) {

    return (
        <Link href={`http://localhost:3000/projects/${project.contractAddress}`}>
            <div className={styles.card}>
                <div className={styles.cardPicture}>
                    <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={project.imageUrl} alt="banner" />
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