module.exports = {
  siteMetadata: {
    title: "Eric Ho's Website",
    author: 'Eric Ho',
    description: 'A personal website for Eric Ho.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'eric-ho-website',
        short_name: "eric-ho-website",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/EH_logo_border.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}