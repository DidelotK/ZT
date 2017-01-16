import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'update_episode',
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
                 floatingLabelText="Title"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="serie_ref" component={TextField} type="text"
                 floatingLabelText="Serie"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="name" component={TextField} type="text"
                 floatingLabelText="New Title"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="serie" component={TextField} type="text"
                 floatingLabelText="New Serie"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="saison" component={TextField} type="number"
                 floatingLabelText="New Season"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
          />
        </div>
        <div>
          <Field name="number" component={TextField} type="number"
                 floatingLabelText="New Number"
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
