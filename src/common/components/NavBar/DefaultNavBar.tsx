import React, {FC} from "react";
import styles from "@/common/components/NavBar/DefaultNavBar.module.css";

type DefaultNavBarProps = {

}

const DefaultNavBar: FC<DefaultNavBarProps> = () => {
    return(
        <>
            <div className={styles.navContent}>

            </div>
        </>
    )
}

export default DefaultNavBar;