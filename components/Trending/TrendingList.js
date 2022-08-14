import TrendingItem from "./TrendingItem";
import InfiniteScroll from "react-infinite-scroll-component";

function TrendingList({ trendingItems }) {
    return (
        <>
            {/* <InfiniteScroll
                dataLength={trendingItems.length}
                next={fetchMoreTrending}
                hasMore={true}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }> */}
            {
                trendingItems.map((trendingItem) => (
                    <TrendingItem item={trendingItem} />
                ))
            }
            {/* </InfiniteScroll> */}
        </>
    );
}

export default TrendingList;