'use strict';

export default class Store {
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener(state);
    }
  }

  addListener(listener) {
    this.listeners.push(listener);
    let l = listener;
    const removeListener = () => {
      this.listeners = this.listeners.filter((l) => listener !== l)
    }
    return removeListener;
  }

  getState(){
    return this.state
  }
}
