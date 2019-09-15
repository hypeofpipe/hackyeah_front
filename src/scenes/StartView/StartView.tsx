import React from 'react';
import { Form, Field } from 'react-final-form';
import { getTrashTypes } from '../../api';
import { RootWrapper, Wrapper } from './StartView.styled';
import { Geolocation } from './Geolocation';
import { Button } from './Button';
import { ImageUpload } from './ImageUpload';
import { Dropdown } from './Dropdown';

const getBase64 = (file: File, cb: Function) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    cb(reader.result);
  };
  reader.onerror = function(error) {
    console.log('Error: ', error);
  };
};
const onSubmit = async (values: any) => {
  console.log(values);
};

const trashTypes = [];
export class StartView extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const trashTypes = await getTrashTypes();
    this.setState(trashTypes.data['type_of_trash']);
  }

  render() {
    return (
      <RootWrapper>
        <Wrapper>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Field name="image" component={ImageUpload} />
                <Field name="geolocation" component={Geolocation} />
                <Field
                  name="trashType"
                  render={props => (
                    <Dropdown
                      {...props.input}
                      input={props.input}
                      meta={props.meta}
                      elements={this.state}
                    />
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            )}
          />
        </Wrapper>
      </RootWrapper>
    );
  }
}
