'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index, ev) {
    ev.preventDefault()
    this.props.onSelect(index)
  }

  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    const htmlFiles = files.map((file, i) => <SidebarItem key={i} file={file} isSelected={i === selectedFileIndex} onClick={this.handleClick.bind(null, i)}/>)

    return (
      <ul className="sidebar">
        {htmlFiles}
      </ul>
    );
  }
}
