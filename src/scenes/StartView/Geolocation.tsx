import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const Wrapper = styled.div`
  background: black;
  margin-bottom: 2rem;
`;

const StyledInput = styled(Form.Control)`
  font-size: 3vw;
`;

export const Geolocation = () => (
  <Wrapper>
    <StyledInput type="text" placeholder="Provide your geolocation..." />
  </Wrapper>
);
