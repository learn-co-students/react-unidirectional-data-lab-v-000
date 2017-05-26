'use strict'

import React from 'react';
import Sidebar from './Sidebar';
import FileView from './FileView';
import Toolbar from './Toolbar';

import fileStore from '../stores/fileStore';
import actions from '../actions';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      files: fileStore.getState(),
      selectedFileIndex: 0
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.removeListener = fileStore.addListener((data) => this.setState({files: data}));
    this.setState({files: fileStore.getState()});
  }

  componentWillUnmount() {
    this.removeListener();
  }

  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(selectedFileIndex, ev.target.value);
  }

  handleSelect(selectedFileIndex) {
    this.setState({
      selectedFileIndex: selectedFileIndex
    })
  }

  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile();
  }

  handleRemove(ev) {
    ev.preventDefault();
    var currentIndex = this.state.selectedFileIndex;
    actions.removeFile(currentIndex);
    this.setState({selectedFileIndex: 0})
  }

  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];

    return (
      <div className="app">
        <Sidebar
          files={files}
          selectedFileIndex={selectedFileIndex}
          onSelect={this.handleSelect}
        />
        <FileView
          file={file}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}
