import React from "react"
import { Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Slide, Zoom } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"

const useStyles = makeStyles(() => ({
  typo: {
    marginTop: "20px",
  },
  links: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Helmet title="Home" />
      <Slide cascade direction="bottom">
        <Typography variant="h3">Welcome to the Gatsby Blog!</Typography>
        <Divider />
      </Slide>
      <Zoom>
        <Typography variant="body1" className={classes.typo}>
          This blog is built with{" "}
          <a
            className={classes.links}
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Gatsby
          </a>{" "}
          & TypeScript on frontend and{" "}
          <a
            className={classes.links}
            href="https://www.contentful.com/"
            target="_blank"
            rel="noreferrer"
          >
            Contentful{" "}
          </a>
          as Backend.
        </Typography>

        <Typography variant="body1" className={classes.typo}>
          <a
            className={classes.links}
            href="https://www.contentful.com/developers/docs/concepts/webhooks/"
            target="_blank"
            rel="noreferrer"
          >
            Contentful Webhooks
          </a>{" "}
          are used with{" "}
          <a
            className={classes.links}
            href="https://github.com/features/actions"
            target="_blank"
            rel="noreferrer"
          >
            Github Actions{" "}
          </a>{" "}
          so that if we change something in Contentful, the updated content will
          be deployed immediately on website.
        </Typography>

        <Typography variant="body1" className={classes.typo}>
          <a
            className={classes.links}
            href="https://material-ui.com/"
            target="_blank"
            rel="noreferrer"
          >
            Material-UI
          </a>{" "}
          is used for styling and responsiveness.
        </Typography>

        <Typography variant="body1" className={classes.typo}>
          This is a fully functional{" "}
          <a
            className={classes.links}
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            target="_blank"
            rel="noreferrer"
          >
            Progressive Web App.
          </a>
        </Typography>
      </Zoom>
    </Layout>
  )
}

export default Home
