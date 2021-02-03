import React from 'react';
import { deleteNoteById } from '../../api';
import {
  CardContainer,
  CardDescription,
  CardFooter,
  CardTitle,
  Wrapper,
  DeleteBtn,
} from './Card.component';

const Card = ({ title, description, timestamp, id, onDelete }) => {
  const deleteNote = async () => {
    await deleteNoteById(id).then(() => {
      onDelete();
    });
  };
  return (
    <Wrapper>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <p>{timestamp}</p>
          <DeleteBtn
            onClick={(e) => deleteNote(id)}
            className="btn-delete-task"
          />
        </CardFooter>
      </CardContainer>
    </Wrapper>
  );
};

export default Card;
