import { Text } from '@/shared/ui/Text';
import { AuthInputScreen } from '../AuthInputScreen/AuthInputScreen';
import { useAuthFormActions } from '../../lib/hooks';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const {
    phone,
    code,
    step,
    onChangePhone,
    onChangeCode,
    onSendCode,
    onLogin,
    isButtonDisabled,
  } = useAuthFormActions()

  return (
    <>
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
          phone={phone}
          code={code}
          onChangePhone={onChangePhone}
          onChangeCode={onChangeCode}
          onSendCode={onSendCode}
          onLogin={onLogin}
          step={step}          
          isButtonDisabled={isButtonDisabled}  
        />

        <Text className={styles['margin-top-s']}>
          Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
          и пользовательским соглашением
        </Text>
      </div>
    </>
  );
};