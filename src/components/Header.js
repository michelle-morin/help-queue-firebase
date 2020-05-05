import React from "react";
import { Link } from "react-router-dom";

function Header(){
  const headerStyles = {
    textAlign: 'center',
    color: '#008081',
  }
  return (
    <div style={headerStyles}>
      <h1>Help Queue</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;