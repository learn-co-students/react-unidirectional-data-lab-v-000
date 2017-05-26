'use strict'

import React from 'react';
import Toolbar from './Toolbar';

export default class FileView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { file, onChange, onAdd, onRemove } = this.props;

    return (
      <div className="file-view">
        <Toolbar onAdd={onAdd} onRemove={onRemove} />
        <textarea className="file-view__text" value={file} onChange={onChange} />
      </div>
    );
  }
}
