import { useState } from 'react';

import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Text from '@/shared/ui/Text/Text';

import styles from './AuthForm.module.scss';

interface AuthFormProps {
  onSubmit: (phone: string, code: string) => void;
}
const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('')
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCodeSent(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(phone, code);
  };

  return (
    <form
      className={styles.authForm}
      onSubmit={isCodeSent ? handleLogin : handlePhoneSubmit}
    >
      <Text as="h2" size="l" style="primary" align="center" bold>
        Авторизация
      </Text>

      <Input
        type="name"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
        disabled={isCodeSent} 
      />

      <Input
        type="tel"
        placeholder="Введите номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={styles.input}
        required
        disabled={isCodeSent} 
      />

      {isCodeSent && (
        <Input
          type="text"
          placeholder="Введите код из SMS"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.input}
          required
        />
      )}

      <Button
        text={isCodeSent ? 'Войти' : 'Отправить код'}
        className={styles.button}
        type="submit"
      />
    </form>
  );
};

export default AuthForm;
