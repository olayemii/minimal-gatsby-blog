const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const result = await graphql(`
    query GetPost {
      allRestApiPosts {
        edges {
          node {
            slug
            tags {
              id
              tag {
                color
                name
              }
            }
            id
            content
            title
            author {
              profile {
                first_name
                last_name
                profile_photo
              }
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allRestApiPosts.edges
  const postsPerPage = 1
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/" : `/page/${i + 1}`,
      component: path.resolve(`./src/pages/blogindex.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    })
  })
  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type RestApiPosts implements Node {
    tags: Tags
    }
    type Tags {
    id: Int,
    tag: Tag
    }
    type Tag {
    name: String,
    color: String
    }
    `
  createTypes(typeDefs)
}
