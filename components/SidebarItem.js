'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {

  getTitle(file) {
    if (!file) {
      return null;  
    }
    return file.split('\n').find(line => line.length);
  }

  render() { 
    const { file, onClick, isSelected } = this.props; 
    return (
      <li className={ isSelected ? "sidebar__item--selected" : "sidebar__item"} >
        <a className="sidebar__link" onClick={onClick} >
          { this.getTitle(file) || <em>Untitled</em>}
        </a>
      </li>
    ) 
  }
}
