import { Text } from '@/shared/ui/Text';
import { AuthInputScreen } from '../AuthInputScreen/AuthInputScreen';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {

  return (
    <div className={styles.container}>
      <Text as="h3" size="xl" align="left" className={styles['margin-bottom-s']}>
        Вход на сайт
      </Text>
      <Text align="left" size="m" className={styles['margin-bottom-l']} color="grey" bold>
        Подарим подарок на день рождения,
        <br />
        сохраним адрес доставки и расскажем об<br /> акциях
      </Text>
      <AuthInputScreen />
      <Text className={styles['margin-top-s']}>
        Продолжая, вы соглашаетесь со сбором и обработкой персональных данных
        и пользовательским соглашением
      </Text>
    </div>
  );
};