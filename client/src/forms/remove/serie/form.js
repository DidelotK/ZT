import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

const floatingLabelStyle = {
  color: fullBlack
};

const validate = values => {
  const errors = {};
  const requiredFields = [
    'name'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};

@reduxForm({
  form: 'remove_serie',
  validate,
})
@CSSModules(styles)
class Form extends React.Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName='form'>
        <div>
          <Field name="name" component={TextField} type="text"
                 floatingLabelText="Name"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div styleName='button'>
          <RaisedButton
            label='Remove'
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
