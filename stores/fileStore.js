'use strict';

const Store = require('./Store');

class FileStore extends Store {
  updateFile(i, f) {
    const files = this.getState().slice();
    files.splice(i, 1, f);
    this.setState(files);
  }

  addFile() {
    this.setState([...this.getState(), '']);
  }

  removeFile(i) {
    if(this.state.length === 1) {
      return this.setState([""]);
    } 

    const files = this.getState().slice();
    files.splice(i, 1);
    this.setState(files);
  }


}

module.exports = new FileStore(['']);
