import React from 'react';
import { deleteNoteById } from '../../api';
import {
  CardContainer,
  CardDescription,
  CardFooter,
  CardTitle,
  Wrapper,
  CheckCompleted,
  CheckLabel,
  DeleteBtn,
} from './Card.component';

const Card = ({ title, description, finished, timestamp, id }) => {
  const deleteNote = async () => {
    await deleteNoteById(id).then((res) => console.log(res));
  };
  return (
    <Wrapper>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CheckLabel htmlFor="check">
          <CheckCompleted id="check" type="checkbox" checked={finished} />
          Done
        </CheckLabel>
        <CardFooter>
          <p>{timestamp}</p>
          <DeleteBtn onClick={(e) => deleteNote(id)} />
        </CardFooter>
      </CardContainer>
    </Wrapper>
  );
};

export default Card;
