import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Typography, Divider } from "@material-ui/core"
import { Fade } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
interface Props {
  data: {
    contentfulBlogPost: {
      title: string
      publishedDate: string
      body: any
    }
  }
}

const Blog = (props: Props) => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const options = {
    renderNode: {
      "embedded-asset-block": (node: any) => {
        if (node.data.target.fields) {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <img
              alt={alt}
              src={url}
              style={{ maxWidth: "100%", display: "block" }}
            />
          )
        }
      },
    },
  }
  return (
    <Layout>
      <Helmet title={title} />
      <Fade direction="bottom">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption" display="block">
          {publishedDate}
        </Typography>
        <Divider style={{ marginBottom: "40px" }} />
      </Fade>
      <Fade cascade direction="top">
        {options && documentToReactComponents(body.json, options)}
      </Fade>
    </Layout>
  )
}

export default Blog
