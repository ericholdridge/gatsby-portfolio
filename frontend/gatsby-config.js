module.exports = {
  siteMetadata: {
    title: "gatsby-portfolio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `fafu6gfx`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
  ],
};
