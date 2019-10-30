import React from 'react'
import SEO from '../components/seo'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import sunny from '../assets/images/bookcovers/sunny-lowres.jpg'
import sunnyhr from '../assets/images/bookcovers/sunny-highres.jpg'
import stormwitch from '../assets/images/bookcovers/stormwitch2.jpg'
import stormwitchhr from '../assets/images/bookcovers/stormwitchHR2.jpg'
import space from '../assets/images/bookcovers/space2.jpg'
import spacehr from '../assets/images/bookcovers/spaceHR.jpg'
import stairway from '../assets/images/bookcovers/stairway.jpg'
import stairwayhr from '../assets/images/bookcovers/stairwayHR.jpg'
import kansas from '../assets/images/bookcovers/kansas.jpg'
import kansashr from '../assets/images/bookcovers/kansasHR.jpg'
import prisoner from '../assets/images/bookcovers/prisoner.jpg'
import prisonerHR from '../assets/images/bookcovers/prisonerHR.jpg'
import batwitch from '../assets/images/bookcovers/bat-witch.jpg'
import batwitchHR from '../assets/images/bookcovers/bat-witchHR.jpg'

const images = [
  {
    source: batwitchHR,
    thumbnail: batwitch,
  },
  {
    source: prisonerHR,
    thumbnail: prisoner,
  },
  {
    source: stormwitchhr,
    thumbnail: stormwitch,
  },
  {
    source: spacehr,
    thumbnail: space,
  },
  {
    source: stairwayhr,
    thumbnail: stairway,
  },
  {
    source: kansashr,
    thumbnail: kansas,
  },
  {
    source: sunnyhr,
    thumbnail: sunny,
  },
]

class BookCovers extends React.Component {
  render() {
    return (
      <>
        <SEO title="Book Covers" />
        <Layout>
          <section id="main">
            <h2>Book Covers</h2>
            <p>Available for purchase at <OutboundLink href="https://selfpubbookcovers.com/index.php?option=com_author&view=searchartist&username=jennyo">SelfPubBookCovers.com</OutboundLink></p>
            <Gallery
              images={ images.map(
                ({ source, thumbnail }) => ({
                  source,
                  thumbnail,
                })
              ) }
            />
          </section>
        </Layout>
      </>
    )
  }
}

export default BookCovers
