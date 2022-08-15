import styles from "../../styles/TrendingStyles/TrendingItem.module.scss"

function TrendingItem({ item }) {
    return (
        <div className={styles.trendingItem}>
            {item.name}
        </div>
    );
}

export default TrendingItem;