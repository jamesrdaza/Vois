import styles from "../styles/Dashboard.module.css";
import NavBar from "../components/NavBar";
import TrendingList from "../components/Trending/TrendingList";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const trendingTest = [
    { name: "TEST1" },
    { name: "TEST2" },
    { name: "TEST3" },
    { name: "TEST1" },
    { name: "TEST2" },
    { name: "TEST3" },
    { name: "TEST1" },
    { name: "TEST2" },
    { name: "TEST3" },
    { name: "TEST1" },
    { name: "TEST2" },
    { name: "TEST3" },
    { name: "TEST1" },
    { name: "TEST2" },
    { name: "TEST3" },
]

function Dashboard({ posts, notifications, topDay }) {
    const { data: session, status } = useSession()
    /*     useEffect(() => {
            console.log(status)
    
        }) */
    return (
        <div className={styles.dashboardContainer}>
            <NavBar address={status == "authenticated" ? session.userData.address : ""} />
            <div className={styles.mainContent} >
                <div style={{ overflowX: "hidden", overflowY: "auto" }} className={styles.mainSection}>
                    <div className={styles.header}>
                        Trending Posts
                    </div>
                    <TrendingList trendingItems={trendingTest} />
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