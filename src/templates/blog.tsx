import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Typography } from "@material-ui/core"
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

const Blog = (props: any) => {
  console.log(props)
  const options = {
    renderNode: {
      "embedded-asset-block": (node: any) => {
        // console.log(node.data.target)
        if (node.data.target.fields) {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} src={url} className="img-fluid" />
        }
      },
    },
  }
  return (
    <Layout>
      <Helmet title={props.data.contentfulBlogPost.title} />
      <Typography variant="h5">
        {props.data.contentfulBlogPost.title}
      </Typography>
      <Typography
        variant="caption"
        style={{ marginBottom: "40px" }}
        display="block"
      >
        {props.data.contentfulBlogPost.publishedDate}
      </Typography>

      {options &&
        documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
    </Layout>
  )
}

export default Blog
