import { PHONE_NUMBER_MAX_LENGTH, PHONE_NUMBER_PATTERN } from '@/shared/utils/constants';
import { useAuthFormActions } from '@/features/auth/lib/hooks';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import styles from './Phone.module.scss';

export const Phone = () => {
    const { phone, onChangePhone, onSendCode, isButtonDisabled } = useAuthFormActions();

    return (
        <>
            <Text align="left" className={styles['margin-bottom-s']} color="grey">
                Номер телефона
            </Text>
            <Input
                className={styles['margin-bottom-m']}
                type="tel"
                placeholder="+7 999 999-99-99"
                value={phone}
                onChange={onChangePhone}
                maxLength={PHONE_NUMBER_MAX_LENGTH}
                pattern={PHONE_NUMBER_PATTERN}
                required
            />
            <Button
                text="Выслать код"
                onClick={onSendCode}
                className={styles['margin-top-xl']}
                disabled={isButtonDisabled}
            />
        </>
    );
};
