import React, { useEffect } from "react"
import { graphql as gql } from "gatsby"
import "../assets/main.css"
import { Helmet } from "react-helmet"
import MainLayout from "../components/layouts/main/MainLayout"
import Article from "../components/common/article/Article"
import Pagination from "../components/common/pagination/Pagination"

export const query = gql`
  query GetTagPages($tag: String, $limit: Int, $skip: Int) {
    allRestApiPostsList(
      filter: { tags: { elemMatch: { tag: { name: { regex: $tag } } } } }
      limit: $limit
      skip: $skip
    ) {
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
`
const Tags = props => {
  const { data } = props
  const { currentPage, numberOfPages, pagePath } = props.pageContext
  const tag = pagePath.split("/").pop()
  return (
    <div className={"App"}>
      <MainLayout>
        <Helmet
          title={`TheNoobCoder | Posts tagged ${tag.toUpperCase()}`}
          defer={false}
        />
        <div className="articles">
          {data.allRestApiPostsList.edges.map(node => (
            <Article data={node.node} key={node.node.id} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          defaultPath={`/${props.pageContext.pagePath}`}
          path={props.uri + "/page/"}
          numberOfPages={numberOfPages}
        />
      </MainLayout>
    </div>
  )
}

export default Tags
