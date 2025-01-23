import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { PHONE_NUMBER_PATTERN, PHONE_NUMBER_MAX_LENGTH } from '@/shared/utils/constants';
import styles from '../../../AuthForm/AuthForm.module.scss'

interface PhoneProps {
    phone: string;
    onChangePhone: (value: string) => void;
    onSendCode: () => void;
    isButtonDisabled: boolean;
}

export const Phone = (props: PhoneProps) => {
    const { phone, onChangePhone, onSendCode, isButtonDisabled } = props
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
                required
                maxLength={PHONE_NUMBER_MAX_LENGTH}
                pattern={PHONE_NUMBER_PATTERN}
            />
            <Button
                text='Выслать код'
                onClick={onSendCode}
                className={styles['margin-top-xl']}
                disabled={isButtonDisabled}
            />
        </>
    );
};