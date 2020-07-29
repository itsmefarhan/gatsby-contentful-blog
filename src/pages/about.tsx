import React from "react"
import Layout from "../components/layout"
import Helmet from "../components/head"
import { Typography } from "@material-ui/core"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet title="About" />
      <Typography variant="h3" align="center">
        About Author
      </Typography>
      <Typography variant="body1" align="center">
        I am Farhan Farooq. I built this blog as part of bootcamp project.
      </Typography>      
    </Layout>
  )
}

export default AboutPage
