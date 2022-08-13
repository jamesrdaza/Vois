import styles from "../styles/Dashboard.module.css";
import NavBar from "../components/NavBar";

function Dashboard({ posts, notifications, topDay }) {
    return (
        <div className={styles.dashboardContainer}>
            <NavBar />
            <div className={styles.mainContent}>
                <div className={styles.mainSection}>
                    <div className={styles.header}>
                        Trending Posts
                    </div>

                </div>
                <div className={styles.sideSection}>
                    <div className={styles.upcomingNotifications}>
                        <div className={styles.header}>
                            Notifications
                        </div>
                        {/*                         {
                            notifications.map((notification) => {
                                <Notification data={notification.data} />
                            })
                        } */}
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.topDay}>
                        <div className={styles.header}>
                            Hot Projects
                        </div>
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