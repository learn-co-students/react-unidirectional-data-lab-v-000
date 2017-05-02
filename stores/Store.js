'use strict';

export default class Store {
  constructor(state) {
    this.state = state;  
    this.listeners = []; 
  }

  getState() {
    return this.state;  
  }

  setState(state) {
    this.state = state;  
    for (var listener of this.listeners) {
      listener.call(this, state);  
    }
  }

  addListener(listener) {
    this.listeners.push(listener); 
    var removeListener = () => {
      this.listeners = this.listeners
        .filter(l => listener !== l);  
    }
    return removeListener; 
  }

}
