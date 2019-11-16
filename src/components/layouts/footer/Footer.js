import React from "react"
import footerStyles from "../../../assets/footer.module.scss"
import {
	FaFacebook,
	FaTwitter,
	FaStackOverflow,
	FaLinkedin,
} from "react-icons/fa"
const Footer = props => {
	return (
		<footer className={footerStyles.footer}>
			<div className="container text-center">
				Made with love <span className={footerStyles.heartEmoji}>&#9829;</span>{" "}
				by Garuba OLayemii
				<ul className={footerStyles.footerLinks}>
					<li>Home</li>
					<li>Subscribe</li>
					<li>Saved Articles</li>
				</ul>
				<ul className={footerStyles.socialIcons}>
					<li>
						<FaFacebook size={18} />
					</li>
					<li>
						<FaTwitter size={18} />
					</li>
					<li>
						<FaStackOverflow size={18} />
					</li>
					<li>
						<FaLinkedin size={18} />
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
