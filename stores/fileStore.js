'use strict';

const Store = require('./Store');

class FileStore extends Store {

  updateFile(i, newState) {
    const files = this.state.slice()
    files[i] = newState
    this.setState(files)
  }

  addFile() {
    const files = this.state.slice()
    files.push('')
    this.setState(files)
  }

  removeFile(index) {
    const files = this.state.slice()
    if (files.length === 1) {
      files[0] = ''
    } else {
      files.splice(index, 1)
    }
    this.setState(files)
  }
}

module.exports = new FileStore(['']);
