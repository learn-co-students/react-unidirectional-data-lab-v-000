'use strict'

import React from 'react';

// const Toolbar = () => (
//   <nav>
//     <button>+ Add note</button>
//     <button>Delete note</button>
//   </nav>
// );

export default class Toolbar extends React.Component {

  render(){
    const {onAdd, onRemove} = this.props
    return(
  <nav>
     <button onClick={onAdd}>+ Add note</button>
     <button onClick={onRemove}>Delete note</button>
   </nav>
  )
 }
}
