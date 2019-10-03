import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import ring01 from '../assets/images/inktober2019/191001-ring.jpg'
import mindless02 from '../assets/images/inktober2019/191002-mindless.jpg'
import bait03 from '../assets/images/inktober2019/191003-bait.jpg'

const images = [
  {
    source: bait03,
    thumbnail: bait03,
    caption: 'Bait',
    description: '10-03-2019',
  },
  {
    source: mindless02,
    thumbnail: mindless02,
    caption: 'Mindless',
    description: '10-02-2019',
  },
  {
    source: ring01,
    thumbnail: ring01,
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
