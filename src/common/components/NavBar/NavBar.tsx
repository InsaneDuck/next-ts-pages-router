import React, {FC, ReactNode} from "react";
import styles from "./NavBar.module.css"

export type NavBarProps = {
    title: string,
    url: string,
    children: ReactNode
}

const NavBar: FC<NavBarProps> = props => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                {props.children}
            </div>
        </nav>
    )
}


export default NavBar;