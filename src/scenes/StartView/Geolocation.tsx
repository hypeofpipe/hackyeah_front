import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import Form from 'react-bootstrap/Form';

const Wrapper = styled.div`
  background: black;
  margin-bottom: 2rem;
`;

const StyledInput = styled(Form.Control)`
  font-size: 3vw;
`;

export const Geolocation = (
  props: FieldRenderProps<string, HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>,
) => (
  <Wrapper>
    <StyledInput
      {...props.input}
      {...props}
      type="text"
      placeholder="Provide your geolocation..."
    />
  </Wrapper>
);
