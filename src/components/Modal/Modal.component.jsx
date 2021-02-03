import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-flow: column;
  padding: 1rem;
  width: 190px;
  background-color: #eee;
  text-align: center;
  transition: all ease-in 0.4s;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;
`;
export const ModalTitle = styled.h2``;
export const ModalInput = styled.input`
  padding: 0.4rem;
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  border-radius: 5px;
  outline: 0;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const ModalBtnClose = styled.button`
  width: 35px;
  background-color: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
`;
export const ModalBtn = styled.button`
  padding: 0.7rem;
  color: #fff;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ color }) => (color ? `${color}` : '#fff')};
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Overlay = styled.div`
  z-index: 10;
  transition: all ease 0.9s;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
