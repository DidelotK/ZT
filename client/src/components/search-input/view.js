import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import AutoComplete from 'material-ui/AutoComplete';
import {fullBlack} from 'material-ui/styles/colors';
import {Button, Icon} from 'semantic-ui-react';

import styles from './styles.css';

const floatingLabelStyle = {
  color: fullBlack
};

@CSSModules(styles)
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }
  onNewRequest = (chosenRequest, index) => {
    const media = this.props.media[index];
    this.setState({search: ''});
    this.props.redirect(`/${media.type}/${media.id}`);
  };
  search = () => {
    const {search} = this.state;
    if (search && search !== '') {
      this.setState({search: ''});
      this.props.redirect(`/search/${search}`);
    }
  };
  onUpdateInput = newValue => {
    this.setState({search: newValue});
  };
  render() {
    const {media} = this.props;

    return (
      <div styleName="container">
        <div styleName="input">
          <AutoComplete ref="search" name="search" type="text"
            hintText="Search..."
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={media.map(m => m.name)}
            onUpdateInput={this.onUpdateInput}
            onNewRequest={this.onNewRequest}
            searchText={this.state.search}
            style={{
              padding: 0,
              margin: 0,
              height: '10px'
            }} />
        </div>
        <Button icon
          onClick={this.search}>
          <Icon name="search" />
        </Button>

      </div>
    );
  }
}

export default View;
