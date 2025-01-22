import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { PHONE_NUMBER_PATTERN, PHONE_NUMBER_MAX_LENGTH } from '@/shared/utils/constants';

interface PhoneProps {
    phone: string;
    onChangePhone: (value: string) => void;
}

export const Phone = (props: PhoneProps) => {
    const { phone, onChangePhone } = props
    return (
        <>
            <Text align="left" className={'margin-bottom-s'} color="grey">
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
    );
};
