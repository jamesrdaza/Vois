function Collection({ data }) {
    return (
        <div>
            {data.name}
        </div>
    );
}

Collection.defaultProps = {
    data: {
        name: "TEST"
    }
}


export default Collection;