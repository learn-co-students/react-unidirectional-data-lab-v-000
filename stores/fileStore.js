'use strict';

import Store from './Store';

class FileStore extends Store {
  updateFile (fileIndex, updatedFile) {
    const files = this.getState().slice()
    files[fileIndex] = updatedFile
    this.setState(files)
  }

  addFile () {
    const files = this.getState().slice()
    files.push('')
    this.setState(files)
  }

  removeFile (fileIndex) {
    const files = this.getState().slice()
    if (files.length > 1) {
      files.splice(fileIndex, 1)
      this.setState(files)
      return
    }
    files[0] = ''
    this.setState(files)
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
