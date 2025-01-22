import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { CODE_NUMBER_MAX_LENGTH, CODE_NUMBER_PATTERN } from '@/shared/utils/constants';

interface CodeProps {
    code: string;
    onChangeCode: (value: string) => void;
}

export const Code = ( props: CodeProps ) => {
    const { code, onChangeCode } = props
    return (
        <>
            <Text align="left" className={'margin-bottom-s'}>
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
    );
};
