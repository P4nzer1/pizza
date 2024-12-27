import { useDispatch } from 'react-redux';

import AuthModal from '@/features/auth/ui/AuthModal';
import { openAuthModal } from '@/features/auth/model/authSlice';
import Button from '@/shared/ui/Button/Button';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openAuthModal());
  };

  return (
    <div className={styles.content}>
      <Button
        text="Авторизоваться"
        onClick={handleOpenModal}
      />
      <AuthModal />
    </div>
  );
};

export default HomePage;

