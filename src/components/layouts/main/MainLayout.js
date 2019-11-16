import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const MainLayout = props => {
	let { children } = props
	return (
		<div>
			<Header />
			<div className="container main-layout-body">
				<div className="articles-wrapper">{children}</div>
			</div>
			<Footer />
		</div>
	)
}

export default MainLayout
