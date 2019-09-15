import React from 'react';
import { Button as BButton } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: gray;
  margin-bottom: 2rem;
`;
const StyledButton = styled(BButton)`
  width: 100%;
`;

export const Button = ({
  children,
  type,
}: {
  children?: React.ReactNode;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => (
  <Wrapper>
    <StyledButton variant="light" type={type}>
      {children}
    </StyledButton>
  </Wrapper>
);
