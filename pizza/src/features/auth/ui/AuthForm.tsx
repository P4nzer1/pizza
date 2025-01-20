
import Button from '@shared/ui/Button';
import Input from '@/shared/ui/Input';
import Modal from '@/shared/ui/Modal';
import Text from '@/shared/ui/Text';
import {
  PHONE_NUMBER_PATTERN,
  PHONE_NUMBER_MAX_LENGTH,
  CODE_NUMBER_MAX_LENGTH,
  CODE_NUMBER_PATTERN
} from '@/shared/utils/constants';
import styles from './AuthForm.module.scss';
import { useAuthForm, useSendCode, useModal, useAuthFormActions } from '../lib/hooks';

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
  } = useAuthFormActions(phone,code)
  
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

          {!isSendCode && (
            <>
              <Text align="left" className={styles['margin-bottom-s']} color="grey">
                Номер телефона
              </Text>
              <Input
                type="tel"
                placeholder="+7 999 999-99-99"
                value={phone}
                onChange={onChangePhone}
                required
                maxLength={PHONE_NUMBER_MAX_LENGTH}
                pattern={PHONE_NUMBER_PATTERN}
              />
            </>
          )}

          {isSendCode && (
            <>
              <Text align="left" className={styles['margin-bottom-s']}>
                Код подтверждения
              </Text>
              <Input
                type="text"
                placeholder="Введите код"
                value={code}
                onChange={onChangeCode}
                required
                maxLength={CODE_NUMBER_MAX_LENGTH}
                pattern={CODE_NUMBER_PATTERN}
              />
            </>
          )}

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



