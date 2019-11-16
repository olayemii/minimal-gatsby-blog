import React from "react"
import articleStyles from "../../../assets/article.module.scss"

const Article = props => {
	return (
		<article className={articleStyles.articleCard}>
			<h1 className={articleStyles.articleTitle}>Introduction to Gatsby</h1>
			<div>
				<span className={articleStyles.articleDate}>May 24, 2019</span>
				<span className={articleStyles.articleRead}>2 min read</span>
			</div>
			<p className={articleStyles.articleBody}>
				Aliquip quis quis exercitation exercitation duis eu ad dolor et elit
				esse commodo amet eiusmod anim in velit dolore nostrud consequat duis id
				sit enim veniam sed proident aliqua duis in irure in sit ut anim non
				tempor pariatur excepteur ut amet consequat non velit ullamco ex dolor
				magna aliqua aute esse irure cupidatat ea deserunt in aliquip dolor duis
				ut eiusmod laborum elit nisi consectetur anim incididunt amet deserunt
				in in exercitation enim dolor magna proident eu in sit sed consectetur
				ad aute esse...
			</p>
		</article>
	)
}

export default Article
