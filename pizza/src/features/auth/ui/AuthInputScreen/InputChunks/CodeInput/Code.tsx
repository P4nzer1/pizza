import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { CODE_NUMBER_MAX_LENGTH, CODE_NUMBER_PATTERN } from '@/shared/utils/constants';
import styles from '../../../AuthForm/AuthForm.module.scss'


interface CodeProps {
    code: string;
    onChangeCode: (value: string) => void;
    onLogin: (e: React.FormEvent) => void;
    isButtonDisabled: boolean;
}

export const Code = (props: CodeProps) => {
    const {
        code,
        onChangeCode,
        onLogin,
        isButtonDisabled
    } = props
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
                required
                maxLength={CODE_NUMBER_MAX_LENGTH}
                pattern={CODE_NUMBER_PATTERN}
            />
            <Button
                text='Войти'
                onClick={onLogin}
                className={styles['margin-top-xl']}
                disabled={isButtonDisabled}
            />
        </>
    );
};
