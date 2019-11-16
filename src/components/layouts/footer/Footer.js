import React from "react"
import footerStyles from "../../../assets/footer.module.scss"

const Footer = props => {
	return (
		<footer className={footerStyles.footer}>
			<div className="container text-center">
				All articles written with love by Garuba OLayemii
				<ul className={footerStyles.footerLinks}>
					<li>Home</li>
					<li>Subscribe</li>
					<li>Saved Articles</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
