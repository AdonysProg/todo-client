import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalTitle,
  Wrapper,
  ModalBtn,
  ModalBtnClose,
  ModalInput,
  ModalFooter,
  Overlay,
  ModalDescriptionInput,
} from './Modal.component';
import { AiOutlineClose } from 'react-icons/ai';
import { postNote } from '../../api';

const Modal = ({ show, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!show) return null;

  const submitNote = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    postNote(data).then((res) => {
      setDescription('');
      setTitle('');
      onCreate();
      onClose();
    });
  };

  return createPortal(
    <>
      <Overlay />
      <Wrapper>
        <form onSubmit={(e) => submitNote(e)}>
          <ModalBtnClose onClick={onClose} type="button">
            <AiOutlineClose />
          </ModalBtnClose>
          <ModalTitle>Create a note</ModalTitle>
          <ModalInput
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="input-title"
          />
          <ModalDescriptionInput
            placeholder="Description"
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-description"
          />
          <ModalFooter>
            <ModalBtn
              color="#106B0D"
              type="submit"
              className="btn-confirm-create-task"
            >
              Create
            </ModalBtn>
            <ModalBtn
              color="#690602"
              onClick={onClose}
              type="button"
              className="cancel-task"
            >
              Cancel
            </ModalBtn>
          </ModalFooter>
        </form>
      </Wrapper>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
