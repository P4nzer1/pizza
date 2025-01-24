import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";
import { AuthForm } from "@/features/auth/ui";
import { useModal } from "../../lib/hooks";

export const AuthModalForm = () => {
    const { setModal, onOpenModal, onCloseModal } = useModal();
    return (
        <>
            <Button text="Авторизация" onClick={onOpenModal} />
            <Modal isOpen={setModal} onClose={onCloseModal}>
                <AuthForm />
            </Modal>
        </>
    );
};