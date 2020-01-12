import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Helmet } from "react-helmet"

const MainLayout = props => {
  let { children } = props
  return (
    <div>
      <Helmet meta={[{ name: "theme-color", content: "#02C39A" }]} />
      <Header />
      <div className="container main-layout-body">
        <div className="articles-wrapper">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
