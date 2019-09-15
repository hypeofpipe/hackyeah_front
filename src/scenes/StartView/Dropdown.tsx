import React from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { Form, Col } from 'react-bootstrap';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledGroup = styled(Form.Group)`
  width: 100%;
`;
const StyledLabel = styled(Form.Label)`
  width: 100%;
`;
const StyledControl = styled(Form.Control)`
  width: 100%;
`;

interface Props extends FieldRenderProps<string, HTMLSelectElement> {
  elements: any;
}

export const Dropdown = ({ elements, input }: Props) => (
  <Wrapper>
    <StyledGroup as={Col}>
      <StyledLabel>Choose type of trash</StyledLabel>
      <StyledControl {...input} as="select">
        {Object.keys(elements).map((element: any) => {
          return <option>{elements[element]}</option>;
        })}
      </StyledControl>
    </StyledGroup>
  </Wrapper>
);
