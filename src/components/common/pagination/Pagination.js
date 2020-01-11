import React from "react"
import paginationStyles from "../../../assets/pagination.module.scss"
import { Link } from "gatsby"

const Pagination = props => {
  let { currentPage, numberOfPages } = props
  const getClassName = (currentPage, numberOfPages) => {
    let _className = ""
    if (currentPage === numberOfPages) {
      _className = "flex-grow-1 text-right"
    } else if (currentPage === 1) {
      _className = "flex-grow-1"
    } else {
      _className = "flex-grow-1 text-center"
    }

    return _className
  }
  return (
    <div className={paginationStyles.paginationWrapper}>
      {props.currentPage > 1 && (
        <div className={paginationStyles.paginate}>
          <Link to={currentPage > 2 ? `/page/${currentPage - 1}` : "/"}>
            ← Newer
          </Link>
        </div>
      )}
      <div className={getClassName(currentPage, numberOfPages)}>
        Page {currentPage} of {numberOfPages}
      </div>
      {currentPage !== numberOfPages && (
        <div className={paginationStyles.paginate}>
          <Link to={`/page/${currentPage + 1}`}>Older →</Link>
        </div>
      )}
    </div>
  )
}

export default Pagination
