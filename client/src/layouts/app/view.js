import React, {Component} from 'react';

import NavBar from '../../components/navbar/container';

class View extends Component {
  render() {
    return (
      <div>
        <NavBar location={this.props.location}/>
        {this.props.children}
      </div>
    );
  }
}

export default View;