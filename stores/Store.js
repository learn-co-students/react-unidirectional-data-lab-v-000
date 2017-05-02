'use strict';

export default class Store {
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  getState(){
    return this.state;
  }

  setState(state){
    this.listeners.forEach(listener => listener(state));
    return this.state = state;
  }

  addListener(listener){
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter(l => listener !== l)
    }
    return removeListener;
  }
}
