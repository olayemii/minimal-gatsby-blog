import React from "react"
import paginationStyles from "../../../assets/pagination.module.scss"

const Pagination = props => {
	return (
		<div className={paginationStyles.paginationWrapper}>
			<div className={paginationStyles.paginationItem}>🠐 Prev</div>
			<div className={paginationStyles.pageCount}>1 of 15</div>
			<div className={paginationStyles.paginationItem}>Next →</div>
		</div>
	)
}

export default Pagination
