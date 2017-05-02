'use strict'

import React from 'react';

const Toolbar = (props) => (
  <nav>
    <button onClick={props.onAdd}>+ Add note</button>
    <button onClick={props.onRemove}>Delete note</button>
  </nav>
);

export default Toolbar; 
