import { CODE_NUMBER_MAX_LENGTH, CODE_NUMBER_PATTERN } from '@/shared/utils/constants'
import { useAuthFormActions } from '@/features/auth/lib/hooks';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import styles from '../../../AuthForm/AuthForm.module.scss';

export const Code = () => {
    const { code, onChangeCode, onLogin, isButtonDisabled } = useAuthFormActions();

    return (
        <>
            <Text align="left" className={styles['margin-bottom-s']} color="grey">
                Код подтверждения
            </Text>
            <Input
                className={styles['margin-bottom-m']}
                type="text"
                placeholder="Введите код"
                value={code}
                onChange={onChangeCode}
                maxLength={CODE_NUMBER_MAX_LENGTH}
                pattern={CODE_NUMBER_PATTERN}
                required
            />
            <Button
                text="Войти"
                onClick={onLogin}
                className={styles['margin-top-xl']}
                disabled={isButtonDisabled}
            />
        </>
    );
};
