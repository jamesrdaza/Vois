function HotProject({ hotProject }) {
    return (
        <div className={styles.hotProjectContainer}>
            <div className={styles.image}>
                {/* {hotProject.image} */}
            </div>
            <div className={styles.projectName}>
                {/* {hotProject.projectName} */}
            </div>
            <div className={styles.likes}>
                {/* {hotProject.likes} */}
            </div>
            <div className={styles.dislikes}>
                {/* {hotProject.dislikes} */}
            </div>
        </div>
    );
}

export default HotProject;