import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField, DatePicker} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'update_serie',
  validate,
})
@CSSModules(styles)
class Form extends React.Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName='form'>
        <div>
          <Field name="ref" component={TextField} type="text"
                 floatingLabelText="Name"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="name" component={TextField} type="text"
                 floatingLabelText="New Name"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="description" component={TextField} type="text"
                 floatingLabelText="New Description"
                 floatingLabelStyle={floatingLabelStyle}
                 multiLine={true}
                 fullWidth={true}
                 rows={2}
                 rowsMax={5}
          />
        </div>
        <div>
          <Field name="posterLink" component={TextField} type="text"
                 floatingLabelText="New Poster link"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="productionDate" component={DatePicker}
                 floatingLabelText="New Production date"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
                 disableYearSelection={false}
                 format={(value, name) => value === '' ? null : value}
                 mode="landscape"
          />
        </div>
        <div>
          <Field name="actors" component={TextField} type="text"
                 floatingLabelText="New Actors"
                 floatingLabelStyle={floatingLabelStyle}
                 multiLine={true}
                 fullWidth={true}
                 rows={2}
                 rowsMax={5}
          />
        </div>
        <div>
          <Field name="director" component={TextField} type="text"
                 floatingLabelText="New Director"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="country" component={TextField} type="text"
                 floatingLabelText="New Country"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div styleName='button'>
          <RaisedButton
            label='Update'
            style={{'width': '50%'}}
            backgroundColor="grey"
            type='submit'
          />
        </div>
      </form>
    );
  }
}

export default Form;
