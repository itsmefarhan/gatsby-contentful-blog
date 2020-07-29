import React from "react"
import Helmet from "../components/head"
import { Typography } from "@material-ui/core"

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <Typography variant="h3" align="center">
        Welcome to The Gatsby Blog!
      </Typography>
      <Typography variant="body1" align="center">
        This blog is built with Gatsby, TypeScript and Contentful
      </Typography>
    </>
  )
}

export default Home
