import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Paper, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Helmet from "../components/head"
import Layout from "../components/layout"

const useStyles = makeStyles(() => ({
  paper: {
    padding: "20px",
    marginTop: "20px",
  },
  excerpt: {
    marginTop: "40px",
    marginBottom: "20px",
  },
}))

const BlogPage = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            excerpt {
              childMarkdownRemark {
                excerpt(pruneLength: 100)
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost

  return (
    <Layout>
      <Helmet title="Blog" />

      {edges.map((edge: any, i: number) => {
        const { slug, title, publishedDate } = edge.node

        return (
          <Paper key={i} elevation={5} className={classes.paper}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="caption">{publishedDate}</Typography>
            <Typography variant="body1" className={classes.excerpt}>
              {edge.node.excerpt.childMarkdownRemark.excerpt}
            </Typography>
            <div style={{ marginBottom: "30px", marginTop: "10px" }}>
              <Link to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="inherit">
                  Read More
                </Button>
              </Link>
            </div>
          </Paper>
        )
      })}
    </Layout>
  )
}

export default BlogPage
