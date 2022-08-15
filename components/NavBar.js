import styles from "../styles/NavBar.module.scss"
import Link from "next/dist/client/link";
import Menu from "./Dropdown/Menu"
import Image from "next/image";

function NavBar({ address }) {
    return (
        <div className={styles.navBar}>
            <div className={styles.navLinks}>
                <div className={styles.logo}>
                    <Link href="/dashboard" style={{ height: "75%", marginLeft: "14%", fontSize: "2rem" }}  >Vois</Link>
                </div>
                <Link href="/projects">Projects</Link>
                <Link href="/">Watchlists</Link>
            </div>

            <div className={styles.rightNav}>
                <p style={{ marginRight: "1%", position: "absolute", marginRight: "7%" }}>{address.length > 0 ? (address.substring(0, 4) + "..." + address.substring(address.length - 4, address.length)) : ""}</p>
                <div className={styles.imgWrapper}>
                    <Image height={50} width={40} src="/person.png" alt="person" />
                </div>
                <Menu />

            </div>

        </div>
    );
}

export default NavBar;