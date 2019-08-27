import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar"><img src={ avatar } alt="" /></a>
          <h1><strong>Hi! I'm Jenny</strong>, <br/>an artist, <br/>web developer, <br/>and witch <br/>from Portland, OR.</h1>
          <nav>
            <ul>
              <li><a href="/inktober-2019">Inktober 2019</a></li>
              <li><a href="/bookcovers">Book Covers</a></li>
            </ul>
          </nav>  
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
