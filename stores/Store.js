'use strict';

export default class Store {
  constructor(initialState) {
    this.state = initialState
    this.listeners = []
  }

  addListener(listener) {
    this.listeners.push(listener)

    const removeListener = () => this.listeners = this.listeners.filter(l => l !== listener)
    return removeListener
  }

  setState(newState) {
    this.state = newState
    var i, l = this.listeners.length
    for(i = 0; i < l; i++) { this.listeners[i](newState) }
  }

  getState() {
    return this.state
  }
}
