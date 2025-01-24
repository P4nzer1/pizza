import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';
import { setModalState } from '../../model/slices/modalSlice';

export const useModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.modal);

    const onOpenModal = () => dispatch(setModalState(true));
    const onCloseModal = () => dispatch(setModalState(false));

    return { isOpen, onOpenModal, onCloseModal };
};
