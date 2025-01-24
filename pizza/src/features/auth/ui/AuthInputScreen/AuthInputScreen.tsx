import { Phone } from './InputChunks/PhoneInput/Phone';
import { Code } from './InputChunks/CodeInput/Code';
import { useAuthFormActions } from '../../lib/hooks';

export const AuthInputScreen = () => {
    const { step } = useAuthFormActions();

    const steps = {
        first: <Phone />,
        second: <Code />
    };
    return (
        <>
            {steps[step]}
        </>
    );
};