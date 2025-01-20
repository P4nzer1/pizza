import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/config/store';
import { openModal, closeModal } from '../../model/slices';

export const useModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

    const onOpenModal = () => dispatch(openModal());
    const onCloseModal = () => dispatch(closeModal());

    return { isModalOpen, onOpenModal, onCloseModal };
};
