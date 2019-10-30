import React from 'react'
import SEO from '../components/seo'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import fool from '../assets/images/tiny-tarot/fool.png'
import magician from '../assets/images/tiny-tarot/magician.png'
import highPriestess from '../assets/images/tiny-tarot/high_priestess.png'
import empress from '../assets/images/tiny-tarot/empress.png'
import emperor from '../assets/images/tiny-tarot/emperor.png'
import hierophant from '../assets/images/tiny-tarot/hierophant.png'
import lovers from '../assets/images/tiny-tarot/lovers.png'
import chariot from '../assets/images/tiny-tarot/chariot.png'
import strength from '../assets/images/tiny-tarot/strength.png'
import hermit from '../assets/images/tiny-tarot/hermit.png'
import wheel from '../assets/images/tiny-tarot/wheel.png'
import justice from '../assets/images/tiny-tarot/justice.png'
import hangedMan from '../assets/images/tiny-tarot/hanged_man.png'
import death from '../assets/images/tiny-tarot/death.png'
import temperance from '../assets/images/tiny-tarot/temperance.png'
import devil from '../assets/images/tiny-tarot/devil.png'
import tower from '../assets/images/tiny-tarot/tower.png'
import star from '../assets/images/tiny-tarot/star.png'
import moon from '../assets/images/tiny-tarot/moon.png'
import sun from '../assets/images/tiny-tarot/sun.png'
import judgement from '../assets/images/tiny-tarot/judgement.png'
import world from '../assets/images/tiny-tarot/world.png'
import sword from '../assets/images/tiny-tarot/sword.png'
import swordPage from '../assets/images/tiny-tarot/sword_page.png'
import swordKnight from '../assets/images/tiny-tarot/sword_knight.png'
import swordQueen from '../assets/images/tiny-tarot/sword_queen.png'
import swordKing from '../assets/images/tiny-tarot/sword_king.png'
import wand from '../assets/images/tiny-tarot/wand.png'
import wandPage from '../assets/images/tiny-tarot/wand_page.png'
import wandKnight from '../assets/images/tiny-tarot/wand_knight.png'
import wandQueen from '../assets/images/tiny-tarot/wand_queen.png'
import wandKing from '../assets/images/tiny-tarot/wand_king.png'
import cup from '../assets/images/tiny-tarot/cup.png'
import cupPage from '../assets/images/tiny-tarot/cup_page.png'
import cupKnight from '../assets/images/tiny-tarot/cup_knight.png'
import cupQueen from '../assets/images/tiny-tarot/cup_queen.png'
import cupKing from '../assets/images/tiny-tarot/cup_king.png'
import coin from '../assets/images/tiny-tarot/coin.png'
import coinPage from '../assets/images/tiny-tarot/coin_page.png'
import coinKnight from '../assets/images/tiny-tarot/coin_knight.png'
import coinQueen from '../assets/images/tiny-tarot/coin_queen.png'
import coinKing from '../assets/images/tiny-tarot/coin_king.png'


