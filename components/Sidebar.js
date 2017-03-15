'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, event) {
    event.preventDefault();
    this.props.onSelect(index);
  }

  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        {
          files.map((file, i) => (
            <SidebarItem
              file={file}
              isSelected={selectedFileIndex === i}
              onClick={this.handleClick.bind(null, i)}
            />
          ))
        }
      </ul>
    );
  }
}

module.exports = Sidebar;
