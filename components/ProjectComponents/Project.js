import styles from "../../styles/ProjectStyles/Project.module.css"
import ProjectPostList from "../ProjectPost/ProjectPostList";
import Link from "next/link";

const posts = [
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
]

function Project({ project }) {
    return (
        <div className="pageContainer">
            <div className={styles.banner}>
                <div className={styles.header}>
                    <Link className={styles.button} href="/dashboard">Vois</Link>
                </div>
                <div className={styles.imgContainer}>
                    <img style={{ minHeight: "17.5vh", maxWidth: "50%" }} src={project.bannerUrl} alt="banner" />
                    <div className={styles.miscInfo}>

                    </div>
                </div>
            </div>
            <div className={styles.mainSection}>
                <div className={styles.mainContent}>
                    <div className={styles.info}>
                        <div className={styles.projectPicture}>
                            <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={project.imageUrl} alt="profile" />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.projectName}>
                                {project.projectName}
                            </div>
                            <div className={styles.descriptionText}>
                                {project.description}
                            </div>

                        </div>
                    </div>
                    <div className={styles.posts}>
                        <div className={styles.header}>
                            Posts
                        </div>
                        <ProjectPostList posts={posts} />
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