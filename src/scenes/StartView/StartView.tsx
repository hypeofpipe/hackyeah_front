import React from 'react';
import {
  RootWrapper,
  Wrapper,
  Location,
  Dropdown,
  Button,
} from './StartView.styled';
import { ImageUpload } from './ImageUpload';

export const StartView = () => (
  <RootWrapper>
    <Wrapper>
      <ImageUpload />
      <Location />
      <Dropdown />
      <Button />
    </Wrapper>
  </RootWrapper>
);
