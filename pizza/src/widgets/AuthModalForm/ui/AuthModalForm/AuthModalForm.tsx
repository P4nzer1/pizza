import Modal from "@/shared/ui/Modal";
import Button from "@/shared/ui/Button";
import { AuthForm } from "@/features/auth/ui";

import { useModal } from "../lib/hooks/useModal";


export const AuthModalForm = () => {
    const { isModalOpen, onOpenModal, onCloseModal } = useModal();
    return (
        <>
            <Button text="Авторизация" onClick={onOpenModal} />
            <Modal isOpen={isModalOpen} onClose={onCloseModal}>
                <AuthForm />
            </Modal>
        </>
    );
};