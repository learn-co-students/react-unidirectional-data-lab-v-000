'use strict'

import React from 'react';

export default class Toolbar extends React.Component {

  render() {
    const {onAdd, onRemove} = this.props

    return (
      <nav>
        <button onClick={onAdd}>+ Add note</button>
        <button onClick={onRemove}>Delete note</button>
      </nav>)
  }
}
