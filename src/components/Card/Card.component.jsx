import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

export const Wrapper = styled.div``;
export const CardContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 2rem;
  background: #fff;
  width: 340px;
  border-radius: 0.77rem;
  margin: 10px;
`;
export const CardTitle = styled.h2``;
export const CardDescription = styled.h5``;

export const CheckLabel = styled.label`
  display: inline;
  padding: 0;
`;
export const CheckCompleted = styled.input`
  width: auto;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #c3c3c3;
`;

export const DeleteBtn = styled(BsTrash)`
  margin-top: 10px;
  cursor: pointer;
  font-size: 20px;
  transition: 0.4s ease all;
  &:hover {
    color: red;
  }
`;
