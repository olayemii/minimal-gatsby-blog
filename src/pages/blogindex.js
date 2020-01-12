import React, { useEffect } from "react"
import { graphql as gql } from "gatsby"
import "../assets/main.css"
import MainLayout from "../components/layouts/main/MainLayout"
import Article from "../components/common/article/Article"
import Pagination from "../components/common/pagination/Pagination"
import { Helmet } from "react-helmet"

export const query = gql`
  query GetPosts($limit: Int, $skip: Int) {
    allRestApiPostsList(limit: $limit, skip: $skip) {
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
  const { currentPage, numberOfPages } = props.pageContext

  console.log(props)
  return (
    <div className={"App"}>
      <Helmet title="TheNoobCoder | Home" defer={false} />
      <MainLayout>
        <div className="articles">
          {data.allRestApiPostsList.edges.map(node => (
            <Article data={node.node} key={node.node.id} />
          ))}
        </div>
        <Pagination
          path={"/page/"}
          defaultPath={`/`}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </MainLayout>
    </div>
  )
}

export default Index
