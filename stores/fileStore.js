'use strict';

import Store from './Store';

class FileStore extends Store {
  constructor(initialState){
    super();
    this.state = initialState;
  }

  addFile(){
    var files = [...this.state];
    files.push('')
    this.setState(files)
  }

  removeFile(index){
    var files = [...this.state]
    if (files.length === 1) {
      files.splice(index, 1, '');
    } else {
      files.splice(index, 1)
    }
    this.setState(files)
  }

  updateFile(index, file){
    var files = [...this.state]
    files[index] = file;
    this.setState(files);
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
