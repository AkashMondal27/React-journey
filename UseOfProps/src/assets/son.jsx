import React from 'react'

const Son = (props) => {
  return (
    <div style={{ background: 'lightgreen', padding: '10px' }}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Son;
