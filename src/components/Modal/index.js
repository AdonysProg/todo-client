import React, { useState, useEffect } from 'react';
import {
  ModalTitle,
  Wrapper,
  ModalBtn,
  ModalBtnClose,
  ModalInput,
  ModalFooter,
} from './Modal.component';
import { AiOutlineClose } from 'react-icons/ai';
import { postNote } from '../../api';

const Modal = ({ show }, ref) => {
  const [active, setActive] = useState(show);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitNote = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    postNote(data).then((res) => console.log(res));
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => submitNote(e)}>
        <ModalBtnClose onClick={() => setActive(false)}>
          <AiOutlineClose />
        </ModalBtnClose>
        <ModalTitle>Create a note</ModalTitle>
        <ModalInput
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ModalInput
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ModalFooter>
          <ModalBtn color="#106B0D">Create</ModalBtn>
          <ModalBtn color="#690602">Cancel</ModalBtn>
        </ModalFooter>
      </form>
    </Wrapper>
  );
};

export default Modal;
