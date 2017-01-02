import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

injectTapEventPlugin();

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'login'
})
@CSSModules(styles)
class Form extends React.Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" component={TextField} type="text"
                 floatingLabelText="Email"
                 floatingLabelStyle={floatingLabelStyle}
          />
        </div>
        <div>
          <Field name="password" component={TextField} type="password"
                 floatingLabelText="Password"
                 floatingLabelStyle={floatingLabelStyle}
          />
        </div>

        <div styleName='button'>
          <RaisedButton
            label='Login'
            labelColor="white"
            style={ {'width': '50%'} }
            backgroundColor="green"
            type='submit'
          />
        </div>
      </form>
    );
  }
}

export default Form;
