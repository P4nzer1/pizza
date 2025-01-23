import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { RootState } from '@/app/config/store';
import { isValidCode, isValidPhone, formatCode, formatPhone } from '@/shared/utils/helpers';
import { setPhone, setCode, sendCodeRequest, loginRequest } from '../../model/slices/authFormSlice';
import { variantStep } from '../types';

export const useAuthFormActions = () => {
    const dispatch = useDispatch();
    const isSendCode = useSelector((state: RootState) => state.authForm.isSendCode);
    const { phone, code } = useSelector((state: RootState) => state.authForm)
    const [step, setStep] = useState<variantStep>('first');

    const onChangePhone = (value: string) => {
        dispatch(setPhone(formatPhone(value)));
    };

    const onChangeCode = (value: string) => {
        dispatch(setCode(formatCode(value)));
    };

    const onSendCode = () => {
        if (isValidPhone(phone)) {
            dispatch(sendCodeRequest(phone));
            setStep('second');
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
