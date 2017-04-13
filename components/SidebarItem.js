
'use strict'

import React from 'react';
import classNames from 'classnames';

class SidebarItem extends React.Component {
  getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const { file = '', onClick, isSelected } = this.props;
    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a href='#' className='sidebar__link' onClick={onClick}>
          {this.getTitle(file) || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

// module.exports = SidebarItem;
export default SidebarItem;