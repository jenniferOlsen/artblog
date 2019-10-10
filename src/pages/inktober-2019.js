import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import ring01 from '../assets/images/inktober2019/191001-ring.jpg'
import mindless02 from '../assets/images/inktober2019/191002-mindless.jpg'
import bait03 from '../assets/images/inktober2019/191003-bait.jpg'
import freeze04 from '../assets/images/inktober2019/191004-freeze.jpg'
import build05 from '../assets/images/inktober2019/191005-build.jpg'
import husky06 from '../assets/images/inktober2019/191006-husky.jpg'
import enchanted07 from '../assets/images/inktober2019/191007-enchanted.jpg'
import frail08 from '../assets/images/inktober2019/191008-frail.jpg'
import swing09 from '../assets/images/inktober2019/191009-swing.jpg'
import pattern10 from '../assets/images/inktober2019/191010-pattern.jpg'

const images = [
  {
    source: pattern10,
    thumbnail: pattern10,
    caption: 'Pattern',
    description: '10-10-2019',
  },
  {
    source: swing09,
    thumbnail: swing09,
    caption: 'Swing',
    description: '10-09-2019',
  },
  {
    source: frail08,
    thumbnail: frail08,
    caption: 'Frail',
    description: '10-08-2019',
  },
  {
    source: enchanted07,
    thumbnail: enchanted07,
    caption: 'Enchanted',
    description: '10-07-2019',
  },{
    source: husky06,
    thumbnail: husky06,
    caption: 'Husky',
    description: '10-06-2019',
  },{
    source: build05,
    thumbnail: build05,
    caption: 'Build',
    description: '10-05-2019',
  },
  {
    source: freeze04,
    thumbnail: freeze04,
    caption: 'Freeze',
    description: '10-04-2019',
  },
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
