import Modal from '@/shared/ui/Modal/Modal';
import AuthForm from './AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phone: string, code: string) => void;
}

const AuthModal = ({ isOpen, onClose, onSubmit }: AuthModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AuthForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default AuthModal;
