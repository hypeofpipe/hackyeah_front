import React from 'react';
import { getTrashTypes } from '../../api';
import { RootWrapper, Wrapper } from './StartView.styled';
import { Geolocation } from './Geolocation';
import { Button } from './Button';
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
      <Button>Submit</Button>
    </Wrapper>
  </RootWrapper>
);
