'use strict'

const React = require('react');
const classNames = require('classnames');

function getTitle(file) {
  // Find first non-empty line and use as title.
  return file.split('\n').find(line => line.length);
}

class SidebarItem extends React.Component {
  // static getTitle(file) {
  //   // Find first non-empty line and use as title.
  //   return file.split('\n').find(line => line.length);
  // }
  render() {
    const { file = "", onClick, isSelected } = this.props
    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a href='#' className='sidebar__link' onClick={onClick}>
          {getTitle(file) || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
