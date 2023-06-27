import React, {ChangeEvent, ChangeEventHandler, FC, HTMLInputTypeAttribute} from "react";
import style from "./Input.module.css";

type InputProps = {
    label: string,
    name: string,
    type: HTMLInputTypeAttribute,
    value: string | number,
    onChange: ChangeEventHandler<HTMLInputElement>
}
const Input: FC<InputProps> = props => {

    const InputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event)
    }

    return (
        <label
            className={style.formLabel}
            htmlFor={props.name}>
            {props.label}
            <input
                className={style.formInput}
                name={props.name}
                id={props.name}
                type={props.type}
                placeholder={props.name}
                value={props.value}
                onChange={InputHandler}
            />
        </label>
    );
};

export default Input;