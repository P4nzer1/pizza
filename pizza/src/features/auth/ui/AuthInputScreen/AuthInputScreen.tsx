import { variantStep } from '../../lib/types';
import { Phone } from './InputChunks/PhoneInput/Phone';
import { Code } from './InputChunks/CodeInput/Code';

interface AuthInputScreenProps {
    phone: string;
    code: string;
    onChangePhone: (value: string) => void;
    onChangeCode: (value: string) => void;
    onLogin: (e: React.FormEvent) => void;
    onSendCode: () => void;
    step: variantStep 
    isButtonDisabled: boolean;
}
export const AuthInputScreen = (props: AuthInputScreenProps) => {

    const { 
        step,
    } = props

    const steps = {
        first: (
            <Phone {...props} />
        ),
        second: (
            <Code {...props} />
        ),
    };
    return (
        <div>
            {steps[step]}
        </div>
    );
};