module.exports = {
  siteMetadata: {
    title: "Art blog",
    author: "Jenny Olsen",
    description: "A Gatsby.js art blog based on Strata by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Art blog',
        short_name: 'artblog',
        start_url: '/inktober-2019',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
