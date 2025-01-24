import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';
import { setModalState } from '../../model/slices/modalSlice';

export const useModal = () => {
    const dispatch = useDispatch();
    const setModal = useSelector((state: RootState) => state.modal.isOpen);

    const onOpenModal = () => dispatch(setModalState(true));
    const onCloseModal = () => dispatch(setModalState(false));

    return { setModal, onOpenModal, onCloseModal };
};
