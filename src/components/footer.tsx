import React from "react"
import { Typography } from "@material-ui/core"

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        paddingTop: "15px",
        height: "50px",
        color: "white",
      }}
      className="bg-dark"
    >
      <Typography variant="body1">
        Powered By Farhan Farooq, &copy; {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}

export default Footer
