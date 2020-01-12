const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const tagsPage = await graphql(`
    query GetTags {
      allRestApiPostTags {
        edges {
          node {
            count
            color
            name
          }
        }
      }
    }
  `)
  const result = await graphql(`
    query GetPost {
      allRestApiPostsList {
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
            created_at
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

  const posts = result.data.allRestApiPostsList.edges
  const tags = tagsPage.data.allRestApiPostsTags
    ? tagsPage.data.allRestApiPostsTags.edges
    : []
  const postsPerPage = 5
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
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug,
        nextPost: posts[index - 1],
        previousPost: posts[index + 1],
      },
    })
  })
  console.log(tags)
  tags.forEach(({ node }) => {
    const tagPageCount = Math.ceil(node.count / postsPerPage)
    Array.from({ length: tagPageCount }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tag/${node.name.toLowerCase()}`
            : `/tag/${node.name.toLowerCase()}/page/${i + 1}`,
        component: path.resolve(`./src/templates/tagsindex.js`),
        context: {
          tag: `/${node.name}/i`,
          pagePath: `/tag/${node.name.toLowerCase()}`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: tagPageCount,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type RestApiPostsList implements Node {
      tags: [Tags]
    }
    type RestApiPostTags implements Node {
      id: Int,
      count: Int,
      name: String,
      color: String    
    }
    type Tags {
    id: Int,
    tag: Tag
    }
    type Tag {
      id: Int,
      count: Int,
      name: String,
      color: String   
    }
    `
  createTypes(typeDefs)
}
