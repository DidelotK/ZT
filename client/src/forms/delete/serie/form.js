import React from 'react';
import {Field, reduxForm, change} from 'redux-form';
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
  form: 'delete_serie',
  validate
})
@CSSModules(styles)
class Form extends React.Component {
  setFilmId(name) {
    const {dispatch, series} = this.props;
    if (!name || !series || !series.length) {
      return;
    }
    const matchingFilms = series.filter(serie => {
      return serie.name === name;
    });
    if (!matchingFilms || !matchingFilms.length) {
      dispatch(change('delete_serie', 'id', null));
      return;
    }
    dispatch(change('delete_serie', 'id', matchingFilms[0].id));
  }
  render() {
    const {handleSubmit, series} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName='form'>
        <div>
          <Field name="name" component={AutoComplete} type="text"
                 floatingLabelText="Serie to delete"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
                 filter={AutoComplete.caseInsensitiveFilter}
                 dataSource={series.map(serie => serie.name)}
                 onNewRequest={name => this.setFilmId(name)}
                 onUpdateInput={name => this.setFilmId(name)}
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
