import React from 'react'
import Layout from '../components/layout'
import Inktober2019 from './inktober-2019'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <Inktober2019 /> 
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
