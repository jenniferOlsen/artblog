import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

// import full02 from '../assets/images/inktober2019/02.jpg'

const images = [
  {
    // id: '1',
    // source: full02,
    // thumbnail: full02,
    // caption: 'prompt',
    // description: 'date',
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
