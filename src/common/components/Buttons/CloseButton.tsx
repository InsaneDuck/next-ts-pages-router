import React, {MouseEventHandler} from "react";
import styles from "@/common/components/Buttons/CloseButton.module.css";

type CloseButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const CloseButton:React.FC<CloseButtonProps> = props => {
    return (
        <button
            className={styles.closeButton}
            onClick={props.onClick}
            aria-label={"Close"}>
            <svg
                viewBox="0 0 12 12"
                width="12"
                height="12"
                fill="currentColor">
                <path
                    d="M 1 1 L 11 11 M 11 1 L 1 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"/>
            </svg>
        </button>
    )
}

export default CloseButton;