import { useDispatch } from 'react-redux';

import { isValidCode, isValidPhone, formatCode, formatPhone } from '@/shared/utils/helpers';
import { setPhone, setCode, sendCodeRequest, loginRequest } from '../../model/slices';
import { useSendCode } from './useSendCode';

export const useAuthFormActions = (phone: string, code: string) => {
    const dispatch = useDispatch();
    const { isSendCode } = useSendCode();

    const onChangePhone = (value: string) => {
        dispatch(setPhone(formatPhone(value)));
    };

    const onChangeCode = (value: string) => {
        dispatch(setCode(formatCode(value)));
    };

    const onSendCode = () => {
        if (isValidPhone(phone)) {
            dispatch(sendCodeRequest(phone));
        }
    };

    const onLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidCode(code)) {
            dispatch(loginRequest({ code, phone }));
        }
    };

    const isButtonDisabled = isSendCode
        ? !isValidCode(code)
        : !isValidPhone(phone);

    return {
        onChangePhone,
        onChangeCode,
        onSendCode,
        onLogin,
        isButtonDisabled
    };
};
