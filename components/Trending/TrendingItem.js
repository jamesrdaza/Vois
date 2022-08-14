import styles from "../../styles/TrendingStyles/TrendingItem.module.css"

function TrendingItem({ item }) {
    return (
        <div className={styles.trendingItem}>
            {item.title}
        </div>
    );
}

export default TrendingItem;