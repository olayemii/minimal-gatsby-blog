import React, { useEffect } from "react"
import { Redirect } from "@reach/router" // highlight-line
function NotFound() {
  const redirectHome = () => {
    if (window.location.pathname.match(/^\/page\/1\/?$/)) {
      return true
    }

    return false
  }
  return redirectHome() ? <Redirect to={"/"} /> : <div>Page Not Found</div>
}

export default NotFound
