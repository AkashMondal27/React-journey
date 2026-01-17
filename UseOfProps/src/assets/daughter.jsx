import React from 'react'

const Daughter = (props) => {
  return (
    <div style={{ background: 'lightblue', padding: '10px' }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Daughter;
