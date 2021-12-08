import React from 'react';

const Navbar = () => {
  return (
  <nav>
    <ul>
      <li>
        <a href="/users/sign_out" data-method="delete">Sign Out</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;