import React, {FC, ReactNode} from "react";
import styles from "./NavBar.module.css"
import DefaultNavBar from "@/common/components/NavBar/DefaultNavBar";

export type NavBarProps = {
    title?: string,
    url?: string,
    children?: ReactNode
}

const NavBar: FC<NavBarProps> = props => {
    return (
        <>
            <nav className={styles.navbar}>
                {props.children ? props.children : <DefaultNavBar/>}
            </nav>
            <div className={styles.fixNavContent}/>
        </>
    )
}


export default NavBar;