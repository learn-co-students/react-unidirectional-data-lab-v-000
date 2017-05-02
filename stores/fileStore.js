'use strict';

import Store from './Store';

class FileStore extends Store {
  constructor(files) {
    super(); 
    this.setState(files); 

    this.addFile = this.addFile.bind(this); 
    this.updateFile = this.updateFile.bind(this); 
    this.removeFile = this.removeFile.bind(this); 
  }

  addFile() {
    var state = this.getState().concat('');  
    this.setState(state); 
  }

  updateFile(index, newFile) {
    var state = this.getState().slice(0); 
    state.splice(index, 1, newFile); 
    this.setState(state); 
    return; 
  }

  removeFile(index = 0) {
    var state = this.getState(); 
    if (state.length == 1) {
      this.setState(['']);  
      return; 
    }
    state.splice(index, 1); 
    this.setState(state); 
    return; 
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
