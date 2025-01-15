import { useState } from 'react';

import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Modal from '@/shared/ui/Modal/Modal';
import Text from '@/shared/ui/Text/Text';

import styles from './AuthForm.module.scss';
import Link from '@/shared/ui/Link/Link';

interface AuthFormProps {
  onSubmit: (phone: string, code: string) => void;
}

const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isValidPhone = (value: string) =>
    /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/.test(value);

  const isValidCode = (value: string) =>
    /^\d{4}$/.test(value);

  const formatCode = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const trimmed = digits.slice(0, 4);
    return trimmed
  }

  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length === 0) {
      return '';
    }
    if (!digits.startsWith('7')) {
      digits = '7' + digits;
    }
    if (digits.length > 11) {
      digits = digits.slice(0, 11);
    }
    let formatted = '+7';
    if (digits.length > 1) {
      formatted += ' ' + digits.slice(1, 4);
    }
    if (digits.length > 4) {
      formatted += ' ' + digits.slice(4, 7);
    }
    if (digits.length > 7) {
      formatted += '-' + digits.slice(7, 9);
    }
    if (digits.length > 9) {
      formatted += '-' + digits.slice(9, 11);
    }
    return formatted;
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(formatCode(e.target.value));
  };

  const onSendCode = () => {
    setIsCodeSent(true);
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(phone, code);
  };

  const isButtonDisabled = !isCodeSent
    ? !isValidPhone(phone)
    : !isValidCode(code);

  return (
    <>
      <Button text="Авторизация" onClick={() => setIsOpenModal(true)} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className={styles.container}>
          <Text as="h3" size="xl" align="left" className={styles['margin-bottom-s']}>
            Вход на сайт
          </Text>
          <Text align="left" size="m" className={styles['margin-bottom-m']} color="grey" bold>
            Подарим подарок на день рождения,
            <br />
            сохраним адрес доставки и расскажем об<br /> акциях
          </Text>

          {!isCodeSent && (
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
                maxLength={16}
                pattern="^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$"
              />
            </>
          )}

          {isCodeSent && (
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
                maxLength={4}
                pattern="^\d{4}$"
              />
            </>
          )}

          <Button
            text={isCodeSent ? 'Войти' : 'Выслать код'}
            onClick={isCodeSent ? onLogin : onSendCode}
            className={styles['margin-top-m']}
            disabled={isButtonDisabled}
          />

          <Text className={styles['margin-top-s']}>
            Продолжая, вы соглашаетесь
            <Link>со сбором и обработкой персональных данных
              и пользовательским соглашением
            </Link>
          </Text>
        </div>
      </Modal>
    </>
  );
};

export default AuthForm;



