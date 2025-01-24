import { Text } from '@/shared/ui/Text';
import { Link } from '@/shared/ui/Link';
import { AuthInputScreen } from '../AuthInputScreen/AuthInputScreen';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {

  return (
    <div className={styles.container}>
      <Text as="h3" size="xl" align="left" className={styles['margin-bottom-s']}>
        Вход на сайт
      </Text>
      <Text align="left" size="m" className={styles['margin-bottom-l']} color="grey" bold='500'>
        Подарим подарок на день рождения,
        <Text as='span' className={styles['br']}/>
        сохраним адрес доставки и расскажем об
        <Text as='span' className={styles['br']}/>
        акциях
      </Text>
      <AuthInputScreen />
      <Text className={styles['margin-top-s']}>
        Продолжая, вы соглашаетесь со
        <Link> сбором и обработкой персональных данных
          и пользовательским соглашением
        </Link>
      </Text>
    </div>
  );
};