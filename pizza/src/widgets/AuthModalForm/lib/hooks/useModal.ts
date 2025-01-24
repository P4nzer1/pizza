import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';
import { setVisibleModal } from '../../model/slices/modalSlice';

export const useModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.modal);

    const onOpenModal = () => dispatch(setVisibleModal(true));
    const onCloseModal = () => dispatch(setVisibleModal(false));

    return { isOpen, onOpenModal, onCloseModal };
};
