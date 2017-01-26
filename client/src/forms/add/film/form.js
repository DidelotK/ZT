import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField, DatePicker} from 'redux-form-material-ui';
import {Modal, Image} from 'semantic-ui-react';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'add_film',
  validate
})
@CSSModules(styles)
class Form extends React.Component {
  render() {
    const {posterLink, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName="form">
        <div>
          <Field name="name" component={TextField} type="text"
            floatingLabelText="Name"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
          />
        </div>
        <div>
          <Field name="description" component={TextField} type="text"
            floatingLabelText="Description"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            multiLine={true}
            rows={2}
            rowsMax={5}
          />
        </div>
        <div>
          <Field name="posterLink" component={TextField} type="text"
            floatingLabelText="Poster link"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
          />
          {posterLink &&
          <Modal trigger={
            <RaisedButton
              label="Show poster"
              style={{width: '25%'}}
              backgroundColor="grey"
              type="button"
            />}
            size="small">
            <Modal.Header>Overview</Modal.Header>
            <Modal.Content>
              <Image src={posterLink}
                fluid/>
            </Modal.Content>
          </Modal>
          }
        </div>
        <div>
          <Field name="productionDate" component={DatePicker}
            floatingLabelText="Production date"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            disableYearSelection={false}
            format={(value, name) => value === '' ? null : value}
            mode="landscape"
          />
        </div>
        <div>
          <Field name="actors" component={TextField} type="text"
            floatingLabelText="Actors (one line per actor, 3 minimum)"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            multiLine={true}
            rows={2}
            rowsMax={5}
          />
        </div>
        <div>
          <Field name="director" component={TextField} type="text"
            floatingLabelText="Director"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
          />
        </div>
        <div>
          <Field name="country" component={TextField} type="text"
            floatingLabelText="Country"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
          />
        </div>
        <div>
          <Field name="length" component={TextField} type="number"
            floatingLabelText="Length (min)"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
          />
        </div>
        <div styleName="button">
          <RaisedButton
            label="Create"
            style={{width: '50%'}}
            backgroundColor="grey"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

export default Form;
