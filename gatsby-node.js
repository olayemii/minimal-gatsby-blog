// exports.onCreateNode = ({ node }) => {
// 	if (node.internal.type === "RestApiV25dd18bf73200005d0006fad6") {
// 		const fileNode = getNode(node.parent)
// 	}
// }

// exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const result = await graphql(`
// 		{
// 			restApiV25Dd18Bf73200005D0006Fad6 {
// 				posts {
// 					id
// 					author {
// 						id
// 						name
// 						photo
// 					}
// 					tags {
// 						id
// 						tag
// 					}
// 					created_at
// 					read_time
// 					title
// 					content
// 				}
// 			}
// 		}
// 	`)
// 	result.restApiV25Dd18Bf73200005D0006Fad6.posts.forEach(({ id }) => {
// 		createPage({
// 			path: id,
// 			component: path.resolve(`./src/pages/post.js`),
// 			context: {
// 				// Data passed to context is available
// 				// in page queries as GraphQL variables.
// 				slug: id,
// 			},
// 		})
// 	})
// }
