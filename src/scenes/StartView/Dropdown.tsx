import React from 'react';
import styled from 'styled-components';
import { Dropdown as BDropdown } from 'react-bootstrap';

const Wrapper = styled.div`
  background: gray;
  margin-bottom: 2rem;
`;

const StyledDropdown = styled(BDropdown)`
  width: 100%;
`;
const StyledToggle = styled(BDropdown.Toggle)`
  width: 100%;
`;
const StyledMenu = styled(BDropdown.Menu)`
  width: 100%;
`;
const StyledItem = styled(BDropdown.Item)`
  width: 100%;
`;

export const Dropdown = () => (
  <Wrapper>
    <StyledDropdown>
      <StyledToggle variant="success" id="dropdown-basic">
        Dropdown Button
      </StyledToggle>

      <StyledMenu>
        <StyledItem href="#/action-1">Action</StyledItem>
        <StyledItem href="#/action-2">Another action</StyledItem>
        <StyledItem href="#/action-3">Something else</StyledItem>
      </StyledMenu>
    </StyledDropdown>
  </Wrapper>
);
