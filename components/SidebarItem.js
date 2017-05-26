'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const { onClick, onSelect, file, isSelected } = this.props;

    function getTitle(content) {
      if (content === "" || content === null || content === undefined ) {
        return "Untitled"
      } else {
        // Find first non-empty line and use as title.
        return content.split('\n').find(line => line.length)
      }
    };

    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a className="sidebar__link" onClick={onClick}>
          <em>{getTitle(file)}</em>
        </a>
      </li>
    );
  }
}
