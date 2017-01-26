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
  form: 'delete_film',
  validate
})
@CSSModules(styles)
class Form extends React.Component {
  setFilmId(name) {
    const {dispatch, films} = this.props;
    if (!name || !films || !films.length) {
      return;
    }
    const matchingFilms = films.filter(film => {
      return film.name === name;
    });
    if (!matchingFilms || !matchingFilms.length) {
      dispatch(change('delete_film', 'id', null));
      return;
    }
    dispatch(change('delete_film', 'id', matchingFilms[0].id));
  }
  render() {
    const {handleSubmit, films} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName="form">
        <div>
          <Field name="name" component={AutoComplete} type="text"
            floatingLabelText="Film to delete"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={films.map(film => film.name)}
            onNewRequest={name => this.setFilmId(name)}
            onUpdateInput={name => this.setFilmId(name)}
          />
        </div>
        <div styleName="button">
          <RaisedButton
            label="Remove"
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
