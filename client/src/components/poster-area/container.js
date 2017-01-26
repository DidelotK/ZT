import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';

@connect(null,
  dispatch => {
    return {
      redirect: path => {
        dispatch(push(path));
      }
    };
  })
class Container extends Component {
  setMediaPerColumn(max) {
    if (max &&
      max > 0 &&
      max <= 16) {
      return max;
    }
    return 4;
  }
  setMaxDisplay(maxDisplay, mediaLength) {
    if (!maxDisplay || maxDisplay > mediaLength) {
      return mediaLength;
    }
    return maxDisplay;
  }
  render() {
    const {media, typeMedia} = this.props;
    if (!media || !media.length) {
      return (
        <div>
          No {typeMedia}
        </div>
      );
    }
    const maxDisplay = this.setMaxDisplay(this.props.maxDisplay, media.length);
    const mediaPerColumn =
      this.setMediaPerColumn(this.props.mediaPerColumn);

    return (
      <View
        media={media}
        typeMedia={typeMedia}
        maxDisplay={maxDisplay}
        mediaPerColumn={mediaPerColumn}
      />
    );
  }
}

export default Container;
