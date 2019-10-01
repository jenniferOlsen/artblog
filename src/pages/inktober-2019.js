import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import Ring01 from '../assets/images/inktober2019/191001-ring.jpg'

const images = [
  {
    source: Ring01,
    thumbnail: Ring01,
    caption: 'Ring',
    description: '10-01-2019',
  },

]

class Inktober2019 extends React.Component {
  render() {
    return (
      <>
        <SEO title="Inktober 2019" />
        <Layout>
          <section id="main">
            <h2>Inktober 2019</h2>
            <Gallery
              images={ images.map(
                ({ source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              ) }
            />
          </section>
        </Layout>
      </>
    )
  }
}

export default Inktober2019
