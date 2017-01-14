import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    let {type} = this.props;
    type = type.toUpperCase();
    return (
      <div styleName='container'>
        {type} NOT FOUND
      </div>
    )
  }
}
export default View;
