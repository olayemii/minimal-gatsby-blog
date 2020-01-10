import React, { useEffect } from "react"
import { graphql as gql } from "gatsby"
import MainLayout from "../components/layouts/main/MainLayout"
import postStyles from "../assets/post.module.scss"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import Disqus from "disqus-react"
export const query = gql`
  query GetPost($slug: String!) {
    restApiPosts(slug: { eq: $slug }) {
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
`

const Post = props => {
  const { data } = props
  useEffect(() => {
    Prism.highlightAll()
  })
  const disqusShortname = "olayemiiblog" //found in your Disqus.com dashboard
  const disqusConfig = {
    identifier: data.restApiPosts.id, //this.props.uniqueId
    title: data.restApiPosts.title, //this.props.title
  }
  return (
    <MainLayout>
      <div className={postStyles.postBody}>
        <article className={postStyles.articleMain}>
          <h1 className={postStyles.articleTitle}>{data.restApiPosts.title}</h1>
          <div className={postStyles.articleMeta}>
            <div className={postStyles.metaFlex}>
              <span className={postStyles.postDate}>
                August 20, 2019 by OLayemii
              </span>
            </div>
          </div>
          <div className={postStyles.articleMainBody}>
            <ReactMarkdown source={data.restApiPosts.content} />
          </div>
          <div className={postStyles.articleTags}>
            <div className={postStyles.tag}>TAGGED IN</div>
            <ul>
              <li>PHP</li>
              <li>Javascript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className={postStyles.disqusWrapper}>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </article>
        <aside className={postStyles.articleAside}>
          Eiusmod commodo amet ullamco sed dolor ut minim nostrud esse eiusmod
          eu sed occaecat excepteur aliqua minim laborum et dolor nulla amet
          adipisicing magna sint anim aliqua.
        </aside>
      </div>
    </MainLayout>
  )
}

export default Post
