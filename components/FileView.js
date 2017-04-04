'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

class FileView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAdd, onRemove, onChange, file } = this.props

    return (
      <div className="file-view">
        <Toolbar
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <textarea
          className="file-view__text"
          onChange={onChange}
          value={file}
        />
      </div>
    );
  }

}

module.exports = FileView;
