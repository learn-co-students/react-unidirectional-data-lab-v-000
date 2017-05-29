'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);
  }

  render() {
    const { files, selectedFileIndex } = this.props;

    return (
      <ul className="sidebar">
        {
          files.map((file, index) => (
            <SidebarItem
              key = {index}
              file = {file}
              isSelected = {selectedFileIndex === index}
              onClick = {this.handleClick.bind(null, index)}
            />
          ))
        }
      </ul>
    );
  }
}
