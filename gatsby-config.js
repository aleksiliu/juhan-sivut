module.exports = {
  siteMetadata: {
    title: `Juha Makkonen CV`,
    author: `Aleksi Liukkonen`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juha Makkonen CV`,
        short_name: `Juhan CV`,
        start_url: `/`,
        background_color: `#88C577`,
        theme_color: `#88C577`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
