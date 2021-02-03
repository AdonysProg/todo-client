import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 1.3rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.9);
  border: none;
  border-radius: 1.4rem;
  outline: 0;
  cursor: pointer;
  transition: all ease 0.4s;
  background-color: #c40010;
  &:hover {
    background-color: #940c17;
    transform: translateY(5px);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -100px;
`;
