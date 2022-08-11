import Projects from "../components/Projects";
import Notification from "../components/Notification";
import TopDay from "../components/TopDay";
import styles from "../styles/Dashboard.module.css";
import NavBar from "../components/NavBar";

function Dashboard({ projects, notifications, topDay }) {
    return (
        <div className={styles.dashboardContainer}>
            <NavBar />
            <div className={styles.mainContent}>
                <div className={styles.mainSection}>

                </div>
                <div className={styles.sideSection}>
                    <div className={styles.upcomingNotifications}>
                        {/*                         {
                            notifications.map((notification) => {
                                <Notification data={notification.data} />
                            })
                        } */}
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.topDay}>
                        {/*                         {
                            topDay.map((top) => {
                                <TopDay data={top.data} />
                            })
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;