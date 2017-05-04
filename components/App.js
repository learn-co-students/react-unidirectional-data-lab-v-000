'use strict'

import React from 'react';
import Sidebar from './Sidebar';
import FileView from './FileView';
import Toolbar from './Toolbar';

import fileStore from '../stores/fileStore';
import actions from '../actions';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    this.removeListener = fileStore.addListener((state) => this.setState({files: state}))
  }

  componentWillUnmount() {
    this.removeListener()
  }

  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(selectedFileIndex, ev.target.value)
    // TODO Dispatch action

  }

  handleSelect(selectedFileIndex) {
    this.setState({selectedFileIndex})
  }

  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile()
    // TODO Dispatch action
  }

  handleRemove(ev) {
    ev.preventDefault()
    const { selectedFileIndex } = this.state;
    actions.removeFile(selectedFileIndex)
    // TODO Dispatch action
  }

  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];
    console.log(file)
    console.log(selectedFileIndex)

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
