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

const Home = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Helmet title="Home" />
      <Typography variant="h3">Welcome to the Gatsby Blog!</Typography>
      <Divider />
      <Typography variant="body1" className={classes.typo}>
        This blog is built with{" "}
        <a href="https://www.gatsbyjs.org/" target="_blank">
          Gatsby
        </a>{" "}
        & TypeScript on frontend and{" "}
        <a href="https://www.contentful.com/" target="_blank">
          Contentful{" "}
        </a>
        as Backend.
      </Typography>

      <Typography variant="body1" className={classes.typo}>
        <a
          href="https://www.contentful.com/developers/docs/concepts/webhooks/"
          target="_blank"
        >
          Contentful Webhooks
        </a>{" "}
        are used with{" "}
        <a href="https://github.com/features/actions" target="_blank">
          Github Actions{" "}
        </a>{" "}
        so that if we change something in Contentful, the updated content will
        be deployed immediately on website.
      </Typography>

      <Typography variant="body1" className={classes.typo}>
        <a href="https://material-ui.com/" target="_blank">
          Material-UI
        </a>{" "}
        is used for styling and responsive.
      </Typography>

      <Typography variant="body1" className={classes.typo}>
        This is a fully functional{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">
          Progressive Web App.
        </a>
      </Typography>
    </Layout>
  )
}

export default Home
