import React, { useState } from "react"
import navStyles from "../../../assets/nav.module.scss"
import { Link } from "gatsby"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaStackOverflow,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa"

const Header = props => {
  const [overlayState, setOverlayState] = useState(false)
  return (
    <>
      <header className={navStyles.navBar}>
        <div className={"container dflex align-items-center"}>
          <div className={navStyles.brand}>
            <Link to="/">NOOBCODER</Link>
          </div>
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
              onClick={() => setOverlayState(true)}
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
      {overlayState ? (
        <div className={navStyles.overlay}>
          <div class={navStyles.cancelOverlay}>
            <FaTimes
              onClick={() => {
                setOverlayState(false)
                window.scrollTo(0, 0)
              }}
            />
          </div>
          <ul className={navStyles.quickLinks}>
            <li>Home</li>
            <li>About</li>
            <li>Posts</li>
            <li>Projects</li>
          </ul>
          <ul className={navStyles.socialLinks}>
            <li>
              <FaGithub size={24} className={navStyles.socialIcon} />
            </li>
            <li>
              <FaTwitter size={24} className={navStyles.socialIcon} />
            </li>
            <li>
              <FaLinkedin size={24} className={navStyles.socialIcon} />
            </li>
            <li>
              <FaStackOverflow size={24} className={navStyles.socialIcon} />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default Header
