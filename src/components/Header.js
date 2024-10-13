import React from 'react';

import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div class="user">
            <img src="mypic.jpg" alt=""/>
            <h3 class="name">Ahmed Bakhsouss</h3>
            <p class="post">software engineer</p>
        </div>
  </header>
  );
}

export default Header;