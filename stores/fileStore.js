'use strict';

import Store from './Store';

class FileStore extends Store {
  constructor() {
    super([''])
  }

  updateFile(index, file) {
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }

  addFile() {
    const files = this.getState().concat('');
    this.setState(files);
  }

  removeFile(i) {
    const newFiles = this.getState().slice()
    if(newFiles.length === 1) {
      newFiles[0] = ''
    } else {
      newFiles.splice(i, 1)
    }

    this.setState(newFiles)
  }
}

const fileStore = new FileStore([]);

export default fileStore;
