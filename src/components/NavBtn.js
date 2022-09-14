import React from 'react';

const NavBtn = ({ name }) => {
  return (
  <button style={{
    fontSize: '18px',
    padding: '10px',
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer'
  }}>
    {name}
  </button>
  )
};

export default NavBtn;
