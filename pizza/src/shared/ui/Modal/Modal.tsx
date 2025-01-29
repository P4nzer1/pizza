import classNames from "classnames";

import { Portal } from "../Portal";
import { ModalProps } from "./types";
import styles from "./Modal.module.scss";

export const Modal = (props: ModalProps) => {
    const {
        className,
        isOpen,
        height = "400px",
        width = "409px",
        align = "center",
        color = "white",
        children,
        onClose,
        ...rest
    } = props;

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal element={document.getElementById("app") ?? document.body}>
            <div
                className={classNames(styles.modal, className, styles[align])}
                onClick={handleOverlayClick}
                {...rest}
            >
                <div
                    className={classNames(styles.content, styles[color])}
                    style={{ width, height }}
                    onClick={handleContentClick}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
