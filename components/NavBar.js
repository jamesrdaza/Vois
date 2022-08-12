import styles from "../styles/NavBar.module.css"
import Link from "next/dist/client/link";

function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <Link href="/dashboard" style={{ height: "75%", marginLeft: "14%", fontSize: "2rem" }}  >Vois</Link>
            </div>
            <Link href="/projects">Projects</Link>
            <Link href="/">Watchlists</Link>
            <div className={styles.pfp}>
                <div className={styles.imgWrapper}>
                    <img src="./person.png" alt="person" />
                </div>

            </div>
        </div>
    );
}

export default NavBar;