'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const { isSelected, onClick } = this.props;
    const file = this.props.file || "";
    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a className="sidebar__link" onClick={onClick} >
          { this.constructor.getTitle(file) || <em>Untitled</em> }
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
