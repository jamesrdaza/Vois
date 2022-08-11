import styles from "../styles/Projects.module.css"

function ProjectCard({ project }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardPicture}>

            </div>
            <div className={styles.projectName}>
                {project.projectName}
            </div>
            <div className={styles.socials}>

            </div>
            <div className={styles.address}>

            </div>
        </div>
    );
}

export default ProjectCard;