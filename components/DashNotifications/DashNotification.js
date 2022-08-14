function DashNotification({ notification }) {
    return (
        <div className={styles.notificationContainer}>
            <div className={title}>
                {/* {notification.title} */}
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