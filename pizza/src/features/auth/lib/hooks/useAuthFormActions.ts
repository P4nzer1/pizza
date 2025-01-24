import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';
import { isValidCode, isValidPhone, formatCode, formatPhone } from '@/shared/utils/helpers';
import { setPhone, setCode, sendCodeRequest, loginRequest, setStep } from '../../model/slices/authFormSlice';

export const useAuthFormActions = () => {
    const dispatch = useDispatch();
    const { phone, code, isSendCode, step} = useSelector((state: RootState) => state.authForm)

    const onChangePhone = (value: string) => {
        dispatch(setPhone(formatPhone(value)));
    };

    const onChangeCode = (value: string) => {
        dispatch(setCode(formatCode(value)));
    };

    const onSendCode = () => {
        if (isValidPhone(phone)) {
            dispatch(sendCodeRequest(phone));
            dispatch(setStep('code'));
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
        phone,
        code,
        step,
        onChangePhone,
        onChangeCode,
        onSendCode,
        onLogin,
        isButtonDisabled
    };
};
