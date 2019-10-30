import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="copyright">
            <li>&copy; <OutboundLink href="https://jenniferolsen.github.io/">Jenny Olsen</OutboundLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
