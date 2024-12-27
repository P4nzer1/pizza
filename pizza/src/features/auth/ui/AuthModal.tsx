import { useDispatch, useSelector } from 'react-redux';
import Modal from '@/shared/ui/Modal/Modal';
import AuthForm from './AuthForm';
import { RootState } from '@/app/store/store';
import { closeAuthModal, verifyCodeRequest } from '@/features/auth/model/authSlice';

const AuthModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.auth.isAuthModalOpen);

  const handleCloseModal = () => {
    dispatch(closeAuthModal());
  };

  const handleSubmit = (phone: string, code: string) => {
    dispatch(verifyCodeRequest({ phone, code }));
    handleCloseModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <AuthForm onSubmit={handleSubmit} />
    </Modal>
  );
};

export default AuthModal;


