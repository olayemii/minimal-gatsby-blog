import React from "react"
import paginationStyles from "../../../assets/pagination.module.scss"

const Pagination = props => {
  return (
    <div className={paginationStyles.paginationWrapper}>
      <div className={paginationStyles.paginate}>← Newer</div>
      <div className="flex-grow-1 text-center">Page 2 of 31</div>
      <div className={paginationStyles.paginate}>Older →</div>
    </div>
  )
}

export default Pagination