const images = [
 
  {
    source: fool,
    thumbnail: fool,
    caption: 'Fool',
  },
  {
    source: magician,
    thumbnail: magician,
    caption: 'Magician',
  },
  {
    source: highPriestess,
    thumbnail: highPriestess,
    caption: 'High Priestess',
  },
  {
    source: empress,
    thumbnail: empress,
    caption: 'Empress',
  },
  {
    source: emperor,
    thumbnail: emperor,
    caption: 'Emperor',
  },
  {
    source: hierophant,
    thumbnail: hierophant,
    caption: 'Hierophant',
  },
  {
    source: lovers,
    thumbnail: lovers,
    caption: 'Lovers',
  },
  {
    source: chariot,
    thumbnail: chariot,
    caption: 'Chariot',
  },
  {
    source: strength,
    thumbnail: strength,
    caption: 'Strength',
  },
  {
    source: hermit,
    thumbnail: hermit,
    caption: 'Hermit',
  },
  {
    source: wheel,
    thumbnail: wheel,
    caption: 'Wheel of Fortune',
  },
  {
    source: justice,
    thumbnail: justice,
    caption: 'Justice',
  },
  {
    source: hangedMan,
    thumbnail: hangedMan,
    caption: 'Hanged Man',
  },
  {
    source: death,
    thumbnail: death,
    caption: 'Death',
  },
  {
    source: temperance,
    thumbnail: temperance,
    caption: 'Temperance',
  },
  {
    source: devil,
    thumbnail: devil,
    caption: 'Devil',
  },
  {
    source: tower,
    thumbnail: tower,
    caption: 'Tower',
  },
  {
    source: star,
    thumbnail: star,
    caption: 'Star',
  },
  {
    source: moon,
    thumbnail: moon,
    caption: 'Moon',
  },
  {
    source: sun,
    thumbnail: sun,
    caption: 'Sun',
  },
  {
    source: judgement,
    thumbnail: judgement,
    caption: 'Judgement',
  },
  {
    source: world,
    thumbnail: world,
    caption: 'World',
  },
  {
    source: sword,
    thumbnail: sword,
    caption: 'Swords',
  },
  {
    source: swordPage,
    thumbnail: swordPage,
    caption: 'Page of Swords',
  },
  {
    source: swordKnight,
    thumbnail: swordKnight,
    caption: 'Knight of Swords',
  },
  {
    source: swordQueen,
    thumbnail: swordQueen,
    caption: 'Queen of Swords',
  },
  {
    source: swordKing,
    thumbnail: swordKing,
    caption: 'King of Swords',
  },
  {
    source: wand,
    thumbnail: wand,
    caption: 'Wands',
  },
  {
    source: wandPage,
    thumbnail: wandPage,
    caption: 'Page of Wands',
  },
  {
    source: wandKnight,
    thumbnail: wandKnight,
    caption: 'Knight of Wands',
  },
  {
    source: wandQueen,
    thumbnail: wandQueen,
    caption: 'Queen of Wands',
  },
  {
    source: wandKing,
    thumbnail: wandKing,
    caption: 'King of Wands',
  },
  {
    source: cup,
    thumbnail: cup,
    caption: 'Cups',
  },
  {
    source: cupPage,
    thumbnail: cupPage,
    caption: 'Page of Cups',
  },
  {
    source: cupKnight,
    thumbnail: cupKnight,
    caption: 'Knight of Cups',
  },
  {
    source: cupQueen,
    thumbnail: cupQueen,
    caption: 'Queen of Cups',
  },
  {
    source: cupKing,
    thumbnail: cupKing,
    caption: 'King of Cups',
  },
  {
    source: coin,
    thumbnail: coin,
    caption: 'Coins',
  },
  {
    source: coinPage,
    thumbnail: coinPage,
    caption: 'Page of Coins',
  },
  {
    source: coinKnight,
    thumbnail: coinKnight,
    caption: 'Knight of Coins',
  },
  {
    source: coinQueen,
    thumbnail: coinQueen,
    caption: 'Queen of Coins',
  },
  {
    source: coinKing,
    thumbnail: coinKing,
    caption: 'King of Coins',
  },
]

class TinyTarot extends React.Component {
  render() {
    return (
      <>
        <SEO title="Tiny Tarot" />
        <Layout>
          <section id="main">
            <h2>Tiny Tarot</h2>
            <h5>The tarot deck for smartwatches.</h5>
            <p>Available for <OutboundLink href="https://gallery.fitbit.com/details/4b20db37-f659-4ed4-935b-1063d73b7fa1">Fitbit</OutboundLink></p>
            <Gallery
              images={ images.map(
                ({ source, thumbnail, caption }) => ({
                  source,
                  thumbnail,
                  caption
                })
              ) }
            />
          </section>
        </Layout>
      </>
    )
  }
}

export default TinyTarot
