import React, {FC} from "react";

type ErrorModalProps = {
    message: string
}

const ErrorModal: FC<ErrorModalProps> = props => {
    return (
        <p>{props.message}</p>
    )
}

export default ErrorModal;