import React, {Component} from 'react';

class Helper extends Component {
  prepareName(fullname) {
    if (fullname && fullname.length > 15) {
      fullname = fullname.substring(0, 15);
      return `${fullname}..`;
    }
    return fullname;
  }
  render() {
    const name = this.props.name;
    const preparedName = this.prepareName(name);
    return (
      <span>
        {preparedName}
      </span>
    );
  }
}

export default Helper;
