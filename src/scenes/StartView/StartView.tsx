import React from 'react';
import { RootWrapper, Wrapper, Dropdown, Button } from './StartView.styled';
import { Geolocation } from './Geolocation';
import { ImageUpload } from './ImageUpload';

export const StartView = () => (
  <RootWrapper>
    <Wrapper>
      <ImageUpload />
      <Geolocation />
      <Dropdown />
      <Button />
    </Wrapper>
  </RootWrapper>
);
