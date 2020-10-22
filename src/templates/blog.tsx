import React from "react"
import { graphql } from "gatsby"
import { Typography, Divider } from "@material-ui/core"
import { Fade } from "react-awesome-reveal"
import Helmet from "../components/head"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedAt(fromNow: true)
      image {
        fluid {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
interface Props {
  data: {
    contentfulBlog: {
      title: string
      publishedAt: string
      body: any
      image: any
    }
  }
}

const Blog = (props: Props) => {
  console.log(props.data.contentfulBlog)
  const {
    title,
    publishedAt,
    body: { childMarkdownRemark },
    image: { fluid },
  } = props.data.contentfulBlog

  return (
    <Layout>
      <Helmet title={title} />
      <Fade direction="bottom">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption" display="block">
          {publishedAt}
        </Typography>
        <Divider style={{ marginBottom: "40px" }} />
      </Fade>
      <Fade cascade direction="top">
        <img src={fluid.src} alt="" style={{ width: "100%" }} />
        <p dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}></p>
      </Fade>
    </Layout>
  )
}

export default Blog
