import React, {Component} from 'react';

class Helper extends Component {
  convertDate(inputFormat) {
    function pad(s) {return (s < 10) ? '0' + s : s;}
    const d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }
  render() {
    const date = this.props.date;
    const formattedDate = this.convertDate(date);
    return (
      <span>
        {formattedDate}
      </span>
    );
  }
}

export default Helper
