import React from "react"
import { Typography } from "@material-ui/core"
import Helmet from "../components/head"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet title="Contact" />
      <Typography variant="h3" align="center">
        Contact
      </Typography>
      <Typography variant="body1" align="center">
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
