'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const file = this.props.file || ''
    return (
      <li className={this.props.isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a className={"sidebar__link"} onClick={this.props.onClick} href="#" >
          {SidebarItem.getTitle(file) || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}
