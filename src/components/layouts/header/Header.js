import React, { useState } from "react"
import navStyles from "../../../assets/nav.module.scss"
import { Link } from "gatsby"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaStackOverflow,
  FaSearch,
  FaTimes,
} from "react-icons/fa"

import { FiMenu } from "react-icons/fi"
const Header = props => {
  const [overlayState, setOverlayState] = useState(false)
  return (
    <>
      <header className={navStyles.navBar}>
        <div className={"container fit-main-layout dflex align-items-center"}>
          <div className={navStyles.brand}>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="27"
                viewBox="0 0 112 27"
              >
                <text
                  id="ROOKIEDEV"
                  transform="translate(0 22)"
                  fill="#707070"
                  fontSize="20"
                  fontFamily="NirmalaUI-Bold, Nirmala UI"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    ROOKIEDEV
                  </tspan>
                </text>
              </svg>
            </Link>
          </div>
          <div className={navStyles.rightNav}>
            {/* <div className={navStyles.formWrapper}>
              <FiSearch color={"#333333"} size={16} />
            </div> */}
            <FiMenu
              size={20}
              className={navStyles.hamburgerMenu}
              onClick={() => setOverlayState(true)}
            />
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
