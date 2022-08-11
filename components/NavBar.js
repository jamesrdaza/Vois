import styles from "../styles/NavBar.module.css"
import Link from "next/dist/client/link";

function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <span style={{ height: "75%", width: "auto", marginLeft: "14%", fontSize: "2rem", lineHeight: "2rem" }}  >Vois</span>
            </div>
            <Link href="/projects">Projects</Link>
            <Link href="/">Watchlists</Link>
            <div className={styles.pfp}>
                <img src="./person.png" alt="person" />
            </div>
        </div>
    );
}

export default NavBar;