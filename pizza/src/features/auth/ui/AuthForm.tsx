import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@shared/ui/Button';
import Input from '@/shared/ui/Input';
import Modal from '@/shared/ui/Modal';
import Text from '@/shared/ui/Text';
import { RootState } from '@/app/config/store';
import { setPhone, setCode, loginRequest, sendCodeRequest } from '../model/slices';
import {
  isValidCode,
  isValidPhone,
  formatCode,
  formatPhone
} from '@/shared/utils/helpers';
import {
  PHONE_NUMBER_PATTERN,
  PHONE_NUMBER_MAX_LENGTH,
  CODE_NUMBER_MAX_LENGTH,
  CODE_NUMBER_PATTERN
} from '@/shared/utils/constants';
import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const dispatch = useDispatch();
  const { isSendCode } = useSelector((state: RootState) => state.sendCode);
  const { phone, code } = useSelector((state: RootState) => state.authForm);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onChangePhone = (value: string) => {
    dispatch(setPhone(formatPhone(value)));
  };

  const onChangeCode = (value: string) => {
    dispatch(setCode(formatCode(value)));
  };

  const onSendCode = () => {
    if (isValidPhone(phone)) {
      dispatch(sendCodeRequest(phone));
    }
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidCode(code))  {
      dispatch(loginRequest({code, phone}));
    }
  }

  const isButtonDisabled = isSendCode
    ? !isValidCode(code)
    : !isValidPhone(phone);

  return (
    <>
      <Button text="Авторизация" onClick={() => setIsOpenModal(true)} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
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



