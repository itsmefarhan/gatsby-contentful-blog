import React from "react"
import { Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"

const useStyles = makeStyles(() => ({
  typo: {
    marginTop: "20px",
  },
}))

const AboutPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Helmet title="About" />
      <Fade cascade={true} direction='top'>
        <Typography variant="h3" className={classes.typo}>
          About Author
        </Typography>
        <Divider />
        <Typography variant="body1" className={classes.typo}>
          I am Farhan Farooq. I built this blog as part of bootcamp project.
        </Typography>
      </Fade>
    </Layout>
  )
}

export default AboutPage
