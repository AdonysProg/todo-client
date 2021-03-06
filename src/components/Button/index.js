import React from 'react';
import { PrimaryButton, ButtonWrapper } from './Button.component';

const Button = ({ children, clickAction }) => {
  return (
    <ButtonWrapper>
      <PrimaryButton onClick={clickAction} className="btn-create-task">
        {children}
      </PrimaryButton>
    </ButtonWrapper>
  );
};

export default Button;
