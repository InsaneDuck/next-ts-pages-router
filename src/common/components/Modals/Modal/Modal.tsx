import React, {FC,MouseEvent, MouseEventHandler, ReactNode} from "react";
import Card from "../../Card/Card";
import styles from "./Modal.module.css";
import ModalHeader from "@/common/components/Modals/Modal/ModalHeader";

type ModalProps = {
    children: ReactNode,
    title: string,
    onClose: () => void
}

const Modal: FC<ModalProps> = props => {
    if (!props.children) {
        return null;
    }

    const closeModal:MouseEventHandler<HTMLDivElement> = (event:MouseEvent<HTMLDivElement>) => {
        event.target === event.currentTarget? props.onClose():null;
    };

    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <Card className={styles.modal}>
                <ModalHeader title={props.title} onClick={props.onClose}/>
                {props.children}
            </Card>
        </div>
    );
};



export default Modal;