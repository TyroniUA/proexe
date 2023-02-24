import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/store/modalSlice';
import { RootState } from '@/store/store';
import { deleteUser } from "@/store/userSlice";
import {
  StyledModalBackground, StyledModal, Flex, StyledCancelButton,
  StyledButton, 
} from '@/constants/constants';

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const user = useSelector((state: RootState) => state.modal.user);
  const handleDelete = () => {
    dispatch(deleteUser(user.id))
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <StyledModalBackground>
          <StyledModal>
            <h2>
              DELETE
            </h2>
            <p>Are you sure you want to delete this user: {user?.name} </p>
              <Flex>
              < StyledCancelButton onClick={handleClose} > Cancel </StyledCancelButton>
              < StyledButton onClick={handleDelete} > Delete </StyledButton>
              </Flex>
          </StyledModal>
        </StyledModalBackground>
      )}
    </>
  );
};

export default Modal;