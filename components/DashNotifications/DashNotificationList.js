import DashNotification from "./DashNotification";

function DashNotificationList({ notifications }) {
    return (
        <>
            {
                notifications.map((notification) => (
                    <DashNotification notification={notification} />
                ))
            }
        </>
    );
}

export default DashNotificationList;