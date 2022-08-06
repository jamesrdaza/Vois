function Notification({ data }) {
    return (
        <div>
            {data.name}
        </div>
    );
}

Notification.defaultProps = {
    data: {
        name: "TEST"
    }
}


export default Notification;