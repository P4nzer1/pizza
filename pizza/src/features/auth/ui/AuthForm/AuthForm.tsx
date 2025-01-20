import Button from '@shared/ui/Button';
import Modal from '@/shared/ui/Modal';
import Text from '@/shared/ui/Text';

import { 
  useAuthForm,
  useSendCode,
  useModal,
  useAuthFormActions
} from '../../lib/hooks';
import styles from './AuthForm.module.scss';
import AuthInputScreen from '../AuthInputScreen/AuthInputScreen';

const AuthForm = () => {
  const { phone, code } = useAuthForm();
  const { isSendCode } = useSendCode();
  const { isModalOpen, onOpenModal, onCloseModal } = useModal();
  const {
    onChangePhone,
    onChangeCode,
    onSendCode,
    onLogin,
    isButtonDisabled
  } = useAuthFormActions(phone, code)

  return (
    <>
      <Button text="Авторизация" onClick={onOpenModal} />
      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <div className={styles.container}>
          <Text as="h3" size="xl" align="left" className={styles['margin-bottom-s']}>
            Вход на сайт
          </Text>
          <Text align="left" size="m" className={styles['margin-bottom-l']} color="grey" bold>
            Подарим подарок на день рождения,
            <br />
            сохраним адрес доставки и расскажем об<br /> акциях
          </Text>

          <AuthInputScreen
            isSendCode={isSendCode}
            phone={phone}
            code={code}
            onChangePhone={onChangePhone}
            onChangeCode={onChangeCode}
          />

          <Button
            text={isSendCode ? 'Войти' : 'Выслать код'}
            onClick={isSendCode ? onLogin : onSendCode}
            className={styles['margin-top-xl']}
            disabled={isButtonDisabled}
          />

          <Text className={styles['margin-top-s']}>
            Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
            и пользовательским соглашением
          </Text>
        </div>
      </Modal>
    </>
  );
};

export default AuthForm;



