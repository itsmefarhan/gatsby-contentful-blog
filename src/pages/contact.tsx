import React from "react"
import { Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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
          Facebook
        </a>{" "}
        and{" "}
        <a
          href="https://twitter.com/itsmefari"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </Typography>
    </Layout>
  )
}

export default ContactPage
