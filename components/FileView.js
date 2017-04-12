'use strict'

import React from 'react';
import Toolbar from './Toolbar';

class FileView extends React.Component {
  render() {
    const { onAdd, onRemove, file, onChange } = this.props;

    return (
      <div className='file-view'>
        <Toolbar onAdd={onAdd} onRemove={onRemove} />
        <textarea className="file-view__text" placeholder="Type some text here."
                  value={file} onChange={onChange} />
      </div>
    );
  }
}

// module.exports = FileView;
export default FileView;
