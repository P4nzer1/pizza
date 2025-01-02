import { HTMLAttributes } from "react";
import classNames from 'classnames';

import Portal from '../Portal/Portal';

import styles from './Modal.module.scss'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
}
const Modal = ( props: ModalProps) => {
    
    const {
        className,
        isOpen,
        children,
        onClose
    } = props
   
    const handleOverlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames(styles.modal, className)} onClick={handleOverlayClick}>
                <div className={classNames(styles.content, className)}  onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    )
};

export default Modal;



