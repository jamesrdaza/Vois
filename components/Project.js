import styles from "../styles/Project.module.css"

function Project({ project }) {
    return (
        <div className="pageContainer">
            <div className={styles.banner}>
                <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={project.bannerUrl} alt="banner" />
            </div>
            <div className={styles.mainSection}>
                <div className={styles.mainContent}>
                    <div className={styles.info}>
                        <div className={styles.projectPicture}>
                            <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={project.imageUrl} alt="profile" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }} className={styles.description}>
                            <div style={{ width: "100%", height: "auto" }} className={styles.name}>
                                {project.projectName}
                            </div>
                            <div style={{ width: "100%", verticalAlign: "bottom", height: "auto" }} >
                                {project.description}
                            </div>

                        </div>
                    </div>
                    <div className={styles.posts}>
                        <div className={styles.header}>
                            Posts
                        </div>
                    </div>

                </div>
                <div className={styles.sideContent}>
                    <div className={styles.announcements}>
                        <div className={styles.header}>
                            Announcements
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.header}>
                            Socials
                        </div>
                        <div className={styles.address}>
                            {project.contractAddress}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;