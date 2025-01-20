import { useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';

export const useSendCode = () => {
    const isSendCode  = useSelector((state: RootState) => state.sendCode.isSendCode);
    return { isSendCode };
};
