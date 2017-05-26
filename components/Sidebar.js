'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);
  }

  render() {
    const { files, selectedFileIndex, onSelect } = this.props;

    return (
      <ul className="sidebar">
        {files.map((file, fileIndex) =>
          <SidebarItem
            onClick={this.handleClick.bind(null, fileIndex)}
            onSelect={onSelect}
            file={file}
            isSelected={fileIndex === selectedFileIndex}
            key={fileIndex}
          />
        )}
      </ul>
    );
  }
}
