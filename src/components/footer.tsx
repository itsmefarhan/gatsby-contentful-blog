import React, { useState, useEffect } from "react"
import { Typography } from "@material-ui/core"

const Footer = () => {
  const [pos, setPos] = useState<boolean>(false)

  useEffect(() => {
    setPos(window.innerHeight > window.document.body.clientHeight)
  }, [pos])

  return (
    <footer
      style={{
        position: pos ? "absolute" : "relative",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        paddingTop: "15px",
        height: "50px",
        color: "white",
      }}
      className="bg-dark"
    >
      <Typography variant="body1">
        Powered By Farhan Farooq, &copy; 2020
      </Typography>
    </footer>
  )
}

export default Footer
