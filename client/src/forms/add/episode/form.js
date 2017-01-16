import React from 'react';
import {Field, reduxForm, change} from 'redux-form';
import {TextField, AutoComplete} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate, asyncValidate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'add_episode',
  validate,
  asyncValidate
})
@CSSModules(styles)
class Form extends React.Component {
  onNewRequest() {
    const {asyncValidate} = this.props;
    asyncValidate();
  }
  render() {
    const {handleSubmit, series, isSerieSelected} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName='form'>
        <div>
          <Field name="serieSelected" component={AutoComplete} type="text"
                 floatingLabelText="Serie to add episode"
                 floatingLabelStyle={floatingLabelStyle}
                 fullWidth={true}
                 filter={AutoComplete.caseInsensitiveFilter}
                 dataSource={series.map(serie => serie.name)}
                 onNewRequest={() => this.onNewRequest()}
                 onUpdateInput={() => this.onNewRequest()}
          />
        </div>
        {isSerieSelected &&
        <div>
          <div>
            <Field name="name" component={TextField} type="text"
                   floatingLabelText="Name"
                   floatingLabelStyle={floatingLabelStyle}
                   fullWidth={true}
            />
          </div>
          <div>
            <Field name="saison" component={TextField} type="number"
                   floatingLabelText="Saison"
                   floatingLabelStyle={floatingLabelStyle}
                   fullWidth={true}
            />
          </div>
          <div>
            <Field name="number" component={TextField} type="number"
                   floatingLabelText="Number"
                   floatingLabelStyle={floatingLabelStyle}
                   fullWidth={true}
            />
          </div>
          <div>
            <Field name="resume" component={TextField} type="text"
                   floatingLabelText="Resume"
                   floatingLabelStyle={floatingLabelStyle}
                   fullWidth={true}
                   multiLine={true}
                   rows={2}
                   rowsMax={5}
            />
          </div>
        </div>
        }
        <div styleName='button'>
          <RaisedButton
            label='Create'
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
