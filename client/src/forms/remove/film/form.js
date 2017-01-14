import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {AutoComplete} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'remove_film',
  validate
})
@CSSModules(styles)
class Form extends React.Component {
  render() {
    const {handleSubmit, films} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName='form'>
        <div>
          <Field name="ref" component={AutoComplete} type="text"
                 floatingLabelText="Film to remove"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
                 filter={AutoComplete.caseInsensitiveFilter}
                 dataSource={films.map(film => film.name)}
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
