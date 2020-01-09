const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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

  result.data.allRestApiPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/pages/post.js`),
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
