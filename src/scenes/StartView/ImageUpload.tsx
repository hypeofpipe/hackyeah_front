import React, { InputHTMLAttributes } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const EmojiP = styled.p`
  font-size: 14vw;
  margin: 0;
`;
const StyledButton = styled(Button)`
  width: 100%;
  background-color: transparent;
`;

export const ImageUpload = () => {
  let input: React.RefObject<HTMLInputElement> = React.createRef();
  const handleClick = (e_: React.MouseEvent<{}>) => {
    input && input.current && input.current.click();
  };

  return (
    <Wrapper>
      <StyledButton onClick={handleClick} variant="dark">
        <input type="file" hidden ref={input} />
        <EmojiP>📷</EmojiP>
      </StyledButton>
    </Wrapper>
  );
};
