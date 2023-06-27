import React, {FC, ReactNode} from "react";
import styles from "./CardContainer.module.css"

type CardContainerProps = {
    children: ReactNode,
    className: string
}

const CardContainer: FC<CardContainerProps> = props => {
    return (
        <div className={`${styles.cardContainer} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CardContainer