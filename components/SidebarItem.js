'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {

  getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const title = !!this.props.file && this.getTitle(this.props.file)
    return (
      <li className={this.props.isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a className="sidebar__link" onClick={this.props.onClick}>
          {title || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
