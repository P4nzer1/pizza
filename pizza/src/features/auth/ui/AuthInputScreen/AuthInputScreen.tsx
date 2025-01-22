import { Phone } from './InputChunks/PhoneInput/Phone';
import { Code } from './InputChunks/CodeInput/Code';

interface AuthInputScreenProps {
    isSendCode: boolean;
    phone: string;
    code: string;
    onChangePhone: (value: string) => void;
    onChangeCode: (value: string) => void;
}

export const AuthInputScreen = (props: AuthInputScreenProps) => {

    const { 
        isSendCode,
        phone,
        code,
        onChangePhone,
        onChangeCode
    } = props
    return (
        <div>
            {!isSendCode && <Phone phone={phone} onChangePhone={onChangePhone}/>}
            {isSendCode && <Code code={code} onChangeCode={onChangeCode}/>}
        </div>
    );
};