'use strict';

import Store from './Store';

class FileStore extends Store {
  updateFile(index, content){
    var newState = this.getState();
    newState.splice(index, 1, content);
    this.setState(newState);
  }

  addFile(){
    var newState = this.getState();
    newState.push("");
    this.setState(newState);
  }

  removeFile(index){
    if (this.state.length === 1) {
      return this.setState([""])
    } else {
      var newState = this.getState();
      newState.splice(index, 1);
      this.setState(newState);
    }
  }
}

const fileStore = new FileStore([""]);

export default fileStore;
