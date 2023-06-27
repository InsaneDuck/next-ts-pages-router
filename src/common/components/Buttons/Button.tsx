import React, {FC, MouseEventHandler, ReactNode} from "react";
import style from "@/common/components/Buttons/Button.module.css"

type ButtonProps = {
    className?: string,
    type?: "button" | "submit" | "reset",
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = props => {
    return (
        <button
            className={`${style.buttonRounded} ${props.className}`}
            type={props.type}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;