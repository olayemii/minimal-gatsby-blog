import React, { useEffect } from "react"
import { Redirect } from "@reach/router"
function NotFound() {
  const redirectHome = () => {
    return false
  }
  return redirectHome() ? <Redirect to={"/"} /> : <div>Page Not Found</div>
}

export default NotFound
