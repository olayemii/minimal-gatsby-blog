import React, { useEffect } from "react"
import { useStaticQuery, graphql as gql } from "gatsby"
import MainLayout from "../components/layouts/main/MainLayout"
import postStyles from "../assets/post.module.scss"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import Disqus from "disqus-react"

const Post = props => {
	useEffect(() => {
		Prism.highlightAll()
	})
	const data = useStaticQuery(gql`
		{
			restApiV25Dd18Bf73200005D0006Fad6 {
				posts {
					id
					author {
						id
						name
						photo
					}
					tags {
						id
						tag
					}
					created_at
					read_time
					title
					content
				}
			}
		}
	`)
	const disqusShortname = "olayemiiblog" //found in your Disqus.com dashboard
	const disqusConfig = {
		identifier: data.restApiV25Dd18Bf73200005D0006Fad6.posts.id, //this.props.uniqueId
		title: data.restApiV25Dd18Bf73200005D0006Fad6.posts.title, //this.props.title
	}
	return (
		<MainLayout>
			<div className={postStyles.postBody}>
				<article className={postStyles.articleMain}>
					<h1 className={postStyles.articleTitle}>
						Lorem ipsum eiusmod deserunt dolore proident in adipisicing in
						dolore
					</h1>
					<div className={postStyles.articleMeta}>
						<div className={postStyles.metaFlex}>
							<div className={postStyles.authorDetails}>
								<div className={postStyles.authorPhoto}>
									<img
										src="https://res.cloudinary.com/practicaldev/image/fetch/s--OFhXKK12--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/262648/0731ff48-f615-4aec-82c0-a677c1ca850e.png"
										alt=""
									/>
								</div>
								<div className={postStyles.authorName}>OLayemii</div>
							</div>
							<span className={postStyles.date}>Jun 2, 2019</span>
							<span className={postStyles.readTime}>3 min read</span>
						</div>
						<ul className={postStyles.tags}>
							<li>Javascript</li>
							<li>PHP</li>
							<li>Gatsby</li>
						</ul>
					</div>
					<ReactMarkdown
						source={data.restApiV25Dd18Bf73200005D0006Fad6.posts[0].content}
					/>
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
