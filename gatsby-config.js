require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
    author: "Farhan Farooq",
    description:
      "Gatsby Blog - A blog built with Gatsby, TypeScript and Contentful",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Blog`,
        short_name: `Gatsby Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#33b5e5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        icon_options: {
          purpose: "maskable any",
        },
      },
    },
    "gatsby-plugin-offline",
  ],
}
