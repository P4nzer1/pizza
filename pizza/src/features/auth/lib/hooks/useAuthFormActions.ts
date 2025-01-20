import { useDispatch } from 'react-redux';

import { setPhone, setCode, sendCodeRequest, loginRequest } from '../../model/slices';
import { isValidCode, isValidPhone, formatCode, formatPhone } from '@/shared/utils/helpers';

export const useAuthFormActions = (phone: string, code: string) => {
    const dispatch = useDispatch();

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

    const isButtonDisabled = phone
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
