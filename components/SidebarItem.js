'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  getTitle(file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  };

  render() {
    const { file = '', isSelected, onClick} = this.props

    const liClasses = classNames({
      'sidebar__item': true,
      'sidebar__item--selected': isSelected
    });

    return (
      <li className={liClasses}>
        <a className="sidebar__link" onClick={onClick}>
          {this.getTitle(file) || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
