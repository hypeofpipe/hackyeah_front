import React, { InputHTMLAttributes } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Wrapper = styled.div`
  background: gray;
  margin-bottom: 2rem;
`;
const EmojiP = styled.p`
  font-size: 14vw;
  margin: 0;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;

export const ImageUpload = (
  props: FieldRenderProps<string, HTMLInputElement>,
) => {
  let input: React.RefObject<HTMLInputElement> = React.createRef();
  const handleClick = (e_: React.MouseEvent<{}>) => {
    input && input.current && input.current.click();
  };
  let bas;
  return (
    <Wrapper>
      <StyledButton onClick={handleClick} variant="dark">
        <input {...props.input} type="file" hidden ref={input} />
        <EmojiP>📷</EmojiP>
      </StyledButton>
    </Wrapper>
  );
};
