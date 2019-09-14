import React from 'react';
import { getTrashTypes } from '../../api';
import { RootWrapper, Wrapper, Button } from './StartView.styled';
import { Geolocation } from './Geolocation';
import { ImageUpload } from './ImageUpload';
import { Dropdown } from './Dropdown';

const trashTypes = [];
export const StartView = () => (
  <RootWrapper>
    <Wrapper>
      {console.log(getTrashTypes())}
      <ImageUpload />
      <Geolocation />
      <Dropdown />
      <Button />
    </Wrapper>
  </RootWrapper>
);
