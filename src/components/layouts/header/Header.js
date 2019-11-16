import React from "react"
import navStyles from "../../../assets/nav.module.scss"
import {
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaStackOverflow,
	FaSearch,
	FaBars,
} from "react-icons/fa"

const Header = props => {
	return (
		<>
			<header className={navStyles.navBar}>
				<div className={"container dflex align-items-center"}>
					<div className={navStyles.brand}>B</div>
					<ul className={navStyles.quickLinks}>
						<li>Home</li>
						<li>About</li>
						<li>Projects</li>
						<li>Posts</li>
					</ul>
					<div className={navStyles.rightNav}>
						<div className={navStyles.formWrapper}>
							<FaSearch color={"#999999"} size={18} />
							<input placeholder={"Search posts"} />
						</div>
						<FaBars
							size={20}
							className={navStyles.hamburgerMenu}
							onClick={() => alert(1)}
						/>
						<ul className={navStyles.socialLinks}>
							<li>
								<FaGithub size={18} className={navStyles.socialIcon} />
							</li>
							<li>
								<FaTwitter size={18} className={navStyles.socialIcon} />
							</li>
							<li>
								<FaLinkedin size={18} className={navStyles.socialIcon} />
							</li>
							<li>
								<FaStackOverflow size={18} className={navStyles.socialIcon} />
							</li>
						</ul>
					</div>
				</div>
			</header>
			<div className={navStyles.overlay} style={{ display: "none" }}>
				<ul className={navStyles.quickLinks}>
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Posts</li>
				</ul>
				<ul className={navStyles.socialLinks}>
					<li>
						<FaGithub size={18} className={navStyles.socialIcon} />
					</li>
					<li>
						<FaTwitter size={18} className={navStyles.socialIcon} />
					</li>
					<li>
						<FaLinkedin size={18} className={navStyles.socialIcon} />
					</li>
					<li>
						<FaStackOverflow size={18} className={navStyles.socialIcon} />
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header
