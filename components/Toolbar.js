'use strict'

import React from 'react';

export default class Toolbar extends React.Component {
  render() {
    return(
      <nav>
        <button onClick={this.props.onAdd}>+ Add note</button>
        <button onClick={this.props.onRemove}>Delete note</button>
      </nav>
    );
  }
}
