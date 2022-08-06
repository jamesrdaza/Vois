function TopDay({ data }) {
    return (
        <div>
            {data.name}
        </div>
    );
}

TopDay.defaultProps = {
    data: {
        name: "TEST"
    }
}

export default TopDay;