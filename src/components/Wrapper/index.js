import React from 'react';
import { Container } from './Wrapper.component';

const Wrapper = (props) => {
  return <Container>{props.children}</Container>;
};

export default Wrapper;
