import { AiOutlineDownSquare } from "react-icons/ai"
import styles from "../../styles/DropdownStyles/Dropdown.module.css"
import Link from "next/dist/client/link";
function Menu() {
    return (
        <div className={styles.wrapper}>
            <AiOutlineDownSquare className={styles.icon} size={20} tabIndex="1" />
            <div className={styles.menuContainer} tabIndex="1" >
                <Link className={styles.option} href="/">Profile</Link>
                <Link className={styles.option} href="/">Settings</Link>
                <Link className={styles.option} href="/">Sign In/Out</Link>
                {/*  <div className={styles.option}>

                </div>
                <div className={styles.option}>

                </div>
                <div className={styles.option}>

                </div>
                <div className={styles.option}> */}

                {/* </div> */}
            </div>
        </div>
    );
}

export default Menu;