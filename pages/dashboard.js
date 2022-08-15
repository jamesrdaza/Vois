import styles from "../styles/Dashboard.module.scss";
import NavBar from "../components/NavBar";
import TrendingList from "../components/Trending/TrendingList";
import DashNotificationList from "../components/DashNotifications/DashNotificationList";
import { useSession } from "next-auth/react";


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

const notifications = [
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" },
    { title: "TEST TITLE" }
]

const HotProjects = [
    { projectName: "TEST NAME" }
]

function Dashboard({ posts, topDay }) {
    const { data: session, status } = useSession()
    return (
        <div className={styles.dashboardContainer}>
            <NavBar address={status == "authenticated" ? session.userData.address : ""} />
            <div className={styles.mainContent} >
                <div className={styles.mainSection}>
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
                        <DashNotificationList notifications={notifications} />
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