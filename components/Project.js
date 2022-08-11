import styles from "../styles/Projects.module.css"

function Project({ project }) {
    return (
        <div className="pageContainer">
            <div className={styles.banner}>

            </div>
            {/*             <div className={pfpContiner}>

            </div> */}
            <div className={styles.address}>
                {project.contractAddress}
            </div>
            {/*             <div className={posts}>

            </div>
            <div className={mainSection}>

            </div> */}
        </div>
    );
}

export default Project;