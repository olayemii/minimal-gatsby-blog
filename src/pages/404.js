import React, { useEffect } from "react"
import { navigate } from "gatsby"

function NotFound() {
  useEffect(() => {
    if (window.location.pathname.match(/^\/page\/1\/?$/)) {
      window.location.href = "/"
    } else {
      console.log(window.location.pathname)
    }
  }, [])
  return <div>Page Not Found</div>
}

export default NotFound
