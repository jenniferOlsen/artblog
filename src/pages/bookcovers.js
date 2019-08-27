import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

// import full02 from '../assets/images/bookcovers/01.jpg'

const images = [
  {
    // id: '1',
    // source: full02,
    // thumbnail: full02,
    // caption: 'link to selfpub or SOLD',
    // description: 'date',
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

export default BookCovers
