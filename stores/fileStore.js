'use strict';

import Store from './Store';

class FileStore extends Store {
  updateFile(index, file) {
    let newState = [...this.state];
    newState[index] = file;
    this.setState(newState);
  }

  addFile() {
    this.setState([...this.state, ""]);
  }

  removeFile(index) {
    if(this.state.length > 1) {
      this.setState(this.state.filter((e, i) => i !== index));
    } else {
      this.setState([""]);
    }
  }
}

const fileStore = new FileStore([""]);

export default fileStore;
