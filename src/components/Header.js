import React from "react";

function Header(){
  const headerStyles = {
    textAlign: 'center',
    color: '#008081',
    fontSize: '3rem'
  }
  return (
    <div style={headerStyles}>
      <h1>Help Queue</h1>
    </div>
  );
}

export default Header;