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
        <div className={footerStyles.footerCredits}>
          © 2019 Olayemi Garuba. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
