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
import snow11 from '../assets/images/inktober2019/191011-snow.jpg'
import dragon12 from '../assets/images/inktober2019/191012-dragon.jpg'
import ash13 from '../assets/images/inktober2019/191013-ash.jpg'
import overgrown14 from '../assets/images/inktober2019/191014-overgrown.jpg'
import legend15 from '../assets/images/inktober2019/191015-legend.jpg'
import wild16 from '../assets/images/inktober2019/191016-wild.jpg'
import ornament17 from '../assets/images/inktober2019/191017.jpg'
import misfit18 from '../assets/images/inktober2019/191018-misfit.jpg'
import sling19 from '../assets/images/inktober2019/191019-sling.jpg'
import tread20 from '../assets/images/inktober2019/191020-tread.jpg'
import treasure21 from '../assets/images/inktober2019/191021-treasure.jpg'
import ghost22 from '../assets/images/inktober2019/191022-ghost.jpg'
import ancient23 from '../assets/images/inktober2019/191023-ancient.jpg'
import dizzy24 from '../assets/images/inktober2019/191024-dizzy.jpg'
import tasty25 from '../assets/images/inktober2019/191025-tasty.jpg'

const images = [
  {
    source: tasty25,
    thumbnail: tasty25,
    caption: 'Tasty',
    description: '10-25-2019',
  },
  {
    source: dizzy24,
    thumbnail: dizzy24,
    caption: 'Dizzy',
    description: '10-24-2019',
  },
  {
    source: ancient23,
    thumbnail: ancient23,
    caption: 'Ancient',
    description: '10-23-2019',
  },
  {
    source: ghost22,
    thumbnail: ghost22,
    caption: 'Ghost',
    description: '10-22-2019',
  },
  {
    source: treasure21,
    thumbnail: treasure21,
    caption: 'Treasure',
    description: '10-21-2019',
  },
  {
    source: tread20,
    thumbnail: tread20,
    caption: 'Tread',
    description: '10-20-2019',
  },
  {
    source: sling19,
    thumbnail: sling19,
    caption: 'Sling',
    description: '10-19-2019',
  },
  {
    source: misfit18,
    thumbnail: misfit18,
    caption: 'Misfit',
    description: '10-18-2019',
  },
  {
    source: ornament17,
    thumbnail: ornament17,
    caption: 'Ornament',
    description: '10-17-2019',
  },
  {
    source: wild16,
    thumbnail: wild16,
    caption: 'Wild',
    description: '10-16-2019',
  },
  {
    source: legend15,
    thumbnail: legend15,
    caption: 'Legend',
    description: '10-15-2019',
  },
  {
    source: overgrown14,
    thumbnail: overgrown14,
    caption: 'Overgrown',
    description: '10-14-2019',
  },
  {
    source: ash13,
    thumbnail: ash13,
    caption: 'Ash',
    description: '10-13-2019',
  },
  {
    source: dragon12,
    thumbnail: dragon12,
    caption: 'Dragon',
    description: '10-12-2019',
  },
  {
    source: snow11,
    thumbnail: snow11,
    caption: 'Snow',
    description: '10-11-2019',
  },
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
