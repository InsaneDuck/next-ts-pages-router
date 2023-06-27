import headerStyles from "@/common/components/Modals/Modal/ModalHeader.module.css";
import CloseButton from "@/common/components/Buttons/CloseButton";
import React, {FC, MouseEventHandler} from "react";

type ModalHeaderProps = {
    title: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ModalHeader: FC<ModalHeaderProps> = props => {
    return (
        <div className={headerStyles.container}>
            <span className={`${headerStyles.textCenter}`}>
                <span className={headerStyles.pill}>{props.title}</span>
            </span>
            <CloseButton onClick={props.onClick}/>
        </div>
    );
};

export default ModalHeader;