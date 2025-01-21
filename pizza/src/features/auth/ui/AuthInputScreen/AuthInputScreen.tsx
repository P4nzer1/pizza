import Input from '@/shared/ui/Input';
import Text from '@/shared/ui/Text';
import {
    PHONE_NUMBER_PATTERN,
    PHONE_NUMBER_MAX_LENGTH,
    CODE_NUMBER_MAX_LENGTH,
    CODE_NUMBER_PATTERN
} from '@/shared/utils/constants';
import styles from '../AuthForm/AuthForm.module.scss'

interface AuthInputScreenProps {
    isSendCode: boolean;
    phone: string;
    code: string;
    onChangePhone: (value: string) => void;
    onChangeCode: (value: string) => void;
}

export const AuthInputScreen = (props: AuthInputScreenProps) => {

    const { isSendCode,
        phone,
        code,
        onChangePhone,
        onChangeCode
    } = props
    return (
        <div>
            {!isSendCode ? (
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
            ) : (
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
        </div>
    );
};