'use strict'

const React = require('react');
const classNames = require('classnames');


class SidebarItem extends React.Component {
  getTitle(file) {
    return file.split('\n').find(line => line.length);
  };

  render() {
    const { file = "", onClick, isSelected } = this.props
    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a href='#' className='sidebar__link' onClick={onClick}>
          {this.getTitle(file) || <em>Untitled</em>}
        </a>
      </li>
    )
  }
}

module.exports = SidebarItem;