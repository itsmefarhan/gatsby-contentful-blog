import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"

const NotFound = () => {
  return (
    <Fragment>
      <Typography variant="h3" align="center">
        Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        <Link to="/">Back to Home</Link>
      </Typography>
    </Fragment>
  )
}

export default NotFound
