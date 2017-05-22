'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const sidebarItemToggle = this.props.isSelected ? 'sidebar__item--selected' : 'sidebar__item'
    return (
      <li className={sidebarItemToggle}>
        <a className='sidebar__link' onClick={this.props.onClick}>
          {this.props.file ? SidebarItem.getTitle(this.props.file) : <em>Untitled</em>}
        </a>
      </li>
    );
  }
}
