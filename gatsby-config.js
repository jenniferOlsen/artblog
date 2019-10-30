module.exports = {
  siteMetadata: {
    title: "NinthDay Design",
    author: "Jenny Olsen",
    description: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ninth Day Design',
        short_name: 'ninthdaydesign',
        start_url: '/inktober-2019',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-269E3QTFWL`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}
