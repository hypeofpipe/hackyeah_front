import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Wrapper = styled.div`
  background: gray;
  margin-bottom: 2rem;
`;
const EmojiP = styled.p`
  font-size: 15vw;
  margin: 0;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;

export const ImageUpload = () => {
  let input: React.RefObject<HTMLInputElement> = React.createRef();
  const handleClick = (e_: React.MouseEvent<{}>) => {
    input && input.current && input.current.click();
  };
  const onChangeHandler = (event: any) => console.log(event.target.files[0]);
  return (
    <Wrapper>
      <StyledButton onClick={handleClick} variant="dark">
        <input
          type="file"
          name="file"
          onChange={onChangeHandler}
          hidden
          ref={input}
        />
        <EmojiP>📷</EmojiP>
      </StyledButton>
    </Wrapper>
  );
};
