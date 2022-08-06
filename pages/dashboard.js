import Collection from "../components/Collection";
import Notification from "../components/Notification";
import TopDay from "../components/TopDay";
import styles from "../styles/Dashboard.module.css";
import Link from "next/link";

function Dashboard({ collections, notifications, topDay }) {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <img style={{ height: "75%", width: "auto", marginLeft: "14%" }} src="./vercel.svg" alt="vercel" />
                </div>
                <Link href="/">Collections</Link>
                <Link href="/">Watchlists</Link>
                <div className={styles.pfp}>
                    <img src="./person.png" alt="person" />
                </div>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.mainSection}>
                    {
                        collections.map((collection) => {
                            <Collection data={collection.data} />
                        })
                    }
                </div>
                <div className={styles.sideSection}>
                    <div className={styles.upcomingNotifications}>
                        {
                            notifications.map((notification) => {
                                <Notification data={notification.data} />
                            })
                        }
                    </div>
                    <div className={styles.space}></div>
                    <div className={styles.topDay}>
                        {
                            topDay.map((top) => {
                                <TopDay data={top.data} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.defaultProps = {
    collections: [{ name: "TEST" }, { name: "TEST2" }],
    notifications: [{ name: "TEST" }, { name: "TEST2" }],
    topDay: [{ name: "TEST" }, { name: "TEST2" }]
}

export default Dashboard;