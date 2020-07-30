import React from "react"
import { Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import { Fade } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"

const useStyles = makeStyles(() => ({
  typo: {
    marginTop: "20px",
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Helmet title="Contact" />
      <Fade cascade={true} direction='top'>
        <Typography variant="h3" className={classes.typo}>
          Contact
        </Typography>
        <Divider />
        <Typography variant="body1" className={classes.typo}>
          You can connect with me via{" "}
          <a
            href="https://facebook.com/farhan.abbasi"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/itsmefari"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </Typography>
      </Fade>
    </Layout>
  )
}

export default ContactPage
