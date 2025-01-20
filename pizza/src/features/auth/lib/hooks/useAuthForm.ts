import { useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';

export const useAuthForm = () => {
    const  {phone, code}  = useSelector((state: RootState) => state.authForm);

    return { phone, code};
};
