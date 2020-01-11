/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          // "http://www.mocky.io/v2/5dd18bf73200005d0006fad6",
          // "http://localhost:8080/posts/list",
          // "http://localhost:8080/posts/tags",
          "https://gatsby-minimal-blog.herokuapp.com/posts/list",
          "https://gatsby-minimal-blog.herokuapp.com/posts/tags",
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
  ],
}
