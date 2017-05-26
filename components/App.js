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
    this.listener = this.listener.bind(this);
    this.handleAdd = actions.addFile.bind(this);
    this.handleChange = actions.updateFile.bind(this, this.state.selectedFileIndex);
    this.handleRemove = actions.removeFile.bind(this, this.state.selectedFileIndex);
  }

  listener(data) {
    this.setState({files: data});
  }

  componentDidMount() {
    this.removeListener = fileStore.addListener(this.listener);
    this.setState({files: fileStore.getState()});
  }

  componentWillUnmount() {
    this.removeListener();
  }

  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    this.handleChange(selectedFileIndex, ev.target.value);
  }

  handleSelect(selectedFileIndex) {
    // TODO Update selectedFileIndex state
    this.setState({
      selectedFileIndex: selectedFileIndex
    })
  }

  handleAdd(ev) {
    ev.preventDefault();
    // TODO Dispatch action
    this.handleAdd();
  }

  handleRemove(ev) {
    ev.preventDefault()
    // TODO Dispatch action
    this.handleRemove();
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
