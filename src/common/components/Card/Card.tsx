import React, {FC, MouseEventHandler, ReactNode} from "react";
import style from "./Card.module.css"

type CardProps = {
    children: ReactNode,
    className?: string,
    id?: any,
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Card: FC<CardProps> = props => {

    return (
        <div
            className={props.className ? `${style.card} ${props.className}` : `${style.card}`}
            onClick={props.onClick}
            key={props.id}
        >
            {props.children}
        </div>
    )
}

export default Card;