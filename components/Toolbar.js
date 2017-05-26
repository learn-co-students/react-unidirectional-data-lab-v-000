'use strict'

import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { addHandler, removeHandler } = this.props;

    return(
      <nav>
        <button onClick={addHandler}>+ Add note</button>
        <button onClick={removeHandler}>Delete note</button>
      </nav>
    )
  }
};
