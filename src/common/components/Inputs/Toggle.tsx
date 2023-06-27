import styles from "./Toggle.module.css"
import {ChangeEventHandler, FC} from "react";

type ToggleProps = {
    type?: "round",
    name: string,
    label: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Toggle: FC<ToggleProps> = props => {
    return (
        <label className={``} htmlFor={props.name}>
            {props.label}
            <input
                className={`${styles.hideInput}`}
                name={props.name}
                id={props.name}
                type={`checkbox`}
                value={props.value}
                onChange={props.onChange}
            />
            <div className={`${styles.slider} ${styles.switch}  ${props.type === "round" ? styles.round : ""}`}/>
        </label>
    )
}

export default Toggle