import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField, DatePicker, AutoComplete} from 'redux-form-material-ui';
import {Modal, Image} from 'semantic-ui-react';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate, asyncValidate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'update_serie',
  validate,
  asyncValidate,
  asyncBlurFields: ['serieSelected']
})
@CSSModules(styles)
class Form extends React.Component {
  onNewRequest() {
    const {asyncValidate} = this.props;
    asyncValidate();
  }
  render() {
    const {handleSubmit, series, isSerieSelected, posterLink} = this.props;
    return (
      <form onSubmit={handleSubmit} styleName="form">
        <div>
          <Field name="serieSelected" component={AutoComplete} type="text"
            floatingLabelText="Serie to update"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={series.map(serie => serie.name)}
            onNewRequest={() => this.onNewRequest()}
          />
        </div>
        {isSerieSelected &&
        <div>
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
            <Modal trigger={
              <RaisedButton
                label="Show poster"
                style={{width: '25%'}}
                backgroundColor="grey"
                type="button"
              />}
              size="small"
            >
              <Modal.Header>Overview</Modal.Header>
              <Modal.Content>
                <Image src={posterLink}
                  fluid/>
              </Modal.Content>
            </Modal>
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
              floatingLabelText="New Actors (one line per actor, 3 minimum)"
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
        </div>
        }
        <div styleName="button">
          <RaisedButton
            label="Update"
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
