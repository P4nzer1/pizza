import { ReactNode } from 'react';

import classNames from 'classnames';
import Portal from '../Portal/Portal';
import styles from './Modal.module.scss'
interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ className, isOpen, children, onClose }: ModalProps) => {
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
                <div onClick={handleContentClick}>
                    {children}
                </div>
            </div>

        </Portal>
    )

};

export default Modal;



