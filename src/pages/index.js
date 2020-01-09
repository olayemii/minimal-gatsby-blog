import React from "react"
import { graphql as gql } from "gatsby"
import "../assets/main.css"
import MainLayout from "../components/layouts/main/MainLayout"
import Article from "../components/common/article/Article"
import Pagination from "../components/common/pagination/Pagination"

export const query = gql`
  query GetPosts {
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
`
const Index = props => {
  const { data } = props
  console.log(data)
  return (
    <div className={"App"}>
      <MainLayout>
        <div className="articles">
          {data.allRestApiPosts.edges.map(node => (
            <Article data={node.node} key={node.node.id} />
          ))}
        </div>
        <Pagination />
      </MainLayout>
    </div>
  )
}

export default Index
