import React from "react"
import ReactLoading from "react-loading"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  myloader: {
    background: "#292826",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.myloader}>
      <ReactLoading type="spinningBubbles" width="100px" color="#f9d342" />
    </div>
  )
}

export default Loader
