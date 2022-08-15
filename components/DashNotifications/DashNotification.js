import styles from "../../styles/NotificationStyle/Notification.module.scss"

function DashNotification({ notification }) {
    return (
        <div className={styles.notificationContainer}>
            <div className={styles.DashNotificationtitle}>
                {notification.title}
            </div>
            <div className={styles.type}>
                {/* {notification.type} */}
            </div>
            <div className={styles.info}>
                {/* {notification.info} */}
            </div>
        </div>
    );
}

export default DashNotification;